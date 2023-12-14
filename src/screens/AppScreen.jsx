import React from "react";
import Sidebar from "../components/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShareRouter from "../utils/ShareRouter";

function AppScreen() {
  return (
    <div className=" w-full h-screen bg-[#343541] flex text-white">
      <Sidebar />
      <div>
        <BrowserRouter basename="/c">
          <Routes>
            <Route path="/" element={<h1>Hello</h1>} />
            <Route path="/id" element={<h1>hi everyone</h1>} />
          </Routes>
        </BrowserRouter>




        {/* Assignment */}
        <ShareRouter />

        {/* Multiple pages go hhere */}
      </div>
    </div>
  );
}

export default AppScreen;
