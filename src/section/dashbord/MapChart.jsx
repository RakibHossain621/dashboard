import React from "react";
import CurrentDownloadChart from "./CurrentDownloadChart";
import AreaInstalledChart from "./AreaInstalledChart";
const MapChart = () => {
  return (
    <section>
      <div className="wrapper flex gap-6 mt-5">
        <div className="left w-[50%] bg-white rounded-lg shadow-md p-6">
          <CurrentDownloadChart />
        </div>

        <div className="right w-[50%] bg-white rounded-lg shadow-md p-6">
          <AreaInstalledChart />
        </div>
      </div>
    </section>
  );
};

export default MapChart;
