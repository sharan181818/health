import React from 'react'
import AppointmentForm from '@/components/Dashboard/Appointmentform'
import AppointmentList from '@/components/Dashboard/Appointmentlist'
const appointments = () => {
  return (
    <div>
        <div className="flex justify-center pt-20">
            <AppointmentForm/>
        </div>
        <div className="flex justify-center ">
            <AppointmentList/>
        </div>
    </div>
  )
}

export default appointments