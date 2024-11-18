"use client";
import LogoSvg from "@/Icon/LogoSvg";
import MuiBox from "@/Icon/MuiBox";
import Link from "next/link";
import React from "react";
import Button from "./Button";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const menuItems = [
    { name: "Dashboard", icon: <MuiBox />, href: "/dashboard" },
    { name: "E-commerce", icon: <MuiBox />, href: "/dashboard/ecommerce" },
    { name: "Analytics", icon: <MuiBox />, href: "/dashboard/analytics" },
  ];

  const location = usePathname();

  return (
    <div className="w-full min-h-screen bg-white shadow-lg">
      <div className="logo pl-4">
        <LogoSvg />
      </div>
      <div className="p-5">
        <h2 className="text-[12px] font-bold mb-4 text-[#919EAB]">OVERVIEW</h2>
        <ul>
          {menuItems.map((item, index) => (
            <li key={index} className="mb-2">
              <Link
                href={item.href}
                className={`p-2 rounded-lg flex items-center cursor-pointer w-full 
                  ${
                    location === item.href
                      ? "bg-red-100 text-green-600" 
                      : "hover:bg-gray-200 text-gray-700"
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
