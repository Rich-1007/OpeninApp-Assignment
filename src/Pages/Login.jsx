import React from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsApple } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoLogoDiscord } from "react-icons/io5";
import { RxLinkedinLogo } from "react-icons/rx";

const Login = () => {
  return (
    <>
      <div className="bg-gray-100 flex flex-row w-screen md:w-full h-screen md:py-6 md:px-6">
        <div className="bg-[#605bff] py-9 px-9 rounded-xl h-full w-1/2 hidden md:block">
          <div className=" overflow-hidden pt-7 pl-7 bg-[#767EFC] rounded-xl h-full flex flex-col justify-between">
            <div className="flex flex-col justify-between gap-8">
              <div className="bg-white  flex flex-row gap-1 justify-center items-center rounded-3xl w-24 p-2">
                <div className="w-6">
                  <img src="/Group 200.png" alt="" />
                </div>
                <span className="font-bold text-lg text-center">Base</span>
              </div>

              <div className="text-white text-3xl font-semibold  text-start w-72">
                <p>Generate detailed reports with just one click</p>
              </div>
            </div>
            <div className=" overflow-hidden flex justify-end">
              <img src="/Login-girl-img.png" alt="" className="w-60" />
            </div>
          </div>
        </div>

        <div className="md:px-32 md:py-16 md:w-1/2 ">
          <div className="md:hidden h-20 bg-indigo-500 w-screen flex flex-row items-center justify-start gap-3 px-3">
            <div className="w-20">
              <img src="/White-Logo and company.png" alt="" />
            </div>
            
          </div>

          <div className="px-2 md:px-0">
            <div className="py-2 flex flex-col">
              <span className="text-2xl font-bold">Sign In</span>
              <span className="font-bold text-xs text-nowrap">
                Sign in to your account
              </span>
            </div>

            <div className="py-2 flex flex-row gap-3  w-full justify-between">
              <div className="bg-white hover:cursor-pointer py-2 flex flex-row justify-center items-center gap-2 px-4 rounded-xl w-full">
                <FcGoogle />
                <span className="text-nowrap text-gray-500 text-xs font-semibold ">
                  Sign in with Google
                </span>
              </div>
              <div className="bg-white hover:cursor-pointer py-2 flex flex-row justify-center items-center gap-2 px-4 rounded-xl w-full">
                <BsApple color="gray" />
                <span className="text-nowrap text-gray-500 text-xs font-semibold ">
                  Sign in with Apple
                </span>
              </div>
            </div>

            <div className="bg-white rounded-lg space-y-3 p-5 mt-2 text-sm font-semibold">
              <div className="flex flex-col gap-2">
                <span>Email address</span>
                <input
                  className="bg-gray-100 rounded-lg placeholder:px-3 py-3 outline-none"
                  type="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="flex flex-col gap-2">
                <span>Password</span>
                <input
                  className="bg-gray-100 rounded-lg placeholder:px-3 py-3 outline-none"
                  type="password"
                  placeholder="Enter Password"
                />
              </div>
              <div>
                <a href="" className="text-blue-700">
                  Forgot password?
                </a>
              </div>

              <div className="bg-indigo-500 hover:cursor-pointer text-white flex justify-center items-center rounded-lg py-3 ">
                <button>Sign In</button>
              </div>
            </div>
            <div className="text-center pt-4 flex flex-col md:flex-row justify-center">
              <span className="text-gray-400">Don't have an account? </span>
              <span className="text-blue-700 text-xl md:text-base hover:cursor-pointer">
                 Register here
              </span>
            </div>

            <div className="pt-8 flex flex-row justify-center gap-5  text-2xl text-gray-400">
              <FaGithub className="hover:cursor-pointer" size={40} />
              <AiFillTwitterCircle className="hover:cursor-pointer" size={40} />
              <RxLinkedinLogo className="hover:cursor-pointer" size={40} />
              <IoLogoDiscord className="hover:cursor-pointer" size={40} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
