import  { useState } from 'react';
import { Input } from "@/components/ui/input"

import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
function Bmi() {
  const [height, setHeight] = useState(180);
  const [weight, setWeight] = useState(70);
  const [bmi, setBMI] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    setBMI(bmi);
  };

  return (
    <div className="">
         <div className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/component/squared-bg-element.svg')] before:bg-no-repeat before:bg-top before:w-full before:h-full before:-z-[1] before:transform before:-translate-x-1/2 dark:before:bg-[url('https://preline.co/assets/svg/component/squared-bg-element-dark.svg')]">
    <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-0">
    
      <div className="mt-5 max-w-xl text-center mx-auto">
        <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200">
          BMI Calculator
        </h1>
      </div>
      {/* End Title */}
      <div className="mt-5 max-w-3xl text-center mx-auto">
        <p className="text-lg text-gray-600 dark:text-gray-400">
          {" "}
          Calculate Your BMI
        </p>
      </div>
    </div>
  </div>
    <Card className="w-full max-w-lg  mx-auto  my-10 md:my-[3rem]">
        <CardHeader>
            <CardTitle>BMI Calculator</CardTitle>
            <CardDescription>Calculate your BMI</CardDescription>
           </CardHeader>
            <CardContent>

    <form onSubmit={handleSubmit}>
      <Label>
        Height:
        <Input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
      </Label>
      <br />
      <Label>
        Weight:
        <Input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
      </Label>
      <br />
      <Button type="submit" className="w-full">Calculate BMI</Button>
      <div className="mt-3 text-lg">

      BMI : {bmi}
      </div>
    </form>
    </CardContent>
    </Card>
</div>
  );
}

export default Bmi;







