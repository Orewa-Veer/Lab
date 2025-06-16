import { users } from "@/Data/Discussion";
import { DataT } from "@/Data/Tags";
import { Bell, Home, X } from "lucide-react";
import { useEffect, useState } from "react";
import { BsTags } from "react-icons/bs";
import { FaRegBookmark, FaRegClock, FaRegMessage } from "react-icons/fa6";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

const menuItems = [
  { title: "Home", url: "/", icon: <Home size={18} /> },
  { title: "Questions", url: "/questions", icon: <FaRegMessage size={18} /> },
  { title: "Bookmark", url: "/bookmark", icon: <FaRegBookmark size={18} /> },
  { title: "Notifications", url: "/notifications", icon: <Bell size={18} /> },
  { title: "Recent", url: "#", icon: <FaRegClock size={18} /> },
];
interface Prop {
  isSidebarOpen: boolean;
  onClick: () => void;
}

export const GlassSidebar = ({ isSidebarOpen, onClick }: Prop) => {
  const location = useLocation();
  const [{ tagin, catin }, setState] = useState({ tagin: false, catin: false });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) onClick();
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Toggle Button when sidebar is closed */}
      {!isSidebarOpen && (
        <button
          className="fixed top-20 left-4 z-50 p-2 bg-white/30 text-emerald-700 backdrop-blur-md shadow-md rounded-full hover:bg-white/50"
          onClick={() => onClick()}
        >
          ☰
        </button>
      )}

      {/* Sidebar */}
      {isSidebarOpen && (
        <aside className="fixed top-18 left-3 z-40 w-64 h-[calc(100vh-82px)] bg-white/20 backdrop-blur-lg shadow-xl rounded-xl border border-white/30 px-4 py-6 transition-all duration-300 overflow-auto">
          <div className="flex flex-col justify-between h-full">
            {/* top section  */}
            <div>
              <div className="flex flex-col mb-4">
                <div className="flex justify-start gap-10 items-center mb-1">
                  <h2 className="text-4xl font-bold text-emerald-700">{`Forumly`}</h2>
                  <button
                    className="text-emerald-600 flex items-center"
                    onClick={() => onClick()}
                  >
                    <X
                      size={22}
                      className="hover:size-7 transition-all duration-100"
                    />
                  </button>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Developer Community
                </p>
              </div>
              <nav className="space-y-2 text-sm text-gray-800">
                {menuItems.map((item) => (
                  <Link
                    to={item.url}
                    key={item.title}
                    className={`flex items-center gap-3 px-3 py-2 rounded-md transition ${
                      location.pathname === item.url
                        ? "bg-emerald-100 text-emerald-700"
                        : "hover:bg-white/10"
                    }`}
                  >
                    {item.icon}
                    {item.title}
                  </Link>
                ))}
              </nav>
              {/* Tags Section */}
              <div
                className={` mt-6 pl-3 overflow-hidden ${
                  !tagin
                    ? "max-h-6 transition-all duration-200 ease-in-out"
                    : "max-h-96 transition-all duration-200 ease-in-out"
                }`}
              >
                <h3
                  className="text-sm font-normal cursor-pointer text-gray-800   mb-2 flex items-center gap-2 "
                  onClick={() => {
                    setState({ tagin: !tagin, catin: catin });
                  }}
                >
                  <BsTags className="size-4" />
                  Popular Tags
                </h3>
                <ul className="space-y-1 pl-3 font-semibold">
                  {DataT.slice(0, 5).map((tag) => (
                    <li
                      key={tag.title}
                      className="flex justify-between w-full items-center px-3 py-1 text-xs rounded hover:bg-white/10 hover:text-emerald-600 text-gray-600"
                    >
                      <Link
                        to={""}
                        className="flex justify-between w-full text-blue-500"
                      >
                        <span>{tag.title}</span>
                        <span className="text-xs text-gray-600">
                          {tag.views}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Communities Section */}
              <div
                className={`mt-6 overflow-hidden pl-3 ${
                  !catin
                    ? "max-h-6 transition-all duration-200 ease-in-out"
                    : "max-h-96 transition-all duration-200 ease-in-out"
                }`}
              >
                <h3
                  className="text-sm  text-gray-800 mb-2 flex items-center gap-2 cursor-pointer"
                  onClick={() => {
                    setState({ tagin: tagin, catin: !catin });
                  }}
                >
                  <MdOutlinePeopleAlt className="size-4" />
                  Communities
                </h3>
                <ul className="space-y-1 pl-3  text-xs font-semibold text-blue-500">
                  <li className="hover:bg-white/10 px-3 py-1 rounded">
                    Frontend Developers
                  </li>
                  <li className="hover:bg-white/10 px-3 py-1 rounded">
                    Backend Engineers
                  </li>
                  <li className="hover:bg-white/10 px-3 py-1 rounded">
                    DevOps & Cloud
                  </li>
                  <li className="hover:bg-white/10 px-3 py-1 rounded">
                    Mobile Development
                  </li>
                </ul>
              </div>
            </div>
            {/* footer */}
            <div>
              {/* user section */}
              <Link
                className="flex gap-2 bg-white/50 rounded-lg py-1 items-center  px-6"
                to={"/user"}
              >
                <img src={users[0].avatar} className="size-6" />
                <span className="font-semibold text-lg">
                  {users[0].username}
                </span>
              </Link>
            </div>
          </div>
        </aside>
      )}
    </>
  );
};
