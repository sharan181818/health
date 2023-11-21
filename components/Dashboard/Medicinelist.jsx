// components/MedicineList.js
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
    }, [medicines]);

    return (
        <div>
                        <h2 className='my-3 text-center font-semibold'>Medicines List</h2>
     
<ScrollArea className="h-72 w-full rounded-md border">       
            <Table >
  <TableCaption>A list of Medicines</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">ID</TableHead>
      <TableHead>Name</TableHead>
      <TableHead>Price</TableHead>
    </TableRow>
  </TableHeader>
  
  <TableBody>
                {medicines.map((medicine) => (<>

    <TableRow>
      <TableCell className="font-medium">{medicine.id}</TableCell>
      <TableCell>{medicine.name}</TableCell>
      <TableCell>{medicine.price}</TableCell>
    </TableRow>
      </>
      ))}

  </TableBody>

</Table>

      </ScrollArea>
        </div>
    );
};

export default MedicineList;
