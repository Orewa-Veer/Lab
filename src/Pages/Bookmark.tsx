import { BookmarkIcon } from "lucide-react";
import PageCover from "./PageCover";
import { discussion, users } from "@/Data/Discussion";

import QuestionCards from "@/Utilities/QuestionCards";
import { BgColor } from "@/Utilities/BgColor";

const Bookmark = () => {
  const reqQues = discussion.filter((disc) =>
    users[0].bookmark.includes(disc.id)
  );
  return (
    <PageCover>
      {/* Body */}
      <div>
        {/* top div -heading */}
        <div className="space-y-3 mb-15">
          <h1 className="flex gap-2 text-6xl font-bold text-shadow-2xs  ">
            <BookmarkIcon className="text-emerald-700 size-17" />{" "}
            <span className="bg-gradient-to-r from-red-900 to-blue-900 bg-clip-text text-transparent">
              Bookmarks
            </span>
          </h1>
          <p className="text-gray-600 pl-13 italic">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, cum
            eos repudiandae iusto facilis accusamus nobis optio dignissimos
            dolor, veritatis consectetur sunt sed, in harum quod dolore
            laboriosam quibusdam ut.
          </p>
        </div>
        {/* mid filter strip */}
        <div></div>
        {/* questions bookmarked */}
        <div className="space-y-3 mt-3">
          {reqQues.map((req, index) => (
            <QuestionCards
              key={req.id}
              obj={req}
              color={BgColor[index % BgColor.length]}
            />
          ))}
        </div>
      </div>
    </PageCover>
  );
};

export default Bookmark;
