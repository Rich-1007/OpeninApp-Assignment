import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { FiUpload } from "react-icons/fi";
import Loader from "./Loader";
// import { Toaster } from "react-hot-toast";
import toast, { Toaster } from 'react-hot-toast';

function DropZone({ setIsShow }) {
  const [fileName, setFileName] = useState();
  const [istrue, setIstrue] = useState(false);

  const notify = () => toast('File Uploaded');
  // console.log(fileName);

  const onDrop = useCallback((acceptedFiles) => {
    // console.log("file droped");
    setFileName(acceptedFiles[0].path);

    // Do something with the files
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  function handleUpload() {
    if (fileName) {
      setIstrue((prev) => !prev);

      setTimeout(() => {
        setFileName("");
        setIstrue(false);
        console.log("timeout");
        setIsShow((prev) => !prev);

        notify()
      }, 4000);
    }
  }


  return (
    <>
      <div className="bg-white p-4 rounded-md w-2/5 space-y-3 ">
        <div className="flex items-center justify-center  h-60  bg-white border border-gray-200 rounded-xl">
          <div {...getRootProps()} className="">
            <input {...getInputProps()} />

            {isDragActive ? (
              <p className="text-gray-400 font-thin">Drop Here</p>
            ) : (
              <div className="flex flex-col justify-center items-center ">
                <div className="py-5  ">
                  <img src="/excel-pic.png" alt="" />
                </div>
                {fileName ? (
                  <div>
                    <p className="font-semibold text-gray-500">{fileName}</p>
                    <div className="flex justify-center items-center">
                      <button className="text-red-600 font-semibold">
                        Remove
                      </button>
                    </div>
                  </div>
                ) : (
                  <div>
                    <p className="font-thin text-gray-400">
                      Drop your excel sheet here or
                      <span className="text-blue-600"> Browse</span>
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        <div
          onClick={handleUpload}
          
          className={
            fileName
              ? "bg-indigo-500 hover:cursor-pointer w-full rounded-md  py-2"
              : "bg-indigo-300 w-full rounded-md py-2"
          }
        >
          {istrue ? (
            <div className="flex flex-row items-center justify-center gap-2 text-white">
              <Loader />
            </div>
          ) : (
            <div className="flex flex-row items-center justify-center gap-2 text-white">
              <FiUpload />

              <button>Upload</button>
              <Toaster />
              {/* <div>
                <button onClick={notify}>Make me a toast</button>
                <Toaster />
              </div> */}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default DropZone;
