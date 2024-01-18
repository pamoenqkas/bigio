import React from "react";
import logo from "../logo.svg";
import "../App.css";
import { FaShopify } from "react-icons/fa";
import { AiOutlineHome, AiOutlineDownload } from "react-icons/ai";
import StoryList from "./StoryList.js";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <div className="bg-white flex top-0 w-full h-24 items-center justify-start  border-b-2 border-slate-700 bg-[#FFFFF]">
            <div className="flex ml-5 gap-3 justify-between items-center">
              <FaShopify size={40} />
              <p className="text-3xl font-bold text-gray-700">Storyku</p>
            </div>
          </div>
        </header>
        <div className="hidden xl:absolute xl:block h-full inset-y-0 left-0 top-24 ml-4 p-3 w-2/5 ">
          <div className="w-auto h-auto">
            <div className="w-1/5 ml-2">
              <div className="flex justify-normal items-center gap-2">
                <div style={{ color: "#6558F5" }}>
                  <AiOutlineHome size={25} />
                </div>
                <Link
                  to="/"
                  className="text-[#6558F5] hover:text-[#6558f5ab] font-bold underline underline-offset-4 mr-4"
                >
                  <p className="text-base">Home</p>
                </Link>
              </div>
              <div className="flex gap-2 mt-2 justify-start items-center">
                <div style={{ color: "#6558F5" }}>
                  <AiOutlineDownload size={25} />
                </div>
                <Link
                  className="text-[#6558F5] hover:text-[#6558f5ab] font-bold underline underline-offset-4 mr-4"
                >
                  <p className="text-base">Management Story</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
