import Image from "next/image";
import React from "react";
import Instagram from "../public/instagram.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { MdOutlineRadioButtonChecked } from "react-icons/md";
import Link from "next/link";

const instagram = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={Instagram}
          alt=""
        />
        <div
          className="absolute  max-w-[1240px]  translate-x-10 translate-y-[130%]
    z-10 p-2 text-white"
        >
          <h2 className="py-2">Instagram</h2>
          <h3>Next JS / JavaScript / Firebase</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-10 p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <h2>Project Overview</h2>
          <p className="pt-6">
            This build is a simple model of Instagram that uses Google
            authentication for signin for sign in. Firebase is the database used
            to store data and other details.
          </p>
          <p className="pt-2">
            It was built using Next JS, JavaScript and Firebase to make the
            overall experience while using the web app seamless.
          </p>

          <a
            href="https://insta-chase.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </a>

          <a
            href="https://github.com/emmanuelawe/insta-chase"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-8 py-2 mt-4">Code</button>
          </a>
        </div>

        <div className="col-span-4 md:col-span-1 shadow-lg shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-2 md:grid-cols-1">
              <p className="text-[#434346] py-2 flex items-center">
                <MdOutlineRadioButtonChecked /> Next JS
              </p>
              <p className="text-[#434346] py-2 flex items-center">
                <MdOutlineRadioButtonChecked /> JavaScript
              </p>
              <p className="text-[#434346] py-2 flex items-center">
                <MdOutlineRadioButtonChecked /> Tailwind CSS
              </p>
              <p className="text-[#434346] py-2 flex items-center">
                <MdOutlineRadioButtonChecked /> Firebase
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="cursor-pointer w-[100px] py-2 flex bg-[#434346] text-white rounded-xl items-center justify-center px-6">
            <IoArrowBackCircleSharp className="mr-[0.1rem]" />
            Back
          </p>
        </Link>
      </div>
    </div>
  );
};

export default instagram;
