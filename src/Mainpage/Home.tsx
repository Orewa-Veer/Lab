import React from "react";
import { IoIosRocket } from "react-icons/io";
import { FaArrowRight, FaCode, FaRegStar } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { MdElectricBolt, MdOutlinePeopleAlt } from "react-icons/md";
import { FaBullseye } from "react-icons/fa6";
import { IoBulb } from "react-icons/io5";
import CardsM from "@/Utilities/CardsM";
import FooterM from "./FooterM";
import Latest from "./Latest";
const HomePage = () => {
  return (
    <div className="flex flex-col">
      {/* Colured Section */}
      <div className="flex flex-col items-center justify-between bg-gradient-to-r from-emerald-500/5 to-blue-500/5 px-6 sm:px-8 md:px-10 py-20">
        {/* top button*/}
        <div className="flex  mb-8 shadow bg-white/80 rounded-full border-emerald-300 text-center border border-emerald-200/5 px-4 py-2 w-78 gap-2 backdrop-blur-sm ">
          <IoIosRocket className="text-emerald-700" />
          <span className="text-emerald-700 font-medium text-sm">
            Join 50,000+ developers worldwide
          </span>
        </div>
        {/* Tagline */}
        <h1 className="text-6xl font-bold text-gray-900 mb-8 leading-tight  ">
          Where Developers <br />
          <span className="bg-gradient-to-r from-purple-600 to-emerald-600 bg-clip-text text-transparent">
            {" "}
            Ask, Learn & Grow
          </span>
        </h1>
        {/* Description*/}
        <div className="text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
          Join our thriving community of developers. Ask questions, share
          knowledge, and collaborate on solutions that matter. From beginners to
          experts, everyone is welcome to learn and contribute.
        </div>
        {/* Buttons */}
        <div className="flex flex-col sm:flex sm:flex-row gap-6 justify-center mb-16">
          <button className="bg-emerald-600 text-white rounded px-6 py-2 hover:bg-emerald-700">
            <a href="" className="flex items-center gap-2 font-medium text-lg">
              <span>Start Exploring</span>
              <FaArrowRight />
            </a>
          </button>
          <button className="bg-white text-emerald-600 rounded px-6 py-2 border border-emerald-600 hover:bg-emerald-50 hover:text-black hover:border-emerald-700">
            <a href="" className="flex items-center gap-2 font-medium text-lg">
              <span>Ask A Quesiton</span>
              <FaRegMessage />
            </a>
          </button>
        </div>
        {/* Cards*/}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto ">
          <CardsM>
            <MdOutlinePeopleAlt className="size-10 text-blue-600 mx-auto mb-3" />
            <span className="text-3xl font-bold text-gray-900 mb-2">50K+</span>
            <span className="text-sm text-gray-600">Active Developers</span>
          </CardsM>
          <CardsM>
            <FaRegMessage className="size-10 text-green-600 mx-auto mb-3" />
            <span className="text-3xl font-bold text-gray-900 mb-2">125K+</span>
            <span className="text-sm text-gray-600">Questions Answered</span>
          </CardsM>
          <CardsM>
            <FaBullseye className="size-10 text-purple-600 mx-auto mb-3" />
            <span className="text-3xl font-bold text-gray-900 mb-2">98%</span>
            <span className="text-sm text-gray-600">Success Rate</span>
          </CardsM>
          <CardsM>
            <FaRegStar className="size-10 text-yellow-600 mx-auto mb-3" />
            <span className="text-3xl font-bold text-gray-900 mb-2">2.5K</span>
            <span className="text-sm text-gray-600">Expert Contributors</span>
          </CardsM>
        </div>
      </div>
      {/* Why Chosse Section*/}
      <div className="flex flex-col items-center py-20 px-6 sm:px-8 md:px-10 backdrop-blur-sm bg-white/50">
        {/* Heading*/}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Why Choose DevForum?
          </h2>
          {/* Description*/}
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built by developers, for developers. Experience the best way to
            learn and share knowledge.
          </p>
        </div>

        {/* Cards*/}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <CardsM>
            <div className="flex flex-col space-y-1.5 text-center-pb-4">
              <div className="size-16 flex justify-center items-center rounded-2xl mx-auto mb-4 bg-blue-500 deeply-nested-child group-hover/hoverRoot:scale-110 transition-transform">
                <FaCode className="bg-blue-500 size-8  " />
              </div>
              <h3 className="text-center mb-1 font-semibold text-xl tracking-tight mt-2">
                Smart Q&A System
              </h3>
            </div>
            <div className=" pt-0 text-center">
              <p className="text-sm text-gray-600 leading-relaxed">
                Advanced tagging and intelligent categorization for better
                discoverability
              </p>
            </div>
          </CardsM>
          <CardsM>
            <div className="flex flex-col space-y-1.5 text-center-pb-4">
              <div className="size-16 flex justify-center items-center rounded-2xl mx-auto mb-4 bg-green-500 deeply-nested-child group-hover/hoverRoot:scale-110 transition-transform">
                <MdOutlinePeopleAlt className="bg-green-500 size-8  " />
              </div>
              <h3 className="text-center mb-1 font-semibold text-xl tracking-tight mt-2">
                Expert Community
              </h3>
            </div>
            <div className=" pt-0 text-center">
              <p className="text-sm text-gray-600 leading-relaxed">
                Connect with thousands of developers and get answers from
                industry experts
              </p>
            </div>
          </CardsM>
          <CardsM>
            <div className="flex flex-col space-y-1.5 text-center-pb-4">
              <div className="size-16 flex justify-center items-center rounded-2xl mx-auto mb-4 bg-purple-500 deeply-nested-child group-hover/hoverRoot:scale-110 transition-transform">
                <IoBulb className="bg-purple-500 size-8  " />
              </div>
              <h3 className="text-center mb-1 font-semibold text-xl tracking-tight mt-2">
                Knowledge Sharing
              </h3>
            </div>
            <div className=" pt-0 text-center">
              <p className="text-sm text-gray-600 leading-relaxed">
                Comprehensive documentation and guides to help you learn and
                grow
              </p>
            </div>
          </CardsM>
          <CardsM>
            <div className="flex flex-col space-y-1.5 text-center-pb-4">
              <div className="size-16 flex justify-center items-center rounded-2xl mx-auto mb-4 bg-orange-500 deeply-nested-child group-hover/hoverRoot:scale-110 transition-transform">
                <MdElectricBolt className="bg-orange-500 size-8  " />
              </div>
              <h3 className="text-center mb-1 font-semibold text-xl tracking-tight mt-2">
                Real-time Updates
              </h3>
            </div>
            <div className=" pt-0 text-center">
              <p className="text-sm text-gray-600 leading-relaxed">
                Get instant notifications for answers, mentions, and discussions
                you follow
              </p>
            </div>
          </CardsM>
        </div>
      </div>
      {/* Treding Tech*/}
      <div className="py-20 px-6 sm:px-8 md:px-10    ">
        {/* Heading*/}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Trending Technologies
          </h2>
          {/* Description*/}
          <p className="text-xl text-gray-600">
            Explore the most discussed technologies and topics
          </p>
        </div>
        {/* Cards*/}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
          <CardsM className="h-full w-full">
            {/* first section*/}
            <div className="flex items-center justify-between mb-4 w-full">
              {" "}
              <div className="flex items-center gap-3">
                <div className="size-4 bg-yellow-500 rounded-full"></div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {" "}
                  JavaScript
                </h3>{" "}
              </div>
              <div className="rounded-full flex items-center bg-green-100 text-green-500 border border-green-200">
                <a href="" className="px-2.5 py-.5 font-semibold text-sm">
                  12%
                </a>
              </div>
            </div>
            {/*Second Section */}
            <div className="flex items-center justify-between w-full">
              <span className="text-2xl font-bold text-gray-900">1,234</span>
              <span className="text-sm text-gray-600">questions</span>
            </div>
            {/* third section */}
            <div className=" mt-4 h-2 bg-gray-100 rounded-full overflow-hidden w-full">
              <div className="bg-yellow-500 rounded-full h-full w-[82%] transition-all duration-500 group-hover:w-full"></div>
            </div>
          </CardsM>
          <CardsM className="h-full w-full">
            {/* first section*/}
            <div className="flex items-center justify-between mb-4 w-full">
              {" "}
              <div className="flex items-center gap-3">
                <div className="size-4 bg-blue  -500 rounded-full"></div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {" "}
                  React
                </h3>{" "}
              </div>
              <div className="rounded-full flex items-center bg-green-100 text-green-500 border border-green-200">
                <a href="" className="px-2.5 py-.5 font-semibold text-sm">
                  +9%
                </a>
              </div>
            </div>
            {/*Second Section */}
            <div className="flex items-center justify-between w-full">
              <span className="text-2xl font-bold text-gray-900">1,234</span>
              <span className="text-sm text-gray-600">questions</span>
            </div>
            {/* third section */}
            <div className=" mt-4 h-2 bg-gray-100 rounded-full overflow-hidden w-full">
              <div className="bg-blue-500 rounded-full h-full w-[82%] transition-all duration-500 group-hover:w-full"></div>
            </div>
          </CardsM>
          <CardsM className="h-full w-full">
            {/* first section*/}
            <div className="flex items-center justify-between mb-4 w-full">
              {" "}
              <div className="flex items-center gap-3">
                <div className="size-4 bg-green-500 rounded-full"></div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {" "}
                  Python
                </h3>{" "}
              </div>
              <div className="rounded-full flex items-center bg-green-100 text-green-500 border border-green-200">
                <a href="" className="px-2.5 py-.5 font-semibold text-sm">
                  16%
                </a>
              </div>
            </div>
            {/*Second Section */}
            <div className="flex items-center justify-between w-full">
              <span className="text-2xl font-bold text-gray-900">1,274</span>
              <span className="text-sm text-gray-600">questions</span>
            </div>
            {/* third section */}
            <div className=" mt-4 h-2 bg-gray-100 rounded-full overflow-hidden w-full">
              <div className="bg-green-500 rounded-full h-full w-[82%] transition-all duration-500 group-hover:w-full"></div>
            </div>
          </CardsM>
          <CardsM className="h-full w-full">
            {/* first section*/}
            <div className="flex items-center justify-between mb-4 w-full">
              {" "}
              <div className="flex items-center gap-3">
                <div className="size-4 bg-emerald-500 rounded-full"></div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {" "}
                  Node.Js
                </h3>{" "}
              </div>
              <div className="rounded-full flex items-center bg-green-100 text-green-500 border border-green-200">
                <a href="" className="px-2.5 py-.5 font-semibold text-sm">
                  +11%
                </a>
              </div>
            </div>
            {/*Second Section */}
            <div className="flex items-center justify-between w-full">
              <span className="text-2xl font-bold text-gray-900">1,234</span>
              <span className="text-sm text-gray-600">questions</span>
            </div>
            {/* third section */}
            <div className=" mt-4 h-2 bg-gray-100 rounded-full overflow-hidden w-full">
              <div className="bg-emerald-500 rounded-full h-full w-[82%] transition-all duration-500 group-hover:w-full"></div>
            </div>
          </CardsM>
          <CardsM className="h-full w-full">
            {/* first section*/}
            <div className="flex items-center justify-between mb-4 w-full">
              {" "}
              <div className="flex items-center gap-3">
                <div className="size-4 bg-purple-500 rounded-full"></div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {" "}
                  CSS
                </h3>{" "}
              </div>
              <div className="rounded-full flex items-center bg-green-100 text-green-500 border border-green-200">
                <a href="" className="px-2.5 py-.5 font-semibold text-sm">
                  +4%
                </a>
              </div>
            </div>
            {/*Second Section */}
            <div className="flex items-center justify-between w-full">
              <span className="text-2xl font-bold text-gray-900">1,456</span>
              <span className="text-sm text-gray-600">questions</span>
            </div>
            {/* third section */}
            <div className=" mt-4 h-2 bg-gray-100 rounded-full overflow-hidden w-full">
              <div className="bg-purple-500 rounded-full h-full w-[82%] transition-all duration-500 group-hover:w-full"></div>
            </div>
          </CardsM>
          <CardsM className="h-full w-full">
            {/* first section*/}
            <div className="flex items-center justify-between mb-4 w-full">
              {" "}
              <div className="flex items-center gap-3">
                <div className="size-4 bg-indigo-500 rounded-full"></div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {" "}
                  TypeScript
                </h3>{" "}
              </div>
              <div className="rounded-full flex items-center bg-green-100 text-green-500 border border-green-200">
                <a href="" className="px-2.5 py-.5 font-semibold text-sm">
                  +18%
                </a>
              </div>
            </div>
            {/*Second Section */}
            <div className="flex items-center justify-between w-full">
              <span className="text-2xl font-bold text-gray-900">432</span>
              <span className="text-sm text-gray-600">questions</span>
            </div>
            {/* third section */}
            <div className=" mt-4 h-2 bg-gray-100 rounded-full overflow-hidden w-full">
              <div className="bg-indigo-500 rounded-full h-full w-[82%] transition-all duration-500 group-hover:w-full"></div>
            </div>
          </CardsM>
        </div>
      </div>
      {/* Questions*/}
      <div className="py-20 px-6 bg-white/50 backdrop-blur-sm">
        <Latest />
      </div>
      {/*Footer */}
      <footer className="flex items-center w-full h-full">
        <FooterM />
      </footer>
    </div>
  );
};

export default HomePage;
