import { Button } from "@/components/ui/button";
import type { TagType } from "@/Data/answert";
import { TAGS } from "@/Data/answert";
import { discussion } from "@/Data/Discussion";
import { BgColor } from "@/Utilities/BgColor";
import QuestionCards from "@/Utilities/QuestionCards";
import { useState, useMemo } from "react";

interface Props {
  sort: string;
}

const QuestionGrid = ({ sort }: Props) => {
  const [activeTag, setActiveTag] = useState<TagType>("All");

  const filteredAndSortedQues = useMemo(() => {
    let filtered = discussion;
    if (activeTag === "Answered") {
      filtered = discussion.filter((q) => q.isSolved);
    } else if (activeTag === "Unanswered") {
      filtered = discussion.filter((q) => !q.isSolved);
    }

    let sorted = filtered;
    if (sort === "newest") {
      sorted = [...filtered].sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
    } else if (sort === "upvotes") {
      sorted = [...filtered].sort((a, b) => b.upvotes - a.upvotes);
    }

    return sorted;
  }, [sort, activeTag]); // recompute only when either changes

  return (
    <>
      <div className="flex flex-wrap gap-3 mb-6 px-2">
        {TAGS.map((tag) => (
          <Button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className="px-3.5 py-0.5 rounded-full items-center text-xs font-semibold border bg-emerald-100 hover:bg-emerald-200 border-white text-[#09090B]"
          >
            {tag}
          </Button>
        ))}
      </div>
      <div className="flex flex-col gap-4">
        {filteredAndSortedQues.map((obj, index) => (
          <QuestionCards
            obj={obj}
            key={obj.id}
            color={BgColor[index % BgColor.length]}
          />
        ))}
      </div>
    </>
  );
};

export default QuestionGrid;
