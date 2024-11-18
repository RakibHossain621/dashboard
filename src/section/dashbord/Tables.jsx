"use client";
import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import {
  FaCloudDownloadAlt,
  FaPrint,
  FaShareAlt,
  FaTrashAlt,
} from "react-icons/fa"; // Import necessary icons
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const invoices = [
  {
    invoice: "INV-1990",
    category: "Android",
    price: "$83.74",
    paymentStatus: "Paid",
  },
  {
    invoice: "INV-1991",
    category: "iOS",
    price: "$120.00",
    paymentStatus: "Paid",
  },
  {
    invoice: "INV-1992",
    category: "Web",
    price: "$75.50",
    paymentStatus: "Paid",
  },
  {
    invoice: "INV-1993",
    category: "Desktop",
    price: "$50.25",
    paymentStatus: "Paid",
  },
  {
    invoice: "INV-1994",
    category: "Cloud",
    price: "$99.99",
    paymentStatus: "Paid",
  },
];

const Tables = () => {
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

  return (
    <div className="py-14 px-8">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-bold text-gray-800">New Invoice</h2>
      </div>

      {/* Table Section */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Invoice ID</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Status</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{invoice.invoice}</TableCell>
              <TableCell>{invoice.category}</TableCell>
              <TableCell>{invoice.price}</TableCell>
              <TableCell>
                <span className="px-2 py-1 bg-[#E1F5E6] text-[#0E8D57] text-[12px] font-bold rounded-sm">
                  {invoice.paymentStatus}
                </span>
              </TableCell>
              <TableCell>
                <div className="relative">
                  <button onClick={() => toggleDropdown(index)}>
                    <BsThreeDotsVertical />
                  </button>
                  {openDropdownIndex === index && (
                    <div className="absolute right-0 mt-2 w-40 bg-[#ffffffe6] border rounded shadow-lg z-10">
                      <button className="w-full flex items-center gap-3 text-left px-4 py-2 hover:bg-gray-100">
                        <FaCloudDownloadAlt />
                        Download
                      </button>
                      <button className="w-full flex items-center gap-3 text-[16px] text-black text-left px-4 py-2 hover:bg-gray-100">
                        <FaPrint />
                        Print
                      </button>
                      <button className="w-full flex items-center gap-3 text-left text-[16px] text-black px-4 py-2 hover:bg-gray-100">
                        <FaShareAlt />
                        Share
                      </button>
                      <hr />
                      <button className="w-full flex items-center gap-3 text-left text-[16px] text-black px-4 py-2 hover:bg-gray-100">
                        <FaTrashAlt />
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* View All Button */}
      <div className="mt-4 text-right">
        <button className="text-sm font-medium text-blue-500">
          VIEW ALL
        </button>
      </div>
    </div>
  );
};

export default Tables;
