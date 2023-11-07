import React from 'react'

import MedicineList from '@/components/Dashboard/Medicinelist'
import MedicinePurchaseForm from '@/components/Dashboard/Medicinepurchase'
import PurchasedMedicineList from '@/components/Dashboard/Purchasedmedicine'
const medicines = () => {
  return (
    <div>
        <div className="flex justify-center pt-20">
<MedicinePurchaseForm/>
        </div>

        <div className="flex justify-center">
            <MedicineList/>
        </div>

        <div className=" flex justify-center mt-10">
            {/* <h3> Purchased</h3> */}
            <PurchasedMedicineList/>

        </div>

    </div>
  )
}

export default medicines