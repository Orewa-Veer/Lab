import { Button } from "@/components/ui/button";
import type { Question } from "@/Data/Discussion";
import { MessageSquare } from "lucide-react";
import { FaRegBookmark, FaRegEye } from "react-icons/fa6";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import { IoShareSocial } from "react-icons/io5";
import { Link } from "react-router-dom";
import CardsM from "./CardsM";
interface Color {
  main: string;
  buttons: string;
  tags: string;
  border: string;
}
interface Props {
  obj: Question;
  color: Color;
}

const QuestionCards = ({ obj, color }: Props) => {
  return (
    <CardsM
      key={obj.id}
      className={` border shadow-sm rounded-b-md gap-3 bg-gradient-to-br ${color.main} border-gray-200  flex hover:shadow-lg backdrop-blur-lg hover:backdrop-blur-2xl hover:-translate-y-1 transition duration-200`}
    >
      {/* left */}
      <div className={`border-r-3 ${color.border}`}>
        {/* upvotes */}
        <div className="flex flex-col gap-2 items-center justify-between p-3">
          <GoTriangleUp className="rounded-full  border-2 text-gray-600 border-gray-600 size-6" />
          <span className="font-medium">{obj.upvotes}</span>
          <GoTriangleDown className="rounded-full  border-2 text-gray-600 border-gray-600 size-6" />
        </div>
        {/* replies */}
        <div className="flex items-center gap-1 mt-2" key={obj.id}>
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
              <Link
                to={`/discussion/${obj.id}`}
                key={obj.id}
                dangerouslySetInnerHTML={{ __html: obj.title }}
              ></Link>
            </h3>
            <p
              className="text-gray-600 text-sm mb-3 line-clamp-2 italic"
              dangerouslySetInnerHTML={{ __html: obj.body }}
            ></p>
          </div>
          {/*logo */}
          <div className=" flex gap-2 ml-4 ">
            <Button
              className={`px-1.5 py-0.5 bg-gradient-to-br ${color.buttons}  text-black`}
            >
              <FaRegBookmark />
            </Button>
            <Button
              className={`p-2 bg-gradient-to-br ${color.buttons}  text-black`}
            >
              <IoShareSocial />
            </Button>
          </div>
        </div>
        {/*mid */}
        <div className="flex flex-wrap gap-2 mb-4 w-full">
          {obj.tags.map((cat) => (
            <div
              key={cat}
              className={`bg-gradient-to-br ${color.tags}  rounded-full items-center px-2.5 py-.75 font-semibold border text-xs`}
            >
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
