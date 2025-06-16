import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ComboboxDemo } from "@/Utilities/Buttons/Sorting";
import { Search } from "lucide-react";
import { FaSortAmountDown } from "react-icons/fa";
import { FiFilter } from "react-icons/fi";
import { Link } from "react-router-dom";
import PageCover from "./PageCover";
import QuestionGrid from "./QuestionGrid";
import { useState } from "react";

const AskQue = () => {
  const [sortType, setSort] = useState<string>("Sort");
  return (
    <PageCover>
      {/*Top - questions */}
      <div className="flex w-full justify-between mx-auto mb-8">
        <div>
          <h1 className="text-4xl font-extrabold drop-shadow-2xl text-gray-900 mb-2">
            All Questions
          </h1>
          <p className="text-gray-600 italic">
            Find answers to your development questions
          </p>
        </div>
        <div>
          <Button className="bg-[#059669] text-white rounded font-medium">
            <Link to={"/popup"}> Ask Question</Link>
          </Button>
        </div>
      </div>

      {/*Top -Search */}
      <div className="flex flex-col md:flex-row gap-4 mb-6 justify-between">
        <div className="flex items-center flex-1  rounded-md">
          <Search className="relative left-8 top-1.75  h-4 w-4 -translate-y-1/2 text-muted-foreground " />
          <Input placeholder="Seach questiosn..." className="  px-10" />
        </div>

        <div className="flex justify-between gap-2">
          {" "}
          <Button className="flex bg-white/40 border-white/60 text-black border hover:bg-gray-200 ">
            <FiFilter className="" />
            <span>Filter</span>
          </Button>
          <Button className="flex bg-white/80 border-white text-black border hover:bg-gray-200 ">
            <FaSortAmountDown />
            <ComboboxDemo sortType={sortType} setSort={setSort} />
          </Button>
        </div>
      </div>
      {/* Tags*/}
      <div>
        {" "}
        <QuestionGrid sort={sortType} />
      </div>

      {/* Bottom Buttons*/}
      <div> </div>
    </PageCover>
  );
};

export default AskQue;
