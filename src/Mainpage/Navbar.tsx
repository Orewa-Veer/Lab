import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaRegFileCode } from "react-icons/fa6";
import { GoBell } from "react-icons/go";
import { IoMdAdd } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between px-6 h-full  w-full">
        <div className="flex">
          <FaRegFileCode className="m-3 mr-0 size-10 text-[#059669]" />
          <span className=" m-3 font-bold text-4xl text-[#059669]">
            Forumly
          </span>
        </div>
        <div className="flex items-center">
          <Input
            className="bg-[#F9FAFB] h-10 w-[45vw] "
            placeholder="Search Question, tags here"
          ></Input>
        </div>

        <div className="flex items-center">
          <div className="">
            <Button className="bg-[#059669] p-[2 4] text-sm hover:bg-[#047857]">
              <IoMdAdd
                className="text-white size-6
              "
              />
              <Link to={"/popup"}> Ask A Question</Link>
            </Button>
          </div>
          <div className="flex mx-5">
            <GoBell className="text-2xl " />
            <span className="rounded-full bg-[#EF4444] text-white  size-4 text-xs text-center relative -top-3 -left-1 ">
              2
            </span>
          </div>
          <div>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
