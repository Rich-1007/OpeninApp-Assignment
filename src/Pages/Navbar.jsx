import React, { useContext, useState } from "react";
import { LuPanelLeftOpen } from "react-icons/lu";
import { MdInsertChart, MdOutlineNightlight } from "react-icons/md";
import { WiDaySunny } from "react-icons/wi";
import { DarkModeContext } from "../Context";

const Navbar = ({ istrue, setIstrue}) => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  // const [dark, setDark] = useState(false);
  const darkModeHandler = () => {
    toggleDarkMode();
  };

  return (
    <>
      <div
        className={
          istrue
            ? " fixed top-0 bottom-0 dark:bg-[#0D0D0D] bg-white  py-14 px-6 transition-all hidden md:block "
            : "fixed top-0 bottom-0 bg-white dark:bg-[#0D0D0D] transition-all  py-14 px-6  hidden md:block"
        }
      >
        <div className=" flex flex-row items-center justify-between pb-8">
          <div className=" flex flex-row items-center justify-start gap-3 ">
            <div className="w-14">
              <img src="/Group 200.png" alt="" className="w-14" />
            </div>

            <div
              style={{ overflow: "hidden" }}
              className={
                istrue
                  ? "  transition-all   max-w-64"
                  : "   transition-all duration-300  max-w-0"
              }
            >
              <span className="font-semibold text-2xl dark:text-gray-100 transition-all duration-500 ">
                Base
              </span>
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

        <div
          onClick={darkModeHandler}
          className=" flex flex-row justify-between items-center md:mt-16 w-fit bg-gray-200 py-2 px-2 gap-2 rounded-full  dark:bg-gray-400   "
        >
          <div className="rounded-full bg-gray-100 dark:bg-gray-400 transition-all duration-500  h-9 w-9 flex items-center justify-center">
            <WiDaySunny
              size={30}
              className="dark:text-white transition-all duration-500  "
            />
          </div>
          <div className="rounded-full  dark:bg-gray-500 transition-all duration-500  h-9 w-9 flex items-center justify-center">
            <MdOutlineNightlight
              color=" "
              size={26}
              className=" dark:text-white  transition-all duration-500  text-gray-500"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
