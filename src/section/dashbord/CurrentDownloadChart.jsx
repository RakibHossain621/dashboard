'use client'
import React from 'react';
import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
const CurrentDownloadChart = () => {
  const options = {
    labels: ['Mac', 'Windows', 'iOS', 'Android'],
    colors: ['#00E396', '#FEB019', '#008FFB', '#FF4560'],
    legend: { show: true, position: 'bottom' },
  };

  const series = [20.5, 30.4, 30.0, 19.1];

  return (
    <div className="">
      <h2 className="text-lg font-semibold mb-4">Current Download</h2>
      <ApexChart  options={options} series={series} type="donut" width="100%"/>
    </div>
  );
};

export default CurrentDownloadChart;
