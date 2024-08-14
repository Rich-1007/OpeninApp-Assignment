import React, { useState } from "react";
import Navbar from "./Navbar";
import { GoBell } from "react-icons/go";
import DropZone from "../Component/DropZone";
import UploadTable from "../Component/UploadTable";
import MobileNavbar from "./MobileNavbar";
import { IoReorderThreeOutline } from "react-icons/io5";

const Upload = () => {
  const [isShow, setIsShow] = useState(false);
  const [istrue, setIstrue] = useState(false);

  function HandleHam() {
    setIstrue(true);
  }

  return (
    <>
      <div className="flex flow-row relative md:min-h-screen dark:bg-[#161616] ">
        <Navbar className=" " istrue={istrue} setIstrue={setIstrue} />
        <MobileNavbar
          className="md:hidden"
          setIstrue={setIstrue}
          istrue={istrue}
        />
        <div
          className={`bg-gray-100 w-full pb-12  px-2 md:px-0 dark:bg-[#161616] transition-all duration-500 ${
            istrue ? "md:ml-64" : "md:ml-44"
          } `}
        >
          <div className=" hidden md:flex flex-row justify-between items-center px-7 py-7">
            <span className="text-xl font-semibold dark:text-white">
              Upload CSV
            </span>
            <div className="flex flex-row items-center gap-2 ">
              <GoBell size={21} className="dark:text-gray-100 text-gray-700 " />
              <div className="w-8 h-8 overflow-hidden rounded-full flex justify-center">
                <img
                  src="/Profile-pic.png"
                  alt=""
                  className="object-cover -m-5"
                />
              </div>
            </div>
          </div>

          <div className="py-5 flex flex-row justify-between md:hidden ">
            <div className="gap-2 flex flex-row items-center justify-between">
              <div className="">
                <IoReorderThreeOutline
                  size={45}
                  onClick={HandleHam}
                  className="dark:text-white transition-all duration-500 "
                />
              </div>
              <img src="/Group 200.png" alt="" />
              <span className=" dark:text-white transition-all duration-500 ">
                Base
              </span>
            </div>
            <div className=" gap-3 flex flex-row items-center justify-between">
              <GoBell
                size={25}
                className="dark:text-white transition-all duration-500 "
              />
              <div className="w-9 h-9  overflow-hidden rounded-full flex justify-center">
                <img
                  src="/Profile-pic.png"
                  alt=""
                  className="object-cover -m-5"
                />
              </div>
            </div>
          </div>
          <div className="text-lg font-semibold py-5 px-4 md:hidden ">
            <span className=" dark:text-white transition-all duration-500 ">
              Upload CSV
            </span>
          </div>
          <div className=" flex items-center justify-center ">
            <DropZone setIsShow={setIsShow} />
          </div>
          {isShow && (
            <div className="w-full pt-3 text-nowrap ">
              <span className="md:pl-10  text-xl font-bold dark:text-white transition-all duration-500">
                Uploads
              </span>
              <div className="bg-gray-100 dark:bg-[#161616] transition-all duration-500  md:px-10">
                <UploadTable />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Upload;
