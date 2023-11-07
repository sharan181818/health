// components/MedicinePurchaseForm.js
import React, { useState } from 'react';
import axios from 'axios';

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
        <div>
            <h2>Buy Medicine</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Medicine ID:
                    <input type="text" value={medicineId} onChange={(e) => setMedicineId(e.target.value)} />
                </label>
                <br />
                <label>
                    Quantity:
                    <input type="text" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                </label>
                <br />
                <button className='bg-blue-300 rounded-md p-2' type="submit">Buy Medicine</button>
            </form>
        </div>
    );
};

export default MedicinePurchaseForm;
