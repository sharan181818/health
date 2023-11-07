import React from 'react'
import Link from 'next/link'


const Dashboard = () => {
  return (
    <div>
       

<section id="features">
       

        <div class="feature" id="doctorSearchFeature">
            <h2>Find Your Doctor</h2>
            <p>Search for doctors by specialty and location.</p>
            <Link href={"/doctors"} className='bg-blue-300 rounded-md p-2'>Find Doctors</Link>
        </div>

        <div class="feature" id="schedulingFeature">
            <h2>Schedule Appointments</h2>
            <p>Book appointments with ease.</p>
            <Link href={"/appointments"} className='bg-blue-300 rounded-md p-2'>Schedule Appointment</Link>
        </div>

        <div class="feature" id="historyFeature">
            <h2> Medicines</h2>
            <p>View your past and upcoming appointments.</p>
            <Link href={"/medicines"} className='bg-blue-300 rounded-md p-2'>View History</Link>
        </div>

        
    </section>


 
   

    

    
    
    </div>
  )
}

export default Dashboard