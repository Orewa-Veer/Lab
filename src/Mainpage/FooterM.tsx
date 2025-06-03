import React from "react";
import { FaRegStar } from "react-icons/fa";
import { IoShieldOutline } from "react-icons/io5";
import { MdOutlinePeopleAlt, MdPeopleOutline } from "react-icons/md";

const FooterM = () => {
  return (
    <div className="bg-gradient-to-r from-emerald-500 to-blue-500 w-full flex flex-col items-center p-20">
      {/*Heading */}
      <h2 className="text-4xl font-bold text-white mb-6">
        Ready to Join the Community?
      </h2>
      {/*description*/}
      <p className="text-emerald-100 mb-12 text-xl leading-relaxed">
        Start asking questions, sharing knowledge, and connecting with
        developers worldwide.
      </p>
      {/*Buttons*/}
      <div>
        <button className="rounded bg-gray-100 cursor-pointer shadow-lg  text-[#059669] font-medium p-2">
          Sign Up Free
        </button>
      </div>
      {/*Bottom*/}
      <div className="text-emerald-100 flex justify-around w-[60%] mt-4 font-medium">
        <div className="flex items-center gap-1">
          <IoShieldOutline className="size-5" /> <span>100% Free</span>
        </div>
        <div className="flex items-center gap-1">
          {" "}
          <MdOutlinePeopleAlt className="size-5" /> <span>50K+ Members</span>
        </div>
        <div className="flex items-center gap-1">
          <FaRegStar className="size-5" /> <span>4.9/5 Rating</span>
        </div>
      </div>
    </div>
  );
};

export default FooterM;
