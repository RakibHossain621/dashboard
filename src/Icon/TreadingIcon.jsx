import React from "react";

const TreadingIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="96"
      height="64"
      className="apexcharts-svg"
      style={{ background: "0 0" }}
    >
      <foreignObject width="96" height="64" x="0" y="0">
        <div className="apexcharts-legend" style={{ maxHeight: "32px" }}></div>
      </foreignObject>
      <g
        className="apexcharts-inner apexcharts-graphical"
        transform="translate(0 1.5)"
      >
        <defs>
          <linearGradient
            id="SvgjsLinearGradient1318"
            x1="0"
            x2="0"
            y1="0"
            y2="1"
          >
            <stop offset="0" stopColor="#5be49b"></stop>
            <stop offset="1" stopColor="#00a76f"></stop>
          </linearGradient>
          <clipPath id="gridRectMask9bfctf3h">
            <rect
              width="103"
              height="77"
              x="-5"
              y="-8"
              fill="#fff"
              strokeDasharray="0"
              strokeWidth="0"
              rx="0"
              ry="0"
            ></rect>
          </clipPath>
        </defs>
        <g stroke="transparent" strokeDasharray="0" className="apexcharts-grid">
          <path d="M0 61h96M0 1v60"></path>
        </g>
        <g className="apexcharts-line-series apexcharts-plot-series">
          <g className="apexcharts-series">
            <path
              fill="none"
              stroke="url(#SvgjsLinearGradient1318)"
              strokeDasharray="0"
              strokeLinecap="round"
              strokeWidth="3"
              d="M0 47.58c1.083.867 7.543 9.701 10.667 8.54s9.21-14.722 10.666-16.47 9.4-7.447 10.667-9.15 7.479-18.438 10.667-19.52 7.114-1.323 10.666-1.22 9.21 2.522 10.667 4.27 7.38 40.59 10.667 39.65S83.342 9.695 85.333 7.93 95.758 34.16 96 34.77"
              className="apexcharts-line"
              clipPath="url(#gridRectMask9bfctf3h)"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default TreadingIcon;
