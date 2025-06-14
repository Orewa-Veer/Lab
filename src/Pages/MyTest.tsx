import CardsGlass from "@/MyLab/CardsGlass";
import { Home, MessageSquare, Tag } from "lucide-react";
import { useState } from "react";
import { BsQuestionDiamond } from "react-icons/bs";
import { MdCategory, MdOutlineCategory } from "react-icons/md";
import { Link } from "react-router-dom";

const MyTest = () => {
  const Tags = [
    { name: "Javascript", views: 23 },
    { name: "React", views: 45 },
    { name: "CSS", views: 34 },
    { name: "Python", views: 52 },
    { name: "Node.Js", views: 35 },
    { name: "Typescript", views: 43 },
  ];
  const Homebar = [
    { title: "Home", url: "/", logo: <Home className="size-5" /> },
    {
      title: "Questions",
      url: "/",
      logo: <BsQuestionDiamond className="size-5" />,
    },
    { title: "Bookmark", url: "/", logo: <Home className="size-5" /> },
    { title: "Trends", url: "/", logo: <Home className="size-5" /> },
  ];
  const Categories = [
    { title: "Frontend", logo: <Home /> },
    { title: "Backend", logo: <BsQuestionDiamond /> },
    { title: "System Design", logo: <Home /> },
    { title: "Full Stack", logo: <Home /> },
  ];
  const [active, setactive] = useState("Home");
  const [{ tagin, catin }, setstate] = useState({ tagin: true, cating: true });
  return (
    <>
      <div className="p-6 pt-22 sm:px-10 md:px-20 w-full h-full">
        <CardsGlass className="w-64 h-[85vh] space-y-6 px-3">
          <div>
            <h2 className="flex items-center gap-3 text-4xl font-bold  text-green-600">
              <MessageSquare className="text-green-600" /> Formuly
            </h2>
            <p className="text-gray-600">Developer Community</p>
          </div>

          <div className="space-y-5 p-3 text-emerald-700">
            {/*Navigation */}
            <div id="Route" className=" space-y-3">
              {Homebar.map((icon) => (
                <Link
                  to={icon.url}
                  key={icon.title}
                  onClick={() => {
                    setactive(icon.title);
                  }}
                  className={`${
                    active === icon.title &&
                    "bg-white/50 rounded-sm shadow-sm backdrop-blur-sm"
                  } flex items-center gap-3  tracking-tight font-medium px-1 py-0.5 font-sans`}
                >
                  {icon.logo} {icon.title}
                </Link>
              ))}
            </div>
            {/*Tags*/}

            <div
              id="Tags"
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                tagin ? "max-h-6" : "max-h-96"
              }`}
            >
              <h3
                className={`flex items-center font-medium gap-3`}
                onClick={() => setstate({ tagin: !tagin, cating: catin })}
              >
                <Tag className="size-5 " /> Popular Tags
              </h3>
              <div className="px-8 text-blue-500 text-sm ">
                {Tags.map((tag) => (
                  <div className="flex items-center justify-between  ">
                    <span>{tag.name}</span>
                    <span> {tag.views}</span>
                  </div>
                ))}
              </div>
            </div>

            {/*Categories */}

            <div id="Cat" className="px-1">
              <h2 className="flex items-center font-medium  gap-3">
                <MdOutlineCategory className="size-5" />
                Categories
              </h2>
              <div className="px-8 text-sm text-blue-500 space-y-0.5">
                {Categories.map((cat) => (
                  <div>{cat.title}</div>
                ))}
              </div>
            </div>
            <div id="foot"></div>
          </div>
        </CardsGlass>
      </div>
    </>
  );
};

export default MyTest;
