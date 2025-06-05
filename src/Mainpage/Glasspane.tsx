import { DataT } from "@/Data/Tags";
import { Home, X } from "lucide-react";
import { useEffect } from "react";
import { BsTags } from "react-icons/bs";
import {
  FaArrowTrendUp,
  FaRegBookmark,
  FaRegClock,
  FaRegMessage,
} from "react-icons/fa6";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

const menuItems = [
  { title: "Home", url: "/", icon: <Home size={18} /> },
  { title: "Questions", url: "/questions", icon: <FaRegMessage size={18} /> },
  { title: "Trending", url: "#", icon: <FaArrowTrendUp size={18} /> },
  { title: "Recent", url: "#", icon: <FaRegClock size={18} /> },
  { title: "Bookmark", url: "#", icon: <FaRegBookmark size={18} /> },
];
interface Prop {
  isSidebarOpen: boolean;
  onClick: () => void;
}

export const GlassSidebar = ({ isSidebarOpen, onClick }: Prop) => {
  const location = useLocation();

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
        <aside className="fixed top-18 left-3 z-40 w-64 h-[calc(100vh-82px)] bg-white/20 backdrop-blur-lg shadow-lg rounded-xl border-r border-white/30 px-4 py-6 transition-all duration-300">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-emerald-700">{`Forumly`}</h2>
            <button className="text-emerald-600 " onClick={() => onClick()}>
              <X
                size={22}
                className="hover:size-6 transition-all duration-100"
              />
            </button>
          </div>
          <p className="text-sm text-gray-600 mb-4">Developer Community</p>

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
          <div className="mt-6">
            <h3 className="text-xs uppercase text-gray-800 font-semibold mb-2 flex items-center gap-2">
              <BsTags className="size-4" />
              Popular Tags
            </h3>
            <ul className="space-y-1">
              {DataT.slice(0, 5).map((tag) => (
                <li
                  key={tag.title}
                  className="flex justify-between items-center px-3 py-1 text-sm rounded hover:bg-white/10 hover:text-emerald-600 text-gray-600"
                >
                  <Link to={""}>
                    <span>{tag.title}</span>
                    <span className="text-xs text-gray-600">{tag.views}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Communities Section */}
          <div className="mt-6">
            <h3 className="text-xs uppercase text-gray-800 mb-2 flex items-center gap-2 font-se">
              <MdOutlinePeopleAlt className="size-4" />
              Communities
            </h3>
            <ul className="space-y-1 text-gray-600 text-sm">
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
        </aside>
      )}
    </>
  );
};
