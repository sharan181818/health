// components/DoctorList.js
import React, { useState, useEffect } from "react";
import axios from "axios";
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
const DoctorList = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        const fetchDoctors = async () => {
            try {
                const response = await axios.get("http://localhost:3001/doctors");
                console.log(response.data);
                setDoctors(response.data);
            } catch (error) {
                console.error("Error fetching doctors", error);
            }
        };

        fetchDoctors();
    }, [doctors]);

    return (
        <div className="max-w-screen-xl mx-auto">
 <div className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/component/squared-bg-element.svg')] before:bg-no-repeat before:bg-top before:w-full before:h-full before:-z-[1] before:transform before:-translate-x-1/2 dark:before:bg-[url('https://preline.co/assets/svg/component/squared-bg-element-dark.svg')]">
    <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-5 pb-0">
    
      <div className="mt-5 max-w-xl text-center mx-auto">
        <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200">
          DoctorList
        </h1>
      </div>
      {/* End Title */}
      <div className="mt-5 max-w-3xl text-center mx-auto">
        <p className="text-lg text-gray-600 dark:text-gray-400">
          {" "}
          Find A Doctor
        </p>
      </div>
    </div>
  </div>
            <ScrollArea className="h-[30rem] my-14 w-full rounded-md border">  
            <Table >
  <TableCaption>Purchased Medicines</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Doctor ID</TableHead>
      <TableHead>Name</TableHead>
      <TableHead>Specialization</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
        
                {doctors.map((medicine) => (<>

    <TableRow>
      <TableCell className="font-medium">{medicine.id}</TableCell>
      <TableCell>{medicine.name}</TableCell>
      <TableCell>{medicine.specialization}</TableCell>
    </TableRow>
      </>
      ))}
  </TableBody>
</Table>
</ScrollArea>
        </div>
    );
};

export default DoctorList;
