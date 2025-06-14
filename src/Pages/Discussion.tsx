import { discussion, users } from "@/Data/Discussion";
import { Bookmark } from "lucide-react";
import { useState } from "react";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";

import { HeadingButton } from "@/components/tiptap-ui/heading-button";
import { EditorContent, EditorContext, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Tiptap from "./TipTap";
import PageCover from "./PageCover";

const Discussion = () => {
  const [richContent, setRichContent] = useState<string>("");
  const [lastrep, setLastrep] = useState(
    discussion[0].replies[discussion[0].replies.length - 1].id
  );
  const id = lastrep;
  const prefix = id.slice(0, 1); // "q"
  const number = parseInt(id.slice(1)); // 123
  const newId = prefix + (number + 1); // "q124"
  const editor = useEditor({
    immediatelyRender: false,
    extensions: [StarterKit],
    content: `
          <h1>Heading 1</h1>
          <h2>Heading 2</h2>
          <h3>Heading 3</h3>
          <h4>Heading 4</h4>
        `,
  });

  const handleSubmit = () => {
    setLastrep(newId);
    discussion[0].replies.push({
      id: newId,
      questionId: "q123",
      parentId: null,
      body: richContent,
      createdAt: "2025-06-09T16:05:00Z",
      user: users[4],
      upvotes: 53,
      isSolution: true,
    });
    // send to backend or state
  };
  return (
    <>
      <PageCover>
        {/* Question*/}
        <div>
          <div className="backdrop-blur-lg  bg-white/50 border border-white/80 text-gray-800 rounded-3xl p-6 px-10   shadow-xl  flex gap-2">
            <div className="flex flex-col border-r-4 border-emerald-700/80   space-y-5 items-center  p-3">
              <div className="flex flex-col space-y-5 items-center mt-10 p-3 pl-1">
                <GoTriangleUp className="size-10 text-gray-600  rounded-full border-gray-600 border-2" />
                <span className="text-gray-600 text-3xl font-bold">
                  {discussion[0].upvotes}
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
                    {discussion[0].title}
                  </h1>
                  <p className="text-xs text-gray-600  mt-1 flex gap-3 items-center">
                    <img
                      src={discussion[0].user.avatar}
                      className="w-8 h-8 rounded-full border border-gray-300"
                    />
                    Asked by{" "}
                    <span className="font-medium">
                      {discussion[0].user.username}
                    </span>{" "}
                    • {discussion[0].createdAt.slice(0, 11)}
                  </p>
                  <div id="show-tags" className=" flex gap-3">
                    {discussion[0].tags.map((tag) => (
                      <div className="rounded-full px-2.5 py-0.5 text-xs bg-white/60 border-emerald-700/80 text-gray-700">
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
                {/* body */}
              </div>
              <p className="mt-6 text-gray-600 text-lg leading-relaxed font-iceland">
                {discussion[0].body}
              </p>
              <div className="flex mt-6 gap-4 text-sm text-gray-600 justify-end ">
                <button className="hover:text-green-600 transition flex gap-1 items-center">
                  <GoTriangleUp className="size-8" /> {discussion[0].upvotes}
                </button>
                <button className="hover:text-pink-500 transition">
                  ❤️ {discussion[0].views}
                </button>
                <button className="hover:text-blue-500 transition">
                  💬 {discussion[0].replies.length} Replies
                </button>
              </div>
            </div>
          </div>
          {/* Replies */}
          <div className="ml-6 space-y-5 mt-6 text-gray-600 ">
            {discussion[0].replies.map((rep) => (
              <div className="backdrop-blur-lg shadow-lg  bg-white/20 border border-white/40 px-10 p-6 mx-10 gap-5  flex flex-col rounded-xl">
                {/* user which replied */}
                <div className="flex items-center gap-3">
                  <img src={rep.user.avatar} alt="" className="size-6" />
                  <span>{rep.user.username}</span>
                  <span className="text-sm flex gap-1 items-center">
                    {rep.upvotes}
                    <GoTriangleUp />
                  </span>
                </div>
                <p className="text-xs text-gray-1 00">
                  {rep.createdAt.slice(0, 10)}
                </p>
                {/* body  */}
                <div>{rep.body}</div>
                {/* footing */}
                <div className="flex gap-2 justify-end">
                  <GoTriangleUp className="size-8 cursor-pointer" />
                  <GoTriangleDown className="size-8 cursor-pointer" />
                </div>
              </div>
            ))}
          </div>
          {/* bottom input box */}
          <div className="backdrop-blur-lg bg-white/50 border-white/80 border shadow-lg rounded-xl p-6 mx-15 mt-10">
            <form action="" className="flex flex-col">
              <label htmlFor="in_dis">Add Your Answer</label>
              <input
                id="in_dis"
                type="text"
                placeholder="Add your text here"
                className="border border-white px-3 py-1.5 rounded-lg"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">
                  Start a New Discussion
                </h2>

                <Tiptap />

                <button
                  onClick={(data) => {
                    data.preventDefault();
                    handleSubmit();
                  }}
                  className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Post
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* side panel */}
        <div className="w-full h-full   rounded-lg flex flex-col gap-5 py-6 ">
          {/* top */}
          <div className="flex-1 w-full h-fit bg-white/50 rounded-md border-white/80 backdrop-blur-md shadow-md p-3">
            <h2 className="text-2xl ">related tags</h2>
            {discussion[0].tags.map((tag) => (
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
