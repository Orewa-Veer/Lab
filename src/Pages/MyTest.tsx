import CardsonCards from "@/MyLab/CardonCard";
import CardsGlass from "@/MyLab/CardsGlass";
import {
  Bookmark,
  Fence,
  Home,
  MessageSquare,
  TrendingDown,
} from "lucide-react";
import { BsQuestionSquare } from "react-icons/bs";
import { FaRegClock } from "react-icons/fa6";

const MyTest = () => {
  return (
    <>
      <div className="p-6 pt-22 sm:px-10 md:px-20 w-full h-full">
        <CardsGlass className="w-50 h-[85vh] space-y-6">
          <h2 className="flex items-center gap-3 text-3xl font-bold text-green-600">
            <MessageSquare className="text-green-600" /> Formuly
          </h2>

          <div className="space-y-3">
            <CardsonCards className="py-0.5 flex items-center gap-2">
              <Home />
              Home
            </CardsonCards>
            <div className="py-0.5 flex items-center gap-2">
              <Bookmark /> Questions
            </div>
            <div className="py-0.5 flex items-center gap-2">
              <TrendingDown /> Trending
            </div>
            <div className="py-0.5 flex items-center gap-2">
              <Fence /> Fence
            </div>
            <div className="py-0.5 flex items-center gap-2">
              <FaRegClock /> Clock
            </div>
          </div>
        </CardsGlass>
      </div>
    </>
  );
};

export default MyTest;
