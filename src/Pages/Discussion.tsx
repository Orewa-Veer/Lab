import { discussion, type Question } from "@/Data/Discussion";
import RepliesList from "@/Utilities/RepliesList";
import ReplySubmit from "@/Utilities/ReplySubmit";
import { Bookmark } from "lucide-react";
import { useEffect, useState } from "react";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import "react-quill/dist/quill.snow.css";
import PageCover from "./PageCover";
import { useParams } from "react-router-dom";
const Discussion = () => {
  const params = useParams<{ id: string }>();
  const id = params.id;

  const [discuss, setDiscuss] = useState<Question | null>(null);
  useEffect(() => {
    const q = discussion.find((q) => q.id === id);
    setDiscuss(q || null);
  }, [id]);
  if (!discuss) return <p>Question not found</p>;
  return (
    <>
      <PageCover>
        {/* Question*/}
        <div>
          <div className="backdrop-blur-lg  bg-white/50 border border-white/80 text-gray-800 rounded-3xl p-6 px-10   shadow-xl  flex gap-2">
            <div className="flex flex-col    space-y-5 items-center  p-3">
              <div className="flex flex-col space-y-5 items-center mt-10 p-3 pl-1">
                <GoTriangleUp className="size-10 text-gray-600  rounded-full border-gray-600 border-2" />
                <span className="text-gray-600 text-3xl font-bold">
                  {discuss.upvotes}
                </span>
                <GoTriangleDown className="size-10 text-gray-600 rounded-full border-gray-600 border-2" />
              </div>
              <div>
                <Bookmark className="text-emerald-700 " />
              </div>
            </div>
            <div id="ques-wrap" className="flex-1 pl-6">
              <div className="flex  items-start justify-between">
                <div className="flex flex-col gap-3">
                  <h1 className="text-4xl font-bold text-shadow-2xs text-shadow-gray-500 text-gray-800 font-iceland ">
                    {discuss.title}
                  </h1>
                  <p className="text-xs text-gray-600  mt-1 flex gap-3 items-center">
                    <img
                      src={discuss.user.avatar}
                      className="w-8 h-8 rounded-full border border-gray-300"
                    />
                    Asked by{" "}
                    <span className="font-medium">{discuss.user.username}</span>{" "}
                    • {discuss.createdAt.slice(0, 11)}
                  </p>
                  <div id="show-tags" className=" flex gap-3">
                    {discuss.tags.map((tag) => (
                      <div className="rounded-full px-2.5 py-0.5 text-xs bg-white/60 border-emerald-700/80 text-gray-700">
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
                {/* body */}
              </div>
              <p className="mt-6 text-gray-600 text-lg leading-relaxed font-iceland">
                {discuss.body}
              </p>
              <div className="flex mt-6 gap-4 text-sm text-gray-600 justify-end ">
                <button className="hover:text-green-600 transition flex gap-1 items-center">
                  <GoTriangleUp className="size-8" /> {discuss.upvotes}
                </button>
                <button className="hover:text-pink-500 transition">
                  ❤️ {discuss.views}
                </button>
                <button className="hover:text-blue-500 transition">
                  💬 {discuss.replies.length} Replies
                </button>
              </div>
            </div>
          </div>
          {/* Replies */}
          <RepliesList replies={discuss.replies} />
          {/* bottom input box */}
          <div className="backdrop-blur-lg bg-white/50 border-white/80 border shadow-lg rounded-xl p-6 mx-15 mt-10">
            <ReplySubmit discussion={discuss} setDiscuss={setDiscuss} />
          </div>
        </div>
        {/* side panel */}
        <div className="w-full h-full   rounded-lg flex flex-col gap-5 py-6 ">
          {/* top */}
          <div className="flex-1 w-full h-fit bg-white/50 rounded-md border-white/80 backdrop-blur-md shadow-md p-3">
            <h2 className="text-2xl ">related tags</h2>
            {discuss.tags.map((tag) => (
              <div>{tag}</div>
            ))}
          </div>
          {/* medium */}
          <div className="flex-1 w-full h-fit bg-white/50 rounded-md border-white/80 backdrop-blur-md shadow-md "></div>
          {/* bottom */}
          <div className="flex-1 h-fit w-full bg-white/50 rounded-md border-white/80 backdrop-blur-md shadow-md "></div>
        </div>
      </PageCover>
    </>
  );
};

export default Discussion;
