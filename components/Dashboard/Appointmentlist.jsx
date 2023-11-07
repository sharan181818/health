// components/AppointmentList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AppointmentList = () => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                const response = await axios.get('http://localhost:3001/appointments');
                setAppointments(response.data);
            } catch (error) {
                console.error('Error fetching appointments', error);
            }
        };

        fetchAppointments();
    }, []);

    return (
        <div>
            <h2>Appointments</h2>
            <ul>
                {appointments.map((appointment) => (
                    <li key={appointment.id}>{appointment.patient_name} - {appointment.appointment_date}</li>
                ))}
            </ul>
        </div>
    );
};

export default AppointmentList;
