import { AiOutlineExclamationCircle } from "react-icons/ai";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { SiTicktick } from "react-icons/si";
import FormP from "./FormP";
import PageCover from "./PageCover";
import CardsM from "@/Utilities/CardsM";
const AskPop = () => {
  return (
    <PageCover>
      <div className=" flex flex-col ">
        {/*Top */}
        <div className="mb-8">
          <h1 className="text-5xl font-bold drop-shadow-2xl text-gray-900 mb-2">
            Ask A Question
          </h1>
          <p className="text-gray-600 italic font-semibold">
            Get help from the community by asking a clear, detailed question
          </p>
        </div>
        {/*mid section */}
        <div className="grid grid-cols-1  lg:grid-cols-3 gap-8 ">
          {/*Form */}

          <div className="col-span-1 lg:col-span-2">
            <CardsM>
              <FormP />
            </CardsM>
          </div>

          {/*Right Panel */}

          <div className="flex flex-col  items-center gap-6">
            {/*Guidlines */}
            <CardsM className="  flex-col w-full items-center p-3 hover:-translate-y-1">
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
            </CardsM>
            {/*Pro tips */}
            <CardsM className=" flex-col items-center w-full p-3 hover:-translate-y-1">
              {" "}
              <div className="p-6">
                <h3 className="font-semibold text-lg items-center gap-2 flex  ">
                  <AiOutlineExclamationCircle className="  text-blue-600" />
                  Pro Tips
                </h3>
              </div>
              <div className="p-6 pt-0">
                <div className="text-sm text-gray-700">
                  <strong>Good Title:</strong>"How to handle async/await errors
                  in React useEffect?"
                </div>
                <div className="text-sm text-gray-700 mt-3">
                  <strong>Include Code:</strong> Share relevant code snippets to
                  get better answers
                </div>
                <div className="text-sm text-gray-700 mt-3">
                  <strong>Be Specific:</strong> Mention your environment,
                  versions, and what you've tried
                </div>
              </div>
            </CardsM>
            {/*Community Stats */}
            <CardsM className=" flex-col items-center w-full p-3 hover:-translate-y-1">
              <div className="p-6">
                <h3 className="font-semibold text-lg items-center gap-2 flex  ">
                  <MdOutlinePeopleAlt className="text-purple-600" />
                  Community Status
                </h3>
              </div>
              <div className="p-6 pt-0">
                <div className="flex justify-between text-sm ">
                  <span className="text-gray-600">Questions today</span>
                  <span className="font-medium">243</span>
                </div>
                <div className="flex justify-between mt-3 text-sm ">
                  <span className="text-gray-600">Answered today</span>
                  <span className="font-medium">187</span>
                </div>
                <div className="flex justify-between mt-3 text-sm w-full">
                  <span className="text-gray-600">Average response time</span>
                  <span className="font-medium">2.5 hours</span>
                </div>
              </div>
            </CardsM>
          </div>
        </div>
      </div>
    </PageCover>
  );
};

export default AskPop;
