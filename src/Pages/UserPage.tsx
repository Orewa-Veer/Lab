import { discussion, users } from "@/Data/Discussion";
import { BgColor } from "@/Utilities/BgColor";
import QuestionCards from "@/Utilities/QuestionCards";
import { MdLocationOn, MdOutlineMailOutline } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import PageCover from "./PageCover";
import RendTags from "@/Utilities/RendTags";

const UserPage = () => {
  const UserQues = discussion.filter((disc) =>
    users[0].posts.includes(disc.id)
  );
  return (
    <PageCover>
      {/* Header */}
      <div className="flex justify-around p-3 py-10 mb-10 mx-11 bg-gradient-to-br from-blue-200/50 to-emerald-200/50 border border-white/80 backdrop-blur-xl shadow-xl rounded-lg">
        {/* left image  */}
        <div className="flex flex-col items-center ml-5">
          <div className=" flex items-center justify-center rounded-full overflow-hidden border-4 border-gray-600 ">
            <img src={users[0].avatar} className="size-40 col-span-1 " />
          </div>
          <span className="italic font-bold text-3xl mt-2  ">
            {users[0].username}
          </span>{" "}
          <span className="text-gray-800 font-medium text-xl">
            {users[0].name}
          </span>{" "}
          <span className="flex items-center text-gray-600 text-sm font-medium tracking-tight font-serif">
            <MdLocationOn /> {users[0].location}
          </span>
        </div>
        {/* right about  */}
        <div className="flex  flex-col space-y-6">
          <span className="font-medium text-gray-800 text-2xl leading-loose break-words whitespace-normal">
            {users[0].bio}
          </span>
          <span className="flex gap-10">
            {users[0].skills.map((skill, index) => (
              <RendTags
                key={index}
                color={BgColor[index % BgColor.length].tags}
                tag={skill}
              />
            ))}
          </span>
          <span className="flex items-center gap-2 italic  font-medium">
            <MdOutlineMailOutline />
            <span className="text-blue-700 underline cursor-pointer">
              {users[0].email}
            </span>
          </span>
          <span className="flex items-center  italic font-medium ">
            <TbWorld />
            <span className="text-blue-700 cursor-pointer underline ml-1">
              {" "}
              {users[0].website}
            </span>
          </span>
        </div>
      </div>
      {/* Mid Section  */}
      <div className=" mb-10 rounded-lg  flex-col flex items-start p-3">
        {/* tags */}
        <div className="items-center text-3xl ml-5 font-bold drop-shadow-2xl ">
          Recent Posts
        </div>
        <hr className=" mx-4 border-black w-full border-t-4 my-6 shadow-sm" />
      </div>

      {/* Content  */}
      <div className="space-y-3">
        {UserQues.map((post, index) => (
          <QuestionCards obj={post} color={BgColor[index % BgColor.length]} />
        ))}
      </div>
    </PageCover>
  );
};

export default UserPage;
