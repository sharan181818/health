import React from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const Dashboard = () => {
  const cardData = [
    {
      title: "Find Your Doctor",
      description: "Find a Suitable Doctor Near You",
      button:"Find Doctor",
      link: "/doctors",
    },
    {
      title: "Schedule Appointments",
      description: "Book appointments with ease.",
      button:"Book Appointment",
      link: "/appointments",
    },
    {
      title: " Medicines",
      description: "Book Medicines",
      button:"Book Medicines",
      link: "/medicines",
    },
    {
      title: "BMI Calculator",
      description: "Calculate Your BMI",
      button:"Calculate BMI",
      link: "/bmi",
    },
    
  ];
  
  return (
    <div>
      {/* Hero */}
  <div className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/component/squared-bg-element.svg')] before:bg-no-repeat before:bg-top before:w-full before:h-full before:-z-[1] before:transform before:-translate-x-1/2 dark:before:bg-[url('https://preline.co/assets/svg/component/squared-bg-element-dark.svg')]">
    <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-0">
    
      <div className="mt-5 max-w-xl text-center mx-auto">
        <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200">
          HealthCare
        </h1>
      </div>
      {/* End Title */}
      <div className="mt-5 max-w-3xl text-center mx-auto">
        <p className="text-lg text-gray-600 dark:text-gray-400">
          {" "}
          Doctors And HealthCare In Your DoorStep
        </p>
      </div>
    </div>
  </div>
  {/* End Hero */}

 

<div className='max-w-screen-xl my-10  md:mb-[3rem] flex flex-wrap justify-around  mx-auto   px-3 py-6'>
       
{cardData.map((data, index) => (
        <Card key={index} className=" w-full md:w-[500px] mt-[2rem] flex flex-col gap-5 px-4 py-10">
          <CardTitle>{data.title}</CardTitle>
          <CardDescription>{data.description}</CardDescription>
          <Link href={data.link}>
            <Button className="w-full">{data.button}</Button>
          </Link>
        </Card>
      ))}

        
    </div>


 
   

    

    
    
    </div>
  )
}

export default Dashboard