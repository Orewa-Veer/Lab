import { Button } from "@/components/ui/button";
import type { TagType } from "@/Data/answert";
import { TAGS } from "@/Data/answert";
import { dummyQuestions } from "@/Data/Discussion";
import CardsM from "@/Utilities/CardsM";
import { useState } from "react";
import { FaRegBookmark, FaRegEye } from "react-icons/fa6";
import { IoShareSocial } from "react-icons/io5";
import { Link } from "react-router-dom";

const QuestionGrid = () => {
  const [activeTag, setActiveTag] = useState<TagType>("All");
  const filteredQues = dummyQuestions.filter((q) => {
    if (activeTag === "All") return true;
    if (activeTag === "Answered") return q.answered;
    if (activeTag === "Unanswered") return !q.answered;
  });

  return (
    <>
      <div className="flex flex-wrap gap-3 mb-6 px-2">
        {TAGS.map((tag) => (
          <Button
            onClick={() => setActiveTag(tag)}
            className=" px-3.5 py-0.5 rounded-full items-center text-xs font-semibold border bg-white text-[#09090B] hover:bg-green-100"
          >
            {tag}
          </Button>
        ))}
      </div>
      <div className="flex flex-col gap-4">
        {/*Question cards */}
        {filteredQues.map((obj) => (
          <CardsM className=" border shadow-sm rounded-b-md border-gray-200">
            {/*top */}
            <div className="flex items-start justify-between mb-3 w-full">
              {/*text */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 hover:text-primary cursor-pointer mb-2">
                  <Link to={"/discussion"}> {obj.title}</Link>
                </h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {obj.content}
                </p>
              </div>
              {/*logo */}
              <div className=" flex flex-gap-2 ml-4 ">
                <Button className="p-2 bg-white text-black">
                  <FaRegBookmark />
                </Button>
                <Button className="p-2 bg-white text-black">
                  <IoShareSocial />
                </Button>
              </div>
            </div>
            {/*mid */}
            <div className="flex flex-wrap gap-2 mb-4 w-full">
              {obj.category.map((cat) => (
                <div className="bg-[#F4F4F5] rounded-full items-center px-2.5 py-.5 font-semibold border text-xs">
                  {cat}
                </div>
              ))}
            </div>
            {/*bottom */}
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-2">
                <div className="size-8 rounded-full bg-gray-500"></div>
                <span className="font-medium ">{obj.user}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaRegEye /> <span>{obj.views}</span>
              </div>
            </div>
          </CardsM>
        ))}
      </div>
    </>
  );
};

export default QuestionGrid;
