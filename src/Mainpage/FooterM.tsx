import { FaRegStar } from "react-icons/fa";
import { IoShieldOutline } from "react-icons/io5";
import { MdOutlinePeopleAlt } from "react-icons/md";

const FooterM = () => {
  return (
    <div className="  rounded-xl bg-white/30 border border-white/40  shadow-inner max-w-6xl  mb-10 w-full flex flex-col items-center p-20">
      {/*Heading */}
      <h2 className="text-6xl tracking-tight font-extrabold drop-shadow-md text-gray-800 mb-6">
        Ready to Join the Community?
      </h2>
      {/*description*/}
      <p className="text-gray-600 mb-12 text-xl leading-relaxed">
        Start asking questions, sharing knowledge, and connecting with
        developers worldwide.
      </p>
      {/*Buttons*/}
      <div>
        <button className="rounded bg-emerald-600 cursor-pointer shadow-lg  text-gray-100 hover:scale-110 hover:bg-emerald-700 duration-200 font-medium p-2 mb-6">
          Sign Up Free
        </button>
      </div>
      {/*Bottom*/}
      <div className=" flex justify-around w-[60%] mt-4 font-bold tracking-wide text-emerald-700">
        <div className="flex items-center gap-1">
          <IoShieldOutline className="size-6" /> <span>100% Free</span>
        </div>
        <div className="flex items-center gap-1">
          {" "}
          <MdOutlinePeopleAlt className="size-6" /> <span>50K+ Members</span>
        </div>
        <div className="flex items-center gap-1">
          <FaRegStar className="size-6" /> <span>4.9/5 Rating</span>
        </div>
      </div>
    </div>
  );
};

export default FooterM;
