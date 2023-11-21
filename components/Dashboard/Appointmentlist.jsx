// components/AppointmentList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { ScrollArea } from "@/components/ui/scroll-area"
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
    }, [appointments]);

    return (
            <ScrollArea className="h-[30rem] w-[500px] rounded-md border">  
            <Table >
  <TableCaption>Appointments</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Appointment ID</TableHead>
      <TableHead>Patient Name</TableHead>
      <TableHead>Date</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
        
                {appointments.map((medicine) => (<>

    <TableRow>
      <TableCell className="font-medium">{medicine.id}</TableCell>
      <TableCell>{medicine.patient_name}</TableCell>
      <TableCell>{medicine.appointment_date}</TableCell>
    </TableRow>
      </>
      ))}
  </TableBody>
</Table>
</ScrollArea>
    );
};

export default AppointmentList;
