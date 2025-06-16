import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { GlassSidebar } from "./Mainpage/Glasspane";
import HomePage from "./Mainpage/Home";
import Navbar from "./Mainpage/Navbar";
import AskPop from "./Pages/AskPop";
// import AskQue from "./Pages/AskQue";
import Discussion from "./Pages/Discussion";
import AskQue from "./Pages/AskQue";
import Bookmark from "./Pages/Bookmark";
import UserPage from "./Pages/UserPage";
import NotificationsPage from "./Pages/notifications";
function App() {
  const [isSidebarOpen, setSidebar] = useState(false);

  useEffect(() => {
    const isSmallScreen = window.innerWidth < 768; // Tailwind `md` breakpoint
    setSidebar(!isSmallScreen);
  }, []);
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-emerald-300 to-blue-300 ">
        {/* Navbar */}{" "}
        <header className="fixed z-50 top-0 h-16 w-full flex items-center px-4 shadow-md bg-white/30 backdrop-blur-lg border-b border-white/30 ">
          <Navbar />
        </header>
        {/* Sidebar */}
        <aside className=" fixed top-16 left-0 h-[calc(100vh-64px)] w-64 z-40 ">
          {/* <SidebarProvider open={isSidebarOpen} className="bg-red-400">
              <AppSidebar />
              <main className="">
                <SidebarTrigger
                  className="text-[#059669]"
                  onClick={() => setSidebar(!isSidebarOpen)}
                ></SidebarTrigger>
              </main>
            </SidebarProvider> */}
          <GlassSidebar
            isSidebarOpen={isSidebarOpen}
            onClick={() => setSidebar(!isSidebarOpen)}
          />
        </aside>
        {/* Main content */}
        <main
          className={` ml-0 s ${
            isSidebarOpen ? "md:ml-64" : "md:ml-0"
          } ml-0 transition-all duration-300  p-0`}
        >
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/questions" element={<AskQue />}></Route>
            <Route path="/popup" element={<AskPop />}></Route>
            <Route path="/discussion/:id" element={<Discussion />}></Route>
            <Route path="/bookmark" element={<Bookmark />}></Route>
            <Route path="/user" element={<UserPage />}></Route>
            <Route
              path="/notifications"
              element={<NotificationsPage />}
            ></Route>
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
