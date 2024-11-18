import React from "react";
import BannerLogo from "../../Icon/BannerLogo";

const Banner = () => {
  return (
    <section>
      <div className="wrapper flex justify-between items-center bg-[#DDF6E8] rounded-[15px] p-12">
        <div className="left w-4/12">
          <div className="">
            <h1 className="text-[27px] font-bold text-[#004B50] ">
              Welcome back 👋 Jaydon Frankie
            </h1>
            <p className="text-[14px] font-light leading-5 text-[#004B50] mt-4">
              If you are going to use a passage of Lorem Ipsum, you need to be
              sure there isn't anything.
            </p>
            <button className="mt-4 px-4 py-2 bg-[#00A76F] text-[14px] font-medium text-white rounded-[8px]">
              GO NOW
            </button>
          </div>
        </div>
        <div className="Right w-4/12 flex justify-end">
          <div>
            <BannerLogo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
