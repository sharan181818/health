import React from 'react'
import AppointmentForm from '@/components/Dashboard/Appointmentform'
import AppointmentList from '@/components/Dashboard/Appointmentlist'
const appointments = () => {
  return (
    <div>
       <div className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/component/squared-bg-element.svg')] before:bg-no-repeat before:bg-top before:w-full before:h-full before:-z-[1] before:transform before:-translate-x-1/2 dark:before:bg-[url('https://preline.co/assets/svg/component/squared-bg-element-dark.svg')]">
    <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-0">
    
      <div className="mt-5 max-w-xl text-center mx-auto">
        <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200">
        Appointments
        </h1>
      </div>
      {/* End Title */}
      <div className="mt-5 max-w-3xl text-center mx-auto">
        <p className="text-lg text-gray-600 dark:text-gray-400">
          {" "}
          Schedule and View Your Appointments
        </p>
      </div>
    </div>
  </div>
        <div className="flex justify-center flex-wrap gap-10 pt-20">
            <AppointmentForm/>
            <AppointmentList/>
    </div>
    </div>
  )
}

export default appointments