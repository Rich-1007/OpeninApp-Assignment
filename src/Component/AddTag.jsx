import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { data } from "../data";

const AddTag = ({ add_tags, setSelectedTag }) => {
  const [isTrue, setIsTrue] = useState(false);

  function HandleSelect() {
    setIsTrue((prev) => !prev);
  }
  function HandleSelected(item) {
    //  console.log(item);

    setSelectedTag((prev) => {
      if (prev.includes(item.tag)) {
        return prev;
      } else {
        return [...prev, item.tag];
      }
    });
  }
  return (
    <>
      <div className=" dark:text-white dark:bg-[#0D0D0D] transition-all duration-500 relative flex flex-row items-center gap-2 justify-center dark:border-black border border-gray-200 pl-2 py-1 rounded-lg text-gray-600 w-44">
        <span>Select Tags</span>
        <FaChevronDown
          onClick={HandleSelect}
          color="gray"
          className="hover:cursor-pointer"
        />
        {isTrue && (
          <div className="border border-gray-300 shadow-lg py-2 px-2 absolute z-10 top-10 flex flex-col items-center w-11/12 rounded-lg bg-white dark:bg-[#0D0D0D] transition-all duration-500 h-48 overflow-y-scroll invisible-scrollbar space-y-2  dark:border-black" >
            {add_tags.map((item, i) => (
              <span
                key={i}
                onClick={() => HandleSelected(item)}
                className="text-sm text-gray-500 hover:cursor-pointer rounded-md py-2 px-1 hover:bg-gray-200 w-full dark:hover:bg-[#161616] transition-all duration-500 dark:text-white "
              >
                {item.tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default AddTag;
