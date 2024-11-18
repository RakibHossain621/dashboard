"use client";
import * as React from "react";
import { Progress } from "@/components/ui/progress";

export default function ProgressDemo() {
  const [progress, setProgress] = React.useState(13);

  const progressbar = [
    {
      label: "Total Profit",
      amount: "$8,374",
      percentage: "(10.1%)",
      color: "bg-green-500",
      color1: "bg-[#059669]",
      value: 23
    },
    {
      label: "Total Income",
       amount: "$9,714",
      percentage: "(10.1%)",
      color: "bg-blue-500",
      color1: "bg-[#9ee4f0]",
      value : 28
    },
    {
      label: "Total Expenses",
      amount: "$6,871",
      percentage: "(10.1%)",
      color: "bg-yellow-500",
      color1: 'bg-[#ffdf9e]',
      value : 36
    },
  ];

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
    
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-lg font-semibold text-gray-800">Sales Overview</h1>
        <p className="text-lg font-medium text-gray-600">Current Balance</p>
      </div>

     
      <div className="space-y-6">
        {progressbar.map((item, index) => (
          <div key={index} className="mb-4">
           
            <div className="flex justify-between items-center mb-2">
              <p className="text-sm text-gray-700">{item.label}</p>
              <p className="text-sm text-gray-900 font-medium">
                {item.amount}{" "}
                <span className="text-gray-500">{item.percentage}</span>
              </p>
            </div>
            <div className="rounded-full">
            <Progress value={`${item.value}`} classIn={`${item.color1}`} className={`${item.color}`}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
