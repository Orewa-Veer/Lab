import { users, type Question } from "@/Data/Discussion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import RichTextEditor from "./RichTextEditor";
interface FormData {
  content: string;
}
interface Props {
  discussion: Question;
  setDiscuss: React.Dispatch<React.SetStateAction<Question | null>>;
}

const ReplySubmit = ({ discussion, setDiscuss }: Props) => {
  const { handleSubmit } = useForm<FormData>();
  const [content, setContent] = useState("");
  const handleChange = (html: string) => {
    setContent(html);
  };
  const [lastRep, setLastRep] = useState(
    discussion.replies[discussion.replies.length - 1].id
  );
  const new1 = lastRep.slice(0, 1);
  const new2 = Number(lastRep.slice(1)) + 1;
  const newId = new1 + new2;
  const onSubmit = () => {
    setLastRep(newId);
    setDiscuss((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        replies: [
          ...prev.replies,
          {
            id: newId,
            questionId: prev.id,
            parentId: null,
            body: content,
            createdAt: "2025-06-09T16:05:00Z",
            user: users[4],
            upvotes: 53,
            isSolution: true,
          },
        ],
      };
    });
  };
  return (
    <>
      <form
        action=""
        className="flex flex-col"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">Start a New Discussion</h2>

          <RichTextEditor onChange={handleChange} value={content} />

          <button
            type="submit"
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Post
          </button>
        </div>
      </form>
    </>
  );
};

export default ReplySubmit;
