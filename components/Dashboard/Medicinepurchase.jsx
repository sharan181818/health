// components/MedicinePurchaseForm.js
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

const MedicinePurchaseForm = () => {
    const [medicineId, setMedicineId] = useState('');
    const [quantity, setQuantity] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post('http://localhost:3001/buy-medicine', {
                medicine_id: parseInt(medicineId),
                quantity: parseInt(quantity),
            });

            alert('Medicine purchased successfully!');
        } catch (error) {
            console.error('Error purchasing medicine', error);
        }
    };

    return (
            <Card className="w-[500px] h-fit ">
        <CardHeader>
            <CardTitle>Medicines</CardTitle>
            <CardDescription>Buy Medicines</CardDescription>
           </CardHeader>
            <CardContent>
            <form onSubmit={handleSubmit}>
                <Label>
                    Medicine ID:
                    <Input type="text" value={medicineId} onChange={(e) => setMedicineId(e.target.value)} />
                </Label>
                <br />
                <Label>
                    Quantity:
                    <Input type="text" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                </Label>
                <br />
                <Button className='w-full' type="submit">Buy Medicine</Button>
            </form>
            </CardContent>
            </Card>
    );
};

export default MedicinePurchaseForm;
