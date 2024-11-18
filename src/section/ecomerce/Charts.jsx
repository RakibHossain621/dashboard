'use client'
import dynamic from "next/dynamic";
import React from "react";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const Charts = () => {
  // Donut Chart Data
  const donutChartOptions = {
    chart: {
      type: "donut",
    },
    labels: ["Womens", "Mens"],
    colors: ["#FFCC00", "#28C76F"],
    legend: {
      position: "bottom",
    },
    plotOptions: {
      pie: {
        donut: {
          size: "60%",
        },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: (val) => `${val.toFixed(0)}%`,
    },
    title: {
      text: "Current Download",
      align: "center",
      style: {
        fontSize: "16px",
        fontWeight: "bold",
      },
    },
  };

  const donutChartData = [59, 41];

  // Line Chart Data
  const lineChartOptions = {
    chart: {
      type: "line",
      height: 350,
      toolbar: {
        show: false,
      },
    },
    stroke: {
      width: [2, 2],
      curve: "smooth",
    },
    series: [
      {
        name: "Total Income",
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
      },
      {
        name: "Total Expenses",
        data: [20, 30, 25, 40, 45, 50, 65, 80, 100],
      },
    ],
    colors: ["#FFCC00", "#28C76F"],
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    },
    yaxis: {
      labels: {
        formatter: (value) => `${value}`,
      },
    },
    title: {
      text: "Area Installed",
      align: "center",
      style: {
        fontSize: "16px",
        fontWeight: "bold",
      },
    },
    legend: {
      position: "bottom",
    },
    dataLabels: {
      enabled: false,
    },
  };

  return (
    <div className="grid grid-cols-2 gap-8 mt-7">
      {/* Donut Chart */}
      <div className="p-4  rounded shadow">
        <Chart options={donutChartOptions} series={donutChartData} type="donut" height={300} />
      </div>

      {/* Line Chart */}
      <div className="p-4  rounded shadow">
        <Chart options={lineChartOptions} series={lineChartOptions.series} type="line" height={300} />
      </div>
    </div>
  );
};

export default Charts;
