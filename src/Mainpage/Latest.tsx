import { Button } from "@/components/ui/button";
import { dummyQuestions } from "@/Data/Discussion";
import CardsM from "@/Utilities/CardsM";
import { MessageSquare, TrendingDown } from "lucide-react";
import { Link } from "react-router-dom";

const Latest = () => {
  const filteredQues = dummyQuestions.filter((q) => q.answered === true);
  return (
    <>
      {/*Head */}
      <div className="flex justify-between items-center p-6 mb-16">
        <div>
          <h2 className="text-4xl font-bold text-shadow-gray-900 mb-4">
            Latest Discussions
          </h2>
          <p className="text-xl text-gray-600">
            See what the community is talking about
          </p>
        </div>
        <Button className="text-[#059669] bg-white border border-emerald-100">
          <Link
            to={"/popup"}
            className="flex justify-between items-center gap-2"
          >
            View All
            <TrendingDown />
          </Link>
        </Button>
      </div>
      {/*Cards section flex */}

      <div className="flex flex-col gap-6 ">
        {filteredQues.map((data) => (
          <CardsM>
            <h3 className="text-xl font-semibold mb-4 text-gray-900 hover:text-emerald-600 w-full ">
              {data.title}
            </h3>
            <div className="flex items-center  text-sm text-gray-600 gap-6 mb-4 w-full">
              <div className="flex justify-between gap-2">
                <div className="size-6 bg-gray-400 rounded-full"></div>
                <span className="font-medium">{data.user}</span>
              </div>
              <span>{data.timestamp.slice(0, 10)}</span>
              <div className="flex items-center gap-1">
                <MessageSquare className="text-emerald-600" />{" "}
                <span className="font-medium">
                  {data.replies.length} answers
                </span>
              </div>
            </div>
            <div className="w-full">
              <div className="flex gap-2 ">
                {data.category.map((cat) => (
                  <div className="text-xs border rounded-md px-2 py-0.5 bg-gray-300 font-medium">
                    {cat}
                  </div>
                ))}
              </div>
            </div>
            <div></div>
            <div></div>
          </CardsM>
        ))}
      </div>
      {/*Cards -individual */}
    </>
  );
};

export default Latest;
