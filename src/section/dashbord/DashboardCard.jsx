import React from "react";
import HomeSvg from "../../Icon/HomeSvg";
import BarChart from "../../Icon/BarChart";

const DashboardCard = () => {
  const cardData = [
    {
      title: "Total Active Users",
      percentage: "+2.6%",
      value: "18,765",
      color:"#059669",
    },
    {
      title: "Total Installed",
      percentage: "+0.2%",
      value: "4,876",
      color:"#00BBD9",
    },
    {
      title: "Total Downloads",
      percentage: "-0.1%",
      value: "678",
      color:"#FACE4F",
    },
  ];

  return (
    <section>
      <div className="grid grid-cols-3 gap-4 mt-6">
        {cardData.map((card, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-[14px] font-semibold text-[#212B36]">
                  {card.title}
                </h2>
                <div className="flex items-center gap-2 mt-3">
                  <span>
                    <HomeSvg />
                  </span>
                  <p className="text-[14px] font-semibold text-[#212B36]">
                    {card.percentage}
                  </p>
                </div>
                <h3 className="text-[34px] font-bold text-[#212B36] mt-3">
                  {card.value}
                </h3>
              </div>
              <div className="">
                <BarChart color={card.color}/>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DashboardCard;
