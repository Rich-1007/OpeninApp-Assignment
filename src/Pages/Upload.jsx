import React, { useState } from "react";
import Navbar from "./Navbar";
import { GoBell } from "react-icons/go";
import DropZone from "../Component/DropZone";
import UploadTable from "../Component/UploadTable";
import MobileNavbar from "./MobileNavbar";
import { IoReorderThreeOutline } from "react-icons/io5";
import MobileUploadTable from "../Component/MobileUploadTable";

import toast, { Toaster } from 'react-hot-toast';


const Upload = () => {
  const [isShow, setIsShow] = useState(false);
  const [istrue,setIstrue] = useState(false)
  console.log(istrue);

  // console.log(isShow);


  function HandleHam(){
    setIstrue(true)
    
  }

 
  return (
    <>
      <div className="flex flow-row relative outline">
        <Navbar  className=" "/>
        <MobileNavbar  className="md:hidden" istrue={istrue} /> 
        <div className="bg-gray-100 w-full pb-12 px-2 md:px-0">
          <div className="outline hidden md:flex flex-row justify-between items-center px-5 py-7">
            <span className="text-xl font-semibold">Upload CSV</span>
            <div className="flex flex-row items-center gap-2 ">
              <GoBell size={21} />
              <div className="w-8 h-8 overflow-hidden rounded-full flex justify-center">
                <img src="/Profile-pic.png" alt="" className="object-cover -m-5" />
              </div>
            </div>
          </div>

          <div className="py-5 flex flex-row justify-between md:hidden ">
            <div className="gap-2 flex flex-row items-center justify-between">
              <div className="">
                <IoReorderThreeOutline size={45} onClick={HandleHam} />
              </div>
              <img src="/Group 200.png" alt="" />
              <span>Base</span>
            </div>
            <div className=" gap-3 flex flex-row items-center justify-between">
              <GoBell size={25} />
              <div className="w-9 h-9  overflow-hidden rounded-full flex justify-center">
                <img
                  src="/Profile-pic.png"
                  alt=""
                  className="object-cover -m-5"
                />
              </div>
            </div>
          </div>
          <div className="text-xl font-semibold py-5 px-4 md:hidden">
            <span>Upload CSV</span>
          </div>
          <div className=" flex items-center justify-center">
            <DropZone setIsShow={setIsShow} />
          </div>
          {isShow && (
            <div className="w-full pt-4 text-nowrap">
              <span className="md:pl-10  text-xl font-bold">Uploads</span>
              <div className="bg-gray-100 md:px-10">
                <UploadTable />
                {/* <MobileUploadTable /> */}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Upload;
