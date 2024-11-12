"use client";
import LogoSvg from "@/Icon/LogoSvg";
import MuiBox from "@/Icon/MuiBox";
import Link from "next/link";
import React from "react";
import Button from "./Button";
const Sidebar = () => {
  const menuItems = [
    { name: "Dashboard",
      icon: <MuiBox />,
      href: "/dashboard",
     isActive: true },
    {
      name: "E-commerce",
      icon: <MuiBox />,
      href: "/dashboard/ecommerce",
      isActive: false,
    },
    {
      name: "Analytics",
      icon: <MuiBox />,
      href: "/dashboard/analytics",
      isActive: false,
    },
  ];
  return (
    <div className=" w-1/4 min-h-screen bg-white shadow-lg">
      <div className="logo pl-4 s">
        <LogoSvg />
      </div>
      <div className="  p-5">
        <h2 className="text-lg font-semibold mb-4">OVERVIEW</h2>
        <ul>
          {menuItems.map((item, index) => (
            <li key={index} className="mb-2">
              <Link
                href={item.href}
                className={`p-2 rounded-lg flex items-center cursor-pointer w-full 
                      ${
                        item.isActive
                          ? "bg-green-100 text-green-700"
                          : "hover:bg-gray-200"
                      }`}
              >
                <span className="mr-2">{item.icon}</span>
                {item.name}
              </Link>
            </li>
          ))}
          <Button />
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
