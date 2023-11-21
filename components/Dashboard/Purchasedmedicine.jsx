// components/PurchasedMedicineList.js
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
const PurchasedMedicineList = () => {
    const [purchasedMedicines, setPurchasedMedicines] = useState([]);

    useEffect(() => {
        const fetchPurchasedMedicines = async () => {
            try {
                const response = await axios.get('http://localhost:3001/purchased-medicines');
                setPurchasedMedicines(response.data);
            } catch (error) {
                console.error('Error fetching purchased medicines', error);
            }
        };

        fetchPurchasedMedicines();
    }, [purchasedMedicines]);

    return (
        <div>
            <h2 className=' my-3 text-center font-semibold'>Purchased Medicines</h2>
            <ScrollArea className="h-72 w-full rounded-md border">  
            <Table >
  <TableCaption>Purchased Medicines</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">MedicineID</TableHead>
      <TableHead>Quantity</TableHead>
      <TableHead>Total Price</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
        
                {purchasedMedicines.map((medicine) => (<>

    <TableRow>
      <TableCell className="font-medium">{medicine.medicine_id}</TableCell>
      <TableCell>{medicine.quantity}</TableCell>
      <TableCell>{medicine.total_price}</TableCell>
    </TableRow>
      </>
      ))}
  </TableBody>
</Table>
</ScrollArea>
        </div>
    );
};

export default PurchasedMedicineList;
