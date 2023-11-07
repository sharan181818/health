// components/DoctorList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DoctorList = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        const fetchDoctors = async () => {
            try {
                const response = await axios.get('http://localhost:3001/doctors');
                setDoctors(response.data);
            } catch (error) {
                console.error('Error fetching doctors', error);
            }
        };

        fetchDoctors();
    }, []);

    return (
        <div>
            <h2>Doctors</h2>
            <ul>
                {doctors.map((doctor) => (
                    <li key={doctor.id}> {doctor.id} - {doctor.name} - {doctor.specialization}</li>
                ))}
            </ul>
        </div>
    );
};

export default DoctorList;
