'use client'
import React from 'react';
import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
const AreaInstalledChart = () => {
  const options = {
    chart: { type: 'line' },
    stroke: { curve: 'smooth' },
    legend: { show: true, position: 'top' },
    colors: ['#A3E4D7', '#F9E79F'],
    xaxis: { categories: ['2020', '2021', '2022', '2023', '2024'] },
    yaxis: { min: 0, max: 5, tickAmount: 5 },
  };

  const series = [
    { name: 'Asia', data: [1, 2, 3, 4, 5] },
    { name: 'America', data: [2, 3, 1, 4, 2] },
  ];

  return (
    <div>
      <h2 className="text-lg font-semibold mb-1">Area Installed</h2>
      <p className="text-sm text-gray-500 mb-4">(+43%) than last year</p>
      <ApexChart options={options} series={series} type="line" width="100%" />
    </div>
  );
};

export default AreaInstalledChart;
