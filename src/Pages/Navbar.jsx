import React, { useState } from "react";
import { BsFillCalendar2DateFill } from "react-icons/bs";
import { FaFileAlt } from "react-icons/fa";
import { IoIosNotifications, IoMdSettings } from "react-icons/io";
import { IoFileTray } from "react-icons/io5";
import { LuPanelLeftOpen } from "react-icons/lu";
import { MdInsertChart } from "react-icons/md";
import { PiSquaresFourFill } from "react-icons/pi";

const Navbar = () => {
  const [istrue, setIstrue] = useState();

  return (
    <>
      <div
        className={
          istrue
            ? "bg-white max-w-64 py-14 px-6 transition-all duration-100 hiden md:block"
            : "bg-white transition-all duration-700 max-w-40 py-14 px-6 outline hidden md:block"
        }
      >
        <div className="flex flex-row items-center justify-between pb-8">
          <div className=" flex flex-row items-center justify-start gap-3 ">
            <div className="w-14">
              <img src="/Group 200.png" alt="" className="w-14" />
            </div>

            <div
              className={
                istrue
                  ? "  transition-all duration-300 overflow-hidden max-w-full"
                  : "   transition-all duration-200 overflow-hidden max-w-0"
              }
            >
              <span className="font-semibold text-2xl">Base</span>
            </div>
          </div>

          <div className="">
            <button onClick={(e) => setIstrue((prev) => !prev)}>
              <LuPanelLeftOpen size={28} className="text-gray-400" />
            </button>
          </div>
        </div>
        <div className="  flex flex-row gap-3">
          <div className="overflow-hidden text-lg text-gray-400 font-semibold    flex  flex-col justify-between py-2">
            <div className=" flex flex-row items-center gap-3 py-3 w-9 h-9">
              <img src="/Upload-Page-pics/1-removebg-preview.png" alt="" />
            </div>

            <div className=" flex flex-row items-center gap-3 py-3 w-9   h-9">
              <img src="/Upload-Page-pics/2-removebg-preview.png" alt="" />
            </div>
            <div className="flex flex-row items-center gap-3 py-3 w-9  h-9">
              <img src="/Upload-Page-pics/3-removebg-preview.png" alt="" />
            </div>
            <div className="flex flex-row items-center gap-3 py-3 w-9    h-9">
              <img
                src="/Upload-Page-pics/4-removebg-preview.png"
                alt=""
                className="text-gray-400 "
              />
            </div>
            <div className="flex flex-row items-center gap-3 py-3 w-9   h-9">
              <img src="/Upload-Page-pics/5-removebg-preview.png" alt="" />
            </div>
            <div className="flex flex-row items-center gap-3 py-3 w-9   h-9">
              <img src="/Upload-Page-pics/6-removebg-preview.png" alt="" />
            </div>
            <div className="flex flex-row items-center gap-3 py-3 w-9   h-9">
              <img src="/Upload-Page-pics/7-removebg-preview.png" alt="" />
            </div>
          </div>

          <div
            className={`  text-lg text-gray-400 font-semibold  flex flex-col justify-between transition-all duration-500 ${
              istrue
                ? "max-w-44  overflow-hidden transition-all duration-500 "
                : "max-w-0 overflow-hidden "
            } 
`}
          >
            <div className="flex flex-row items-center gap-3 py-3 w-44  ">
              <span>Dashboard</span>
            </div>
            <div className="flex flex-row items-center gap-3 py-3 text-indigo-500">
              <span>Upload</span>
            </div>
            <div className="flex flex-row items-center gap-3 py-3 ">
              <span>Invoice</span>
            </div>
            <div className="flex flex-row items-center gap-3 py-3 ">
              <span>Schedule</span>
            </div>
            <div className="flex flex-row items-center gap-3 py-3 ">
              <span>Calendar</span>
            </div>
            <div className="flex flex-row items-center gap-3 py-3 ">
              <span>Notification</span>
            </div>
            <div className="flex flex-row items-center gap-3 py-3 ">
              <span>Settings</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
