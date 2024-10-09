import React from "react";
import { featureList, Real3DWordpressList, Real3DJsList } from "./data";
import wordpress from "../../assets/banner/wordpress.png";
import js from "../../assets/banner/js.png";
import { MdPages ,MdFullscreenExit} from "react-icons/md";
import { FaTableList ,FaMinus ,FaPlus} from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { FaShareAlt } from "react-icons/fa";
import { BsThreeDotsVertical,BsListOl } from "react-icons/bs";
import { BiCaretRight ,BiSolidBookmark} from "react-icons/bi";

const FeaturesSection = () => {
  return (
    <article>
      {/* ------- Features Section ------- */}
      <section className="py-16 bg-gray-100 text-center">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="font-bold text-[44px] text-[#54595f] tracking-[-.88px]">
              Features
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {featureList.map((feature) => (
              <div
                key={feature.id}
                className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-20 h-20 mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* backgroundImage: 'linear-gradient(90deg, #312f30 50%, #3b393a 50%)'  */}

      {/* --------- Center Section --------- */}
     
        <section className="bg-black text-white  p-8 " >
          <div className="text-center mb-4 mt-5">
            <h1 className="  font-bold text-[40px] text-center  text-[#fff] tracking-[-.88px]">
            #1 Best Selling Flipbook on Envato Market
            </h1>
          </div>
          <div className="text-center max-w-6xl mx-auto mb-12">
            <p className="text-[#FFFFFF]  text-[18px] font-[500] trcaking-[-.18px ]">
            Real3D Flipbook displays your PDF-s or images as ultra realistic 3D flipbooks inside your website.  Easy to use. Customizable UI. Customizable flipbooks. Fully responsive and optimized for mobile. Single page view. Deep linking. Interactive pages with videos, links, popups, selectable text, sound. PDF text search. PDF hyperlinks. Unlimited books. Unlimited pages. Lightbox. And much more…
            </p>
          </div>
          {/* ------- {Embedded Video }  ------ */}
          <div className="flex flex-col items-center w-full">
            {/* -------- Common container for both sections to ensure equal width-------- */}
            <div className="w-full max-w-6xl">
              {/* {/* -------- First section with background -------- */}
              <div className="bg-gray w-full h-[633px] "></div>

              {/* {/* -------- Second section with icons-------- */}
              <div className="bg-[#013220] w-full h-[3rem] flex items-center justify-center">
        <div className="flex justify-around items-center w-full max-w-[300px] px-3">
          <FaMinus className="text-[18px]" />
          <FaPlus />
          <BsListOl />
          <BiCaretRight />
          <CiSearch />
          <BiSolidBookmark />
          <FaShareAlt />
          <BsThreeDotsVertical />
          <MdFullscreenExit />
        </div>
      </div>
    </div>
  </div>
</section>
   

      {/* ------- Next Section ---------- */}
      <section
        style={{
          backgroundImage: "linear-gradient(90deg, #000000 65%, #00A800 35%)",
          
        }}
      >
        <div className="container py-10 mx-auto px-4">
          <div className="flex flex-wrap justify-between gap-8">
            {/* Left Column */}
            <div className="w-full md:w-[48%] bg-[#312f30] p-6 border-yellow-400 ">
              {Real3DWordpressList.map((plugin) => (
                <div key={plugin.id} className="mb-6">
                  <img
                    src={wordpress}
                    alt={plugin.heading}
                    className="w-[90px] h-auto mb-4 mx-auto"
                  />
                  <h3 className="text-[20px] font-semibold mb-[8px] text-center text-white">
                    {plugin.heading}
                  </h3>
                  <p className="text-gray-300 text-left mb-5">
                    {plugin.description}
                  </p>
                  <h4 className="font-semibold text-left text-[20px] text-white mb-5">
                    Some of the key features include:
                  </h4>
                  <ul className="list-disc list-inside text-left text-gray-300">
                    {plugin.features.map((feat, index) => (
                      <li
                        key={index}
                        className="text-[20px] font-[600] text-white"
                      >
                        {feat.title}:{" "}
                        <span className="text-[18px] font-[400] text-gray-300">
                          {feat.detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-center md:justify-end space-x-4 mt-6">
                    <button className="bg-[#00A800] text-white px-8 py-3  hover:bg-green-500 transition duration-200">
                      Buy Now
                    </button>
                    <button className="bg-gray-600 text-white px-8 py-3   hover:bg-gray-500 transition duration-200">
                      Read Docs
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* -------  Right Column ----- */}
            <div className="w-full md:w-[48%] bg-[#3b393a] p-6 rounded-[10px] ">
              {Real3DJsList.map((plugin) => (
                <div key={plugin.id} className="mb-6">
                  <img
                    src={js}
                    alt={plugin.heading}
                    className="w-[90px] h-auto mb-4 mx-auto"
                  />
                  <h3 className="text-[20px] font-semibold mb-[8px] text-center text-white">
                    {plugin.heading}
                  </h3>
                  <p className="text-gray-300 text-left mb-5">
                    {plugin.description}
                  </p>
                  <h4 className="font-semibold text-left text-[20px] text-white mb-5">
                    Some of the key features include:
                  </h4>
                  <ul className="list-disc list-inside text-left text-gray-300">
                    {plugin.features.map((feat, index) => (
                      <li
                        key={index}
                        className="text-[20px] font-[600] text-white"
                      >
                        {feat.title}:{" "}
                        <span className="text-[18px] font-[400] text-gray-300">
                          {feat.detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-center md:justify-end space-x-4 mt-6">
                    <button className="bg-[#00A800] text-white px-8 py-3 hover:bg-green-500 transition duration-200">
                      Buy Now
                    </button>
                    <button className="bg-gray-600 text-white px-8 py-3 hover:bg-gray-500 transition duration-200">
                      Read Docs
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

export default FeaturesSection;
