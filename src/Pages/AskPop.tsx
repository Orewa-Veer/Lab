import React from "react";
import FormP from "./FormP";
import CardsM from "@/Utilities/CardsM";
import { SiTicktick } from "react-icons/si";
import { AiOutlineExclamationCircle } from "react-icons/ai";
const AskPop = () => {
  return (
    <div className=" flex flex-col p-6 sm:px-10 md:px-15 mx-auto">
      {/*Top */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Ask A Question
        </h1>
        <p className="text-gray-600">
          Get help from the community by asking a clear, detailed question
        </p>
      </div>
      {/*mid section */}
      <div className="flex justify-between gap-8">
        {/*Form */}
        <div>
          <FormP />
        </div>
        {/*Right Panel */}

        <div className="flex flex-col  items-center gap-6">
          {/*Guidlines */}
          <div className="border rounded-sm shadow-sm flex-col items-center ">
            {" "}
            <div className="p-6">
              <h3 className="font-semibold text-lg items-center gap-2 flex  ">
                <SiTicktick className="text-emerald-700" /> Writing Guidlines
              </h3>
            </div>
            <div className="p-6 pt-0">
              <ul className=" gap-3">
                <li className="flex  items-start text-sm gap-2">
                  <div className="size-2 bg-emerald-700 rounded-full mt-2 shrink-0 "></div>
                  <span>Be specific and clear in your question title</span>
                </li>
                <li className="flex  items-start   text-sm gap-2">
                  <div className="size-2 bg-emerald-700 rounded-full mt-2 shrink-0"></div>
                  <span>
                    Provide enough context and details in the descriptio
                  </span>
                </li>
                <li className="flex  items-start gap-2  text-sm">
                  <div className="size-2 bg-emerald-700 rounded-full mt-2 shrink-0"></div>
                  <span>Include relevant code snippets if applicable</span>
                </li>
                <li className="flex  items-start gap-2  text-sm ">
                  <div className="size-2 bg-emerald-700 rounded-full mt-2 shrink-0"></div>
                  <span>
                    Add appropriate tags to help others find your question
                  </span>
                </li>
                <li className="flex  items-start gap-2  text-sm">
                  <div className="size-2 bg-emerald-700 rounded-full mt-2 shrink-0"></div>
                  <span>Search for existing questions before posting</span>
                </li>
              </ul>
            </div>
          </div>
          {/*Pro tips */}
          <div className="border rounded-sm shadow-sm flex-col items-center ">
            {" "}
            <div className="p-6">
              <h3 className="font-semibold text-lg items-center gap-2 flex  ">
                <AiOutlineExclamationCircle className="text-emerald-700" /> Pro
                Tips
              </h3>
            </div>
            <div className="p-6 pt-0">
              <ul className=" gap-3">
                <li className="flex  items-start text-sm gap-2">
                  <div className="size-2 bg-emerald-700 rounded-full mt-2 shrink-0 "></div>
                  <span>Be specific and clear in your question title</span>
                </li>
                <li className="flex  items-start   text-sm gap-2">
                  <div className="size-2 bg-emerald-700 rounded-full mt-2 shrink-0"></div>
                  <span>
                    Provide enough context and details in the descriptio
                  </span>
                </li>
                <li className="flex  items-start gap-2  text-sm">
                  <div className="size-2 bg-emerald-700 rounded-full mt-2 shrink-0"></div>
                  <span>Include relevant code snippets if applicable</span>
                </li>
                <li className="flex  items-start gap-2  text-sm ">
                  <div className="size-2 bg-emerald-700 rounded-full mt-2 shrink-0"></div>
                  <span>
                    Add appropriate tags to help others find your question
                  </span>
                </li>
                <li className="flex  items-start gap-2  text-sm">
                  <div className="size-2 bg-emerald-700 rounded-full mt-2 shrink-0"></div>
                  <span>Search for existing questions before posting</span>
                </li>
              </ul>
            </div>
          </div>
          {/*Community Stats */}
        </div>
      </div>
    </div>
  );
};

export default AskPop;
