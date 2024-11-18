import React from "react";
import FlowIcon from "../../Icon/FlowIcon";
import TreadingIcon from "../../Icon/TreadingIcon";

const cardBox = [
  {
    title: "Product Sold",
    title1: "765",
    svg: <FlowIcon />,
    description: "+2.6% than last week",
    color: "text-[#059669]",
    bgColor: 'bg-[#E1F5E6]'
  },
  {
    title: "Total Balance",
    title1: "18,765",
    svg: <FlowIcon />,
    description: "-0.1% than last week",
    color: "text-[#FF5631]",
    bgColor: 'bg-[#FFE5DF]'
  },
  {
    title: "Sales Profit",
    title1: "4,876",
    svg: <FlowIcon />,
    description: "+0.6% than last week",
    color: "text-[#059669]",
    bgColor: 'bg-[#E1F5E6]'
  },
];

const EcommerceCard = () => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-12">
      {cardBox.map((card, index) => (
        <div className=" bg-white shadow-md rounded-lg p-6 ">
          <div key={index} className="flex justify-between items-center">
            <div>
              <h1 className=" text-sm font-medium">{card.title}</h1>
              <h2 className="text-2xl font-bold text-gray-900 mt-3">
                {card.title1}
              </h2>
              <div className="flex items-center gap-2 mt-5">
                <span className={`w-5 h-5 ${card.bgColor} ${card.color} rounded-2xl flex items-center justify-center`}>
                  {card.svg}
                </span>
                <p>{card.description}</p>
              </div>
            </div>

            <div>
              <TreadingIcon />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EcommerceCard;
