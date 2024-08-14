import React, { useState } from "react";
import { data } from "../data";
import { FaChevronDown } from "react-icons/fa";
import AddTag from "./AddTag";
import { RxCross2 } from "react-icons/rx";
import TableRow from "./TableRow";
const MobileUploadTable = () => {
  //   console.log(selectedTag);

  return (
    <>
      <div className=" relative flex flex-row md:px-5 px-1 bg-gray-200 rounded-lg mt-10 max-h-[450px] ">
        <div className=" absolute bg-gray-200 max-h-[450px]  ">
          <table className="w-6 h border-separate border-spacing-y-4 ">
            <thead>
              <tr className="bg-gray-200 ">
                <th className="px-1 py-2 text-left text-gray-500">SI No.</th>

                {/* <th className="px-4 py-2 text-left text-gray-500">Links</th>
                <th className="px-4 py-2 text-left text-gray-500">Prefix</th>
                <th className="px-4 py-2 text-left text-gray-500">Add Tags</th>
                <th className="px-4 py-2 text-left text-gray-500">
                  Selected Tags
                </th> */}
              </tr>
            </thead>
            {data?.map((item, i) => (
              <tr>
                <td>
                  <span className="px-1">{item.id}</span>
                </td>
              </tr>
            ))}

            {/* {data?.map((item, i) => (
              <tbody className="" key={i}>
              <TableRow item={item} />
              </tbody>
              ))} */}
          </table>
        </div>
        <div className="container mx-auto  overflow-y-scroll invisible-scrollbar ">
          <table className=" border-separate border-spacing-y-4   ">
            <th className="px-4 py-2 text-left text-gray-500">Links</th>
            <th className="px-4 py-2 text-left text-gray-500">Prefix</th>
            <th className="px-4 py-2 text-left text-gray-500">Add Tags</th>
            <th className="px-4 py-2 text-left text-gray-500">Selected Tags</th>
          </table>

          {data?.map((item, i) => (
              <tbody className="" key={i}>
              <TableRow item={item} />
              </tbody>
              ))}
        </div>
      </div>
    </>
  );
};

export default MobileUploadTable;
