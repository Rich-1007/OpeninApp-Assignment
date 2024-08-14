import React, { useState } from "react";
import { data } from "../data";
import { FaChevronDown } from "react-icons/fa";
import AddTag from "./AddTag";
import { RxCross2 } from "react-icons/rx";
import TableRow from "./TableRow";
const UploadTable = () => {
  //   console.log(selectedTag);

  return (
    <>
      <div className=" md:px-5 px-2  bg-gray-200 dark:bg-[#0D0D0D] transition-all duration-500 rounded-lg mt-10 max-h-[450px] overflow-y-scroll invisible-scrollbar">
        <div className="container mx-auto  ">
          <table className="w-full border-separate border-spacing-y-4 ">
            <thead>
              <tr className="bg-gray-200 dark:bg-[#0D0D0D] transition-all duration-500 ">
                <th className="px-4 py-2 text-left text-gray-500  dark:text-gray-100 transition-all duration-500">SI No.</th>
             

                <th className="px-4 py-2 text-left text-gray-500 dark:text-gray-100 transition-all duration-500">Links</th>
                <th className="px-4 py-2 text-left text-gray-500 dark:text-gray-100 transition-all duration-500">Prefix</th>
                <th className="px-4 py-2 text-left text-gray-500 dark:text-gray-100 transition-all duration-500 ">Add Tags</th>
                <th className="px-4 py-2 text-left text-gray-500 dark:text-gray-100 transition-all duration-500">
                  Selected Tags
                </th>

    

              </tr>
            </thead>

            {data?.map((item, i) => (
              <tbody className="" key={i}>
                <TableRow item={item} />
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </>
  );
};

export default UploadTable;
