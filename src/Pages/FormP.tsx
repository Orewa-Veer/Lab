import { Button } from "@/components/ui/button";
import { discussion, users, type Question } from "@/Data/Discussion";
import { DataT, type Types } from "@/Data/Tags";
import RichTextEditor from "@/Utilities/RichTextEditor";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegQuestionCircle } from "react-icons/fa";
interface FormData {
  title: string;
  content: string;
  tags: string;
}

const FormP = () => {
  const [qid, setId] = useState(
    parseInt(discussion[discussion.length - 1].id.slice(1))
  );
  const newid = qid + 1;

  const { register, handleSubmit } = useForm<FormData>();
  const OnSubmit = (data: FormData) => {
    setId(newid);
    const currentTime = new Date().toISOString();
    const discuss: Question = {
      id: "q" + newid,
      title: data.title,
      body: content,
      tags: tagTitle,
      createdAt: currentTime,
      user: users[0],
      upvotes: 0,
      views: 0,
      isSolved: false,
      replies: [],
    };
    discussion.push(discuss);
    console.log(discuss);
  };

  const [content, setContent] = useState("");
  const handleChange = (html: string) => {
    setContent(html);
  };
  const [selectedTags, setSelectedTags] = useState<Types[]>([]);
  const [availableTags, setAvailableTags] = useState<Types[]>(DataT);

  const handleTagClick = (tag: Types) => {
    setSelectedTags((prev) => [...prev, tag]);
    setAvailableTags((prev) => prev.filter((t) => t !== tag));
  };

  const handleTagRemove = (tag: Types) => {
    setSelectedTags((prev) => prev.filter((t) => t !== tag));
    setAvailableTags((prev) => [...prev, tag]);
  };
  const tagTitle = selectedTags.map((tags) => tags.title);
  return (
    <div className="    ">
      <form
        className="    flex flex-col gap-8"
        onSubmit={handleSubmit(OnSubmit)}
      >
        {/*Heading */}
        <div>
          <h3 className="text-3xl font-semibold leading-none mb-2 tracking-tight flex items-center gap-2 ">
            <FaRegQuestionCircle className="text-emerald-600" />
            Question Details
          </h3>
          <p className="text-sm font-medium mt-1 italic">
            Provide clear and detailed information about your question
          </p>
        </div>
        {/*Question Title */}
        <div>
          <label
            htmlFor="in1"
            className="font-medium text-lg drop-shadow-md opacity-80"
          >
            Question Title
          </label>
          <input
            id="in1"
            type="text"
            className="mt-2 px-4 py-2 rounded-md border border-input w-full"
            placeholder="e.g., How to implement authentication"
            {...register("title", { required: true })}
          />
          <p className="text-xs text-gray-500 mt-2 italic font-medium">
            Be specific and imagine you're asking a question to another person
          </p>
        </div>
        {/*Question Description */}
        <div>
          <div className="flex justify-between items-center">
            <label htmlFor="in2" className="font-semibold">
              Question Description
            </label>
          </div>
          <RichTextEditor value={content} onChange={handleChange} />
          <p className="text-xs text-gray-500">
            Include all the information someone would need to answer your
            question
          </p>
        </div>
        {/*Tags */}
        <div className="flex-col gap-2">
          {/*label */}
          <label htmlFor="in3" className="text-sm font-medium">
            Tags*
          </label>
          {/*Mid div */}
          <div className="mt-2">
            {/*input */}
            <div className="min-h-10 border rounded-md  flex items-center p-2 flex-wrap   ">
              <div className="mt-3  flex flex-wrap gap-2 ">
                {selectedTags.map((data) => (
                  <div
                    className="rounded-md border px-2.5 py-0.5 font-medium text-sm items-center"
                    key={data.id}
                    onClick={() => handleTagRemove(data)}
                  >
                    {data.title}
                  </div>
                ))}
              </div>
            </div>
            {/*Tags section */}
            <div className="mt-3  flex flex-wrap gap-2 ">
              <span>Suggested:</span>
              {availableTags.map((data) => (
                <div
                  key={data.id}
                  className="rounded-md border px-2.5 py-0.5 font-medium text-sm items-center"
                  onClick={() => handleTagClick(data)}
                >
                  {data.title}
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Add up to 5 tags to describe what your question is about
            </p>
          </div>
        </div>
        {/* Bottom Buttons */}
        <div className="flex justify-start gap-4">
          <Button
            type="submit"
            className="bg-emerald-500 text-white p-3 rounded font-medium hover:bg-emerald-600"
          >
            Post Your Question
          </Button>
          <Button className="bg-white text-black border rounded p-3 font-medium hover:bg-gray-200">
            {" "}
            Save as Draft
          </Button>
        </div>
      </form>
    </div>
  );
};

export default FormP;
