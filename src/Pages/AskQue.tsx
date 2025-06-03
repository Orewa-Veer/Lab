import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaSearch, FaSortAmountDown } from "react-icons/fa";
import { FiFilter } from "react-icons/fi";
import QuestionGrid from "./QuestionGrid";
import { Search } from "lucide-react";

const AskQue = () => {
  return (
    <div className="p-6 sm:px-10 md:px-20 mx-auto">
      {/*Top - questions */}
      <div className="flex w-full justify-between mx-auto mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            All Questions
          </h1>
          <p className="text-gray-600">
            Find answers to your development questions
          </p>
        </div>
        <div>
          <Button className="bg-[#059669] text-white rounded font-medium">
            Ask Question
          </Button>
        </div>
      </div>
      {/*Top -Search */}
      <div className="flex flex-col md:flex-row gap-4 mb-6 justify-between">
        <div className="flex items-center flex-1">
          <Search className="relative left-7 top-1.75  h-4 w-4 -translate-y-1/2 text-muted-foreground " />
          <Input placeholder="Seach questiosn..." className="pl-10" />
        </div>

        <div className="flex justify-between gap-2">
          {" "}
          <Button className="flex bg-white text-black border hover:bg-gray-200 ">
            <FiFilter className="" />
            <span>Filter</span>
          </Button>
          <Button className="flex bg-white text-black border hover:bg-gray-200 ">
            <FaSortAmountDown />
            <span>Sort</span>
          </Button>
        </div>
      </div>
      {/* Tags*/}
      <div>
        {" "}
        <QuestionGrid />
      </div>

      {/* Bottom Buttons*/}
      <div> </div>
    </div>
  );
};

export default AskQue;
