// components/AppointmentForm.js
import React, { useState } from 'react';
import axios from 'axios';

const AppointmentForm = () => {
    const [patientName, setPatientName] = useState('');
    const [doctorId, setDoctorId] = useState('');
    const [appointmentDate, setAppointmentDate] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post('http://localhost:3001/appointments', {
                patient_name: patientName,
                doctor_id: parseInt(doctorId),
                appointment_date: appointmentDate,
            });

            alert('Appointment booked successfully!');
        } catch (error) {
            console.error('Error booking appointment', error);
        }
    };

    return (
        <div>
            <h2>Book Appointment</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Patient Name:
                    <input type="text" value={patientName} onChange={(e) => setPatientName(e.target.value)} />
                </label>
                <br />
                <label>
                    Doctor ID:
                    <input type="text" value={doctorId} onChange={(e) => setDoctorId(e.target.value)} />
                </label>
                <br />
                <label>
                    Appointment Date:
                    <input type="datetime-local" value={appointmentDate} onChange={(e) => setAppointmentDate(e.target.value)} />
                </label>
                <br />
                <button className='bg-blue-300 rounded-md p-2' type="submit">Book Appointment</button>
            </form>
        </div>
    );
};

export default AppointmentForm;
