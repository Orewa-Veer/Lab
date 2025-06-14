import { discussion, users } from "@/Data/Discussion";
import PageCover from "./PageCover";
import QuestionCards from "@/Utilities/QuestionCards";

const UserPage = () => {
  const UserQues = discussion.filter((disc) =>
    users[0].posts.includes(disc.id)
  );
  return (
    <PageCover>
      {/* Header */}
      <div className="flex justify-around p-3 py-10 mb-10 bg-gradient-to-br from-blue-100/20 to-white/20 border border-white/40 backdrop-blur-xl shadow-xl rounded-lg">
        {/* left image  */}
        <div className=" flex items-center justify-center rounded-full overflow-hidden border-2">
          <img src={users[0].avatar} className="size-50 col-span-1 " />
        </div>
        {/* right about  */}
        <div className="flex flex-col space-y-2">
          <div className="flex flex-col ">
            <span className=" italic font-bold text-2xl ">
              {users[0].username}
            </span>
            <span className="text-gray-600 font-medium text-sm">
              {users[0].name}
            </span>
            <span className="text-gray-800 text-sm font-medium tracking-tight font-serif">
              {users[0].location}
            </span>
          </div>
          <span className="font-medium text-gray-800 text-lg tracking-tight">
            {users[0].bio}
          </span>
          <span className="italic text-sm font-medium">
            Email: {users[0].email}
          </span>
          <span className="flex gap-2">
            {users[0].skills.map((skill) => (
              <div className="rounded-lg text-emerald-700 bg-white/50 border border-white/80  backdrop-blur-sm px-2 font-semibold text-xs">
                {skill}
              </div>
            ))}
          </span>
          <span className="text-sm font-sans">
            Visit My Website: {users[0].website}
          </span>
        </div>
      </div>
      {/* Mid Section  */}
      <div className="backdrop-blur-xl shadow-xl mb-10 rounded-lg bg-cyan-200/20 border-byan-200/40 flex items-center p-3">
        {/* tags */}
        <div className="items-center text-3xl font-bold drop-shadow-2xl bg-gradient-to-br from-purple-500 to-pink-500 mb-3 bg-clip-text text-transparent">
          post
        </div>
      </div>
      <div></div>
      {/* Content  */}
      <div className="space-y-3">
        {UserQues.map((post) => (
          <QuestionCards obj={post} />
        ))}
      </div>
    </PageCover>
  );
};

export default UserPage;
