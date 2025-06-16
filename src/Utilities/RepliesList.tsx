import type { Reply } from "@/Data/Discussion";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
interface Props {
  replies: Reply[];
}
const RepliesList = ({ replies }: Props) => {
  return (
    <>
      <div className="ml-6 space-y-5 mt-6 text-gray-600 ">
        {replies.map((rep) => (
          <div
            key={rep.id}
            className="backdrop-blur-lg shadow-lg  bg-white/20 border border-white/40 px-10 p-6 mx-10 gap-5  flex flex-col rounded-xl"
          >
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

            <div dangerouslySetInnerHTML={{ __html: rep.body }} />

            {/* footing */}
            <div className="flex gap-2 justify-end">
              <GoTriangleUp className="size-8 cursor-pointer" />
              <GoTriangleDown className="size-8 cursor-pointer" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default RepliesList;
