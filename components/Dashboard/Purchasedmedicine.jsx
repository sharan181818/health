// components/PurchasedMedicineList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
    }, []);

    return (
        <div>
            <h2>Purchased Medicines</h2>
            <ul>
                {purchasedMedicines.map((purchase) => (
                    <li key={purchase.id}>{purchase.medicine_id} - Quantity: {purchase.quantity} - Total Price: ${purchase.total_price}</li>
                ))}
            </ul>
        </div>
    );
};

export default PurchasedMedicineList;
