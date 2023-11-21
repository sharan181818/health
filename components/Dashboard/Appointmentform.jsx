// components/AppointmentForm.js
import React, { useState } from 'react';
import axios from 'axios';
import { Input } from "@/components/ui/input"

import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
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
        <Card className="w-[500px] h-fit ">
        <CardHeader>
            <CardTitle>Appointments</CardTitle>
            <CardDescription>Book Appointment</CardDescription>
           </CardHeader>
            <CardContent>
            <form onSubmit={handleSubmit}>
                <Label>
                    Patient Name:
                    <Input type="text" value={patientName} onChange={(e) => setPatientName(e.target.value)} />
                </Label>
                <br />
                <Label>
                    Doctor ID:
                    <Input type="text" value={doctorId} onChange={(e) => setDoctorId(e.target.value)} />
                </Label>
                <br />
                <Label>
                    Appointment Date:
                    <Input type="datetime-local" value={appointmentDate} onChange={(e) => setAppointmentDate(e.target.value)} />
                </Label>
                <br />
                <Button className='w-full' type="submit">Book Appointment</Button>
            </form>
        </CardContent>
        </Card>
    );
};

export default AppointmentForm;
