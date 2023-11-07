// components/MedicineList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MedicineList = () => {
    const [medicines, setMedicines] = useState([]);

    useEffect(() => {
        const fetchMedicines = async () => {
            try {
                const response = await axios.get('http://localhost:3001/medicines');
                setMedicines(response.data);
            } catch (error) {
                console.error('Error fetching medicines', error);
            }
        };

        fetchMedicines();
    }, []);

    return (
        <div>
            <h2>Medicines</h2>
            <ul>
                {medicines.map((medicine) => (
                    <li key={medicine.id}> {medicine.id} - {medicine.name} - ${medicine.price}</li>
                ))}
            </ul>
        </div>
    );
};

export default MedicineList;
