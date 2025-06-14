import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import CardsM from "./CardsM";
import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaRegBookmark, FaRegEye } from "react-icons/fa6";
import { IoShareSocial } from "react-icons/io5";
import type { Question } from "@/Data/Discussion";
import { Link } from "react-router-dom";
interface Props {
  obj: Question;
}

const QuestionCards = ({ obj }: Props) => {
  return (
    <CardsM
      className={` border shadow-sm rounded-b-md gap-3 bg-gradient-to-br from-blue-200/40  to-emerald-200/40 border-gray-200  flex hover:shadow-lg backdrop-blur-lg hover:backdrop-blur-2xl hover:-translate-y-1 transition duration-200`}
    >
      {/* left */}
      <div className="border-r-3 border-blue-600/60">
        {/* upvotes */}
        <div className="flex flex-col gap-2 items-center justify-between p-3">
          <GoTriangleUp className="rounded-full  border-2 text-gray-600 border-gray-600 size-6" />
          <span className="font-medium">23</span>
          <GoTriangleDown className="rounded-full  border-2 text-gray-600 border-gray-600 size-6" />
        </div>
        {/* replies */}
        <div className="flex items-center gap-1 mt-2">
          <MessageSquare className="text-emerald-700 size-6" />{" "}
          <span>{obj.replies.length}</span>
        </div>
      </div>
      {/*top */}
      <div className="flex-1">
        <div className="flex items-start justify-between mb-3 w-full">
          {/*text */}
          <div>
            <h3 className="text-2xl font-bold tracking-wide text-gray-900 hover:text-primary cursor-pointer mb-2">
              <Link to={"/discussion"}> {obj.title}</Link>
            </h3>
            <p className="text-gray-600 text-sm mb-3 line-clamp-2 italic">
              {obj.body}
            </p>
          </div>
          {/*logo */}
          <div className=" flex gap-2 ml-4 ">
            <Button className="px-1.5 py-0.5 bg-gradient-to-br from-cyan-200/80 to-blue-200/80 border-blue-400/40 text-black">
              <FaRegBookmark />
            </Button>
            <Button className="p-2 bg-gradient-to-br from-cyan-200/80 to-blue-200/80 border-blue-400/40 text-black">
              <IoShareSocial />
            </Button>
          </div>
        </div>
        {/*mid */}
        <div className="flex flex-wrap gap-2 mb-4 w-full">
          {obj.tags.map((cat) => (
            <div className="bg-gradient-to-br from-cyan-200/60 to-blue-200/60 border-blue-400/80 rounded-full items-center px-2.5 py-.75 font-semibold border text-xs">
              {cat}
            </div>
          ))}
        </div>
        {/*bottom */}
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <div className="size-6 rounded-full bg-gray-500">
              {" "}
              <img src={obj.user.avatar} alt="" />
            </div>
            <span className="font-medium text-sm">{obj.user.username}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaRegEye /> <span>{obj.views}</span>
          </div>
        </div>
      </div>
    </CardsM>
  );
};

export default QuestionCards;
