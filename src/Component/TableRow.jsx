import React, { useState } from "react";
import AddTag from "./AddTag";
import { RxCross2 } from "react-icons/rx";

const TableRow = ({ item }) => {
  const [selectedTag, setSelectedTag] = useState([]);
  return (
    <tr className="bg-white ">
      <td className="px-5 py-4 w-32">{item.id}</td>
      <td className="px-4 py-2 w-52 text-nowrap">
        <a href={item.links} className="underline text-indigo-500">
          {item.links}
        </a>
      </td>
      <td className="px-4 py-2 text-sm w-44">{item.prefix}</td>
      <td className="px-4 py-2 w-72 ">
        <AddTag setSelectedTag={setSelectedTag} add_tags={item?.add_tags} />
      </td>
      <td className="px-4 py-2 max-w-32 md:max-w-52 overflow-x-scroll invisible-scrollbar  ">
        <div className=" px-1 gap-3 text-sm flex flex-row ">
          {selectedTag?.map((item) => (
            <div className="bg-indigo-500 items-center justify-between gap-2 rounded-md px-2 py-1 text-white flex flex-row">
              <span className="  ">{item}</span>

              <RxCross2 className="hover:cursor-pointer" size={15} />
            </div>
          ))}
        </div>
      </td>
    </tr>
  );
};

export default TableRow;
