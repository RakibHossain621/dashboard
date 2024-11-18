import React from "react";
import { FaSearch, FaCog, FaBell, FaUserCircle } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import EnglishIcon from "../../src/Icon/EnglishIcon";
import ChineseIcon from "../../src/Icon/ChineseIcon";
import ColmbiaIcon from "../../src/Icon/ColmbiaIcon";
import FranceIcon from "../../src/Icon/FranceIcon";
import SouthAfrica from "../../src/Icon/SouthAfrica";
import CommandDialogDemo from  './Command'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@radix-ui/react-dropdown-menu";
const Navbar = () => {
  return (
    <section className="py-3 w-full">
      <div className="flex items-center justify-between px-4">
        <CommandDialogDemo/>

        {/* Icon Section */}
        <div className="flex items-center space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <MdLanguage className="text-gray-600" size={24} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white">
              <div className="flex items-center gap-3 hover:bg-gray-100">
                <EnglishIcon />
                <DropdownMenuItem>English</DropdownMenuItem>
              </div>
              <div className="flex items-center gap-3 hover:bg-gray-100">
                <ChineseIcon />
                <DropdownMenuItem>Chainese</DropdownMenuItem>
              </div>
              <div className="flex items-center gap-3 hover:bg-gray-100">
                <ColmbiaIcon />
                <DropdownMenuItem>Columbia</DropdownMenuItem>
              </div>
              <div className="flex items-center gap-3 hover:bg-gray-100">
                <FranceIcon />
                <DropdownMenuItem>France</DropdownMenuItem>
              </div>
              <div className="flex items-center gap-3 hover:bg-gray-100">
                <SouthAfrica />
                <DropdownMenuItem>South Africa</DropdownMenuItem>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          <div className="relative">
            <FaBell className="text-gray-600 " size={24} />
            <span className="absolute top-0 right-0 inline-block w-4 h-4 text-xs text-white bg-red-500 rounded-full text-center">
              4
            </span>
          </div>
          <span>
            <FaCog className="text-gray-600" size={24} />
          </span>

          <DropdownMenu>
            <DropdownMenuTrigger>
              {" "}
              <FaUserCircle className="text-gray-600" size={24} />
            </DropdownMenuTrigger>
            <div className="translate-x-[-144px]">
              <DropdownMenuContent className="bg-white dropdowncontant absolute right-[-31px] pl-3 py-2 mt-2 w-[11em] rounded-md shadow-2xl ">
                <DropdownMenuLabel>
                  <div className="border-b  pb-3">
                    <h1>Jaydon Frankie</h1>
                    <p className="text-[14px] leading-5 text-[#919EAB]">
                      demo@minimals.cc
                    </p>
                  </div>
                </DropdownMenuLabel>

                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-[16px] text-[#212B36] hover:bg-gray-100">
                  Home
                </DropdownMenuItem>
                <DropdownMenuItem className="text-[16px] text-[#212B36] hover:bg-gray-100">
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem className="text-[16px] text-[#212B36] hover:bg-gray-100">
                  Setting
                </DropdownMenuItem>
                <hr />
                <DropdownMenuItem className="text-[16px] text-[#FF5631] hover:bg-gray-100">
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </div>
          </DropdownMenu>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
