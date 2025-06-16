import { Button } from "@/components/ui/button";
import { discussion } from "@/Data/Discussion";
import { BgColor } from "@/Utilities/BgColor";
import QuestionCards from "@/Utilities/QuestionCards";
import { TrendingDown } from "lucide-react";
import { Link } from "react-router-dom";

const Latest = () => {
  const filteredQues = discussion.filter((q) => q.isSolved === true);
  return (
    <>
      {/*Head */}
      <div className="flex justify-between items-center p-6 mb-16">
        <div>
          <h2 className="text-5xl drop-shadow-lg backdrop-blur-lg font-bold text-shadow-gray-900 mb-4">
            Latest Discussions
          </h2>
          <p className="text-xl text-gray-600 italic font-semibold">
            See what the community is talking about
          </p>
        </div>
        <Button className="text-[#059669] bg-white/60 border-white/80 border hover:bg-emerald-100/60">
          <Link
            to={"/questions"}
            className="flex justify-between items-center gap-2"
          >
            View All
            <TrendingDown />
          </Link>
        </Button>
      </div>
      {/*Cards section flex */}

      <div className="flex flex-col gap-6 mx-3">
        {filteredQues.map((filQue, index) => (
          <QuestionCards
            key={index}
            obj={filQue}
            color={BgColor[index % BgColor.length]}
          />
        ))}
      </div>
      {/*Cards -individual */}
    </>
  );
};

export default Latest;
