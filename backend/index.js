const express = require("express");
const { Pool } = require("pg");
const cors = require("cors");

const app = express();
const port = 3001;

const pool = new Pool({
    user: "user",
    host: "postgres",
    database: "postgres",
    password: "password",
    port: 5432,
});
app.use(cors());
app.use(express.json());
async function initializeDatabase() {
    try {
        // Create 'doctors' table if it doesn't exist
        await pool.query(`
            CREATE TABLE IF NOT EXISTS doctors (
                id SERIAL PRIMARY KEY,
                name VARCHAR(255)
            );
        `);

        // Create 'medicines' table if it doesn't exist
        await pool.query(`
            CREATE TABLE IF NOT EXISTS medicines (
                id SERIAL PRIMARY KEY,
                name VARCHAR(255),
                price NUMERIC(10, 2)
            );
        `);

        // Populate 'doctors' table with sample data

        // Populate 'medicines' table with sample data

        // Create 'appointments' table if it doesn't exist
        await pool.query(`
            CREATE TABLE IF NOT EXISTS appointments (
                id SERIAL PRIMARY KEY,
                patient_name VARCHAR(255),
                doctor_id INT,
                appointment_date DATE
            );
        `);

        // Create 'bought_medicines' table if it doesn't exist
        await pool.query(`
            CREATE TABLE IF NOT EXISTS bought_medicines (
                id SERIAL PRIMARY KEY,
                medicine_id INT,
                quantity INT,
                total_price NUMERIC(10, 2)
            );
        `);

        await populateDoctorsTable();
        await populateMedicinesTable();
        console.log("Database tables are initialized.");
    } catch (error) {
        console.error("Error initializing database tables", error);
    }
}

async function populateDoctorsTable() {
    try {
        // Populate 'doctors' table with sample data
        for (let i = 1; i <= 20; i++) {
            const doctorName = `Doctor ${i}`;
            await pool.query(
                `
                INSERT INTO doctors (name) VALUES ($1);
            `,
                [doctorName],
            );
        }

        console.log("Doctors table is populated.");
    } catch (error) {
        console.error("Error populating doctors table", error);
    }
}

async function populateMedicinesTable() {
    try {
        // Populate 'medicines' table with sample data
        for (let i = 1; i <= 20; i++) {
            const medicineName = `Medicine ${i}`;
            const medicinePrice = parseFloat((Math.random() * 1000).toFixed(2));
            await pool.query(
                `
                INSERT INTO medicines (name, price) VALUES ($1, $2);
            `,
                [medicineName, medicinePrice],
            );
        }

        console.log("Medicines table is populated.");
    } catch (error) {
        console.error("Error populating medicines table", error);
    }
}

// Initialize the database tables when the application starts
initializeDatabase();
app.get("/doctors", async (req, res) => {
    try {
        const { rows } = await pool.query("SELECT * FROM doctors");
        res.json(rows);
    } catch (error) {
        console.error("Error fetching doctors", error);
        res.status(500).send("Internal Server Error");
    }
});

// Get all medicines
app.get("/medicines", async (req, res) => {
    try {
        const { rows } = await pool.query("SELECT * FROM medicines");
        res.json(rows);
    } catch (error) {
        console.error("Error fetching medicines", error);
        res.status(500).send("Internal Server Error");
    }
});

// Book an appointment
app.post("/appointments", async (req, res) => {
    const { patient_name, doctor_id, appointment_date } = req.body;

    try {
        await pool.query(
            "INSERT INTO appointments(patient_name, doctor_id, appointment_date) VALUES($1, $2, $3)",
            [patient_name, doctor_id, appointment_date],
        );
        res.send("Appointment booked successfully!");
    } catch (error) {
        console.error("Error booking appointment", error);
        res.status(500).send("Internal Server Error");
    }
});

// Get all appointments
app.get("/appointments", async (req, res) => {
    try {
        const { rows } = await pool.query("SELECT * FROM appointments");
        res.json(rows);
    } catch (error) {
        console.error("Error fetching appointments", error);
        res.status(500).send("Internal Server Error");
    }
});

app.post("/buy-medicine", async (req, res) => {
    const { medicine_id, quantity } = req.body;

    try {
        const { rows } = await pool.query("SELECT * FROM medicines WHERE id = $1", [
            medicine_id,
        ]);

        if (rows.length === 0) {
            res.status(404).send("Medicine not found");
            return;
        }

        const medicine = rows[0];
        const totalPrice = medicine.price * quantity;

        await pool.query(
            "INSERT INTO bought_medicines(medicine_id, quantity, total_price) VALUES($1, $2, $3)",
            [medicine_id, quantity, totalPrice],
        );

        res.send("Medicine purchased successfully!");
    } catch (error) {
        console.error("Error purchasing medicine", error);
        res.status(500).send("Internal Server Error");
    }
});

// Get all purchased medicines
app.get("/purchased-medicines", async (req, res) => {
    try {
        const { rows } = await pool.query("SELECT * FROM bought_medicines");
        res.json(rows);
    } catch (error) {
        console.error("Error fetching purchased medicines", error);
        res.status(500).send("Internal Server Error");
    }
});

// Define API routes here...

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
