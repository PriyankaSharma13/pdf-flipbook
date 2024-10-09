import React from "react";
import { MdPages } from "react-icons/md";
import { FaTableList } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { FaShareAlt } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BiFullscreen } from "react-icons/bi";
import Flipbook from "../Flipbook/Flipbook";

const Content = () => {
  return (
    <div className="bg-white text-white min-h-screen p-8">
      <div className="text-center mb-8">
        <h1 className="  font-bold text-[44px] text-center  text-[#54595f] tracking-[-.88px]">
          Realistic 3D Flipbook
        </h1>
      </div>
      <div className="text-center max-w-6xl mx-auto mb-12">
        <p className="text-[#7a7a7a]  text-[18px] font-medium trcaking-[-.18px ]">
          Create ultra realistic 3D flipbooks with page bending, shiny pages,
          lights, and shadows. Outrival your competition with stunning online
          flipbooks. No matter what content you create with Real3D Flipbook,
          your clients and leads will love it.
        </p>
      </div>
      {/* ------- {Embedded Video }  ------ */}
      <div className="flex flex-col items-center w-full">
        {/* -------- Common container for both sections to ensure equal width-------- */}
        <div className="w-full max-w-6xl">
          {/* {/* -------- First section with background -------- */}
          <div className="bg-gray w-full h-[633px] ">
          <Flipbook />
          </div>
       
          {/* {/* -------- Second section with icons-------- */}
          <div className="bg-[#313538] w-full h-[3rem] flex items-center justify-center">
         
            <div className="flex flex-row justify-between items-center w-full px-3 max-w-[330px] ">
              <div className="text-[18px]">
                <MdPages />
              </div>
              <div>
                <FaTableList />
              </div>
              <div>
                <CiSearch />
              </div>
              <div>
                <FaShareAlt />
              </div>
              <div>
                <BsThreeDotsVertical />
              </div>
              <div>
                <BiFullscreen />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
