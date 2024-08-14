import React, { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";

const MobileNavbar = ({ istrue }) => {
  const [isShow, setIsShow] = useState();
  console.log(isShow);

  useEffect(() => {
    if (istrue) {
      setIsShow(true);
    }else{

      setIsShow(false)
    }
  }, [istrue]);

  function HandleFalse() {
    setIsShow(false);
  }
  return (
    <>
      <div
        className={
          isShow
            ? "  absolute transition-all duration-300 rounded-r-3xl px-6 py-10 bg-gray-100 dark:bg-[#0D0D0D] h-screen md:hidden"
            : "max-w-0 transition-all duration-300"
        }
      >
        <div className=" flex flex-row items-center justify-between pb-8">
          <div className=" flex flex-row items-center justify-start gap-3 ">
            <div className="w-12 ">
              <img src="/Group 200.png" alt="" className="w-14" />
            </div>

            <div>
              <span className="font-semibold text-2xl dark:text-white transition-all duration-500">Base</span>
            </div>
          </div>

          <div className="">
            <button
            //  onClick={(e) => setIstrue((prev) => !prev)}
            >
              {/* <LuPanelLeftOpen size={28} className="text-gray-400" /> */}
              <RxCross2
                size={25}
                color="gray"
                className=""
                onClick={HandleFalse}
              />
            </button>
          </div>
        </div>
        <div className="  flex flex-row gap-3 ">
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

          <div className="text-gray-500 font-semibold">
            <div className="flex flex-row items-center gap-3 py-3 w-44">
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

export default MobileNavbar;
