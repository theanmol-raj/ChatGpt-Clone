import React from "react";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import ChatSetter from "./ChatSetter";

function Sidebar() {
  return (
    <div className=" h-screen w-64 bg-black p-4 px-2 flex flex-col">
      <button className="text-white flex items-center justify-between w-full p-2 rounded-md hover:bg-[#515151]">
        <div className=" flex space-x-2 items-center">
          <div className=" bg-white rounded-full p-1">
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/material-sharp/24/chatgpt.png"
              alt="chatgpt"
            />
          </div>
          <p className=" text-sm">New Chat</p>
        </div>
        <div className=" text-xl -mt-1">
          <AddOutlinedIcon fontSize="inherit" />
        </div>
      </button>

      <div className=" flex-grow overflow-y-scroll py-1 relative">
        
        <ChatSetter />
        
      </div>

      <div className="relative">
      <div className=" bg-gradient-to-t from-black absolute -top-10 h-10 w-full" />
        <button className="text-white flex items-center justify-between w-full p-2 rounded-md hover:bg-[#2d2d2d]">
          <div className=" flex space-x-2 items-center">
            <div className=" bg-black rounded-full px-2 py-1 aspect-square">
              <AutoAwesomeIcon fontSize="inherit" />
            </div>
            <div>
              <p className=" text-sm text-left font-bold">Upgrade Plan</p>
              <p className=" text-xs text-left text-gray-300 ">
                Get GPT-4, DALL.E , and more
              </p>
            </div>
          </div>
        </button>
        <button className="text-white flex items-center justify-between w-full p-2 rounded-md hover:bg-[#2d2d2d]">
          <div className=" flex space-x-2 items-center">
          <div className=" bg-white rounded-full p-1">
            <img
              width="20"
              height="20"
              src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
              alt="ProfilePic"
            />
          </div>
            <p className=" text-sm text-left font-bold">User's Name</p>
          </div>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
