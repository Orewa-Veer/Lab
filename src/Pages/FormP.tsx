import { Button } from "@/components/ui/button";
import { DataT } from "@/Data/Tags";
import { FaRegQuestionCircle } from "react-icons/fa";

const FormP = () => {
  return (
    <div className="    ">
      <form
        action="
       "
        className="border rounded shadow-md p-6 flex flex-col gap-8"
      >
        {/*Heading */}
        <div>
          <h3 className="text-2xl font-semibold leading-none tracking-tight flex items-center gap-2 ">
            <FaRegQuestionCircle className="text-emerald-600" />
            Question Details
          </h3>
          <p className="text-sm text-muted-foreground mt-1">
            Provide clear and detailed information about your question
          </p>
        </div>
        {/*Question Title */}
        <div>
          <label htmlFor="in1" className="font-medium text-sm opacity-70">
            {" "}
            Question Title
          </label>
          <input
            id="in1"
            type="text"
            className="mt-2 px-4 py-2 rounded-md border border-input w-full"
            placeholder="e.g., How to implement authentication"
          />
          <p className="text-sm text-gray-500 mt-2">
            Be specific and imagine you're asking a question to another person
          </p>
        </div>
        {/*Question Description */}
        <div>
          <div className="flex justify-between items-center">
            <label htmlFor="in2" className="">
              Question Description
            </label>
            <div>
              <Button className="bg-white text-black"></Button>
              <Button className="bg-white text-black"></Button>
            </div>
          </div>
          <textarea
            name="in2"
            id="in2"
            className="rounded-md bg-background border border-input mt-2 px-4 py-2 w-full text-sm flex items-center"
            placeholder="Provide what you have tried, what didn't work and what you want to know"
          ></textarea>
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
            <div className="min-h-10 border rounded-md border-input flex items-center p-2 flex-wrap   ">
              <input
                type="text"
                id="in3"
                className="border-none"
                placeholder="Add Tags (e.g. Javascript,react )"
              />
            </div>
            {/*Tags section */}
            <div className="mt-3  flex flex-wrap gap-2 ">
              <span>Suggested:</span>
              {DataT.map((data) => (
                <div className="rounded-md border px-2.5 py-0.5 font-medium text-sm items-center">
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
          <Button className="bg-emerald-500 text-white p-3 rounded font-medium hover:bg-emerald-600">
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
