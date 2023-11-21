import React from 'react'

import MedicineList from '@/components/Dashboard/Medicinelist'
import MedicinePurchaseForm from '@/components/Dashboard/Medicinepurchase'
import PurchasedMedicineList from '@/components/Dashboard/Purchasedmedicine'
const medicines = () => {
  return (
    <div className="">
       <div className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/component/squared-bg-element.svg')] before:bg-no-repeat before:bg-top before:w-full before:h-full before:-z-[1] before:transform before:-translate-x-1/2 dark:before:bg-[url('https://preline.co/assets/svg/component/squared-bg-element-dark.svg')]">
    <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-0">
    
      <div className="mt-5 max-w-xl text-center mx-auto">
        <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200">
          Medicines
        </h1>
      </div>
      {/* End Title */}
      <div className="mt-5 max-w-3xl text-center mx-auto">
        <p className="text-lg text-gray-600 dark:text-gray-400">
          {" "}
          View and Purchase Medicines
        </p>
      </div>
    </div>
  </div>
    <div className='flex flex-wrap justify-center my-16 items-center  gap-20'>
      <MedicinePurchaseForm/>

            <PurchasedMedicineList/>
            <MedicineList/>


    </div>
    </div>
  )
}

export default medicines