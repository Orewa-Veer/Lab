import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { AppSidebar } from "./components/app-sidebar";
import HomePage from "./Mainpage/Home";
import Navbar from "./Mainpage/Navbar";
import AskPop from "./Pages/AskPop";
import AskQue from "./Pages/AskQue";
function App() {
  const [isSidebarOpen, setSidebar] = useState(true);

  useEffect(() => {
    const isSmallScreen = window.innerWidth < 768; // Tailwind `md` breakpoint
    setSidebar(!isSmallScreen);
  }, []);
  return (
    <>
      <div className="min-h-screen">
        {/* Navbar */}
        <header className="fixed z-50 top-0 h-16 w-full flex items-center px-4 shadow bg-white">
          <Navbar />
        </header>

        {/* Sidebar */}
        <aside className=" fixed top-16 left-0 h-[calc(100vh-64px)] w-64 z-40">
          <SidebarProvider open={isSidebarOpen}>
            <AppSidebar />
            <main>
              <SidebarTrigger
                className="text-[#059669]"
                onClick={() => setSidebar(!isSidebarOpen)}
              ></SidebarTrigger>
            </main>
          </SidebarProvider>
        </aside>

        {/* Main content */}
        <main
          className={` ml-0 ${
            isSidebarOpen ? "md:ml-64" : "md:ml-0"
          } ml-0 transition-all duration-300 mt-16 p-0`}
        >
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/questions" element={<AskQue />}></Route>
            <Route path="/popup" element={<AskPop />}></Route>
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
