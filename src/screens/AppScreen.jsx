import React from "react";
import Sidebar from "../components/Sidebar";import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import ChatComponent from "../components/ChatComponent";
import BaseComponent from "../components/BaseComponent";
import IosShareIcon from '@mui/icons-material/IosShare';


function AppScreen() {

  const { chatID} = useParams()

  console.log(chatID)


  
  return (
    <div className=" w-full h-screen  bg-[#343541] flex text-white">
      <Sidebar />
      <div className=" flex flex-col h-screen w-full py-4 md:py-6 ">
        <div className="flex-grow overflow-y-scroll scrollbar-hide ">
        {chatID ? <ChatComponent /> : <BaseComponent/>}
        </div>
        <div className=" h-6" />
        <div className="max-w-3xl relative space-x-4 flex   items-center p-3 mx-auto w-full border-gray-300/50 border rounded-lg">
          <input className="bg-[#343541] w-full    rounded-lg " placeholder="Message ChatGPT..." />
          <button  className=" border hover:bg-lime-500 -mt-1 hover:text-white border-gray-300/50 p-1 rounded-lg text-gray-300/50 "><IosShareIcon   /></button>
        </div>
        <p className=" text-xs text-center pt-1 text-white/40">ChatGPT can make mistakes. Consider checking important information.</p>

      </div>
    </div>
  );
}

export default AppScreen;
