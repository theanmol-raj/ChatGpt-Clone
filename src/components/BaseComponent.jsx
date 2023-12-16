import React from "react";

function BaseComponent() {
  return (
    <div className="flex flex-col max-w-3xl w-full mx-auto h-full  items-center">
      <div className="flex-grow flex items-center  h-full">
        <div className=" bg-white  rounded-full p-2 max-w-max ">
          <img
            width="70"
            height="70"
            src="https://img.icons8.com/material-sharp/100/chatgpt.png"
            alt="chatgpt"
            className=" "
          />
        </div>
      </div>

      <div className=" grid grid-cols-2 grid-rows-2 w-full max-w-4xl mx-auto gap-4 mb-4">
        <div className="border-gray-300/50 hover:bg-black/50 cursor-pointer border p-4 rounded-lg text-xs">
          <p className="text-sm">Tell Me a fun Fact </p>
          <p className="text-white/40">About Roman Empire</p>
        </div>
        <div className="border-gray-300/50 hover:bg-black/50 cursor-pointer border p-4 rounded-lg text-xs">
          <p className="text-sm">Tell Me a fun Fact </p>
          <p className="text-white/40">About Roman Empire</p>
        </div>
        <div className="border-gray-300/50 hover:bg-black/50 cursor-pointer border p-4 rounded-lg text-xs">
          <p className="text-sm">Tell Me a fun Fact </p>
          <p className="text-white/40">About Roman Empire</p>
        </div>
        <div className="border-gray-300/50 hover:bg-black/50 cursor-pointer border p-4 rounded-lg text-xs">
          <p className="text-sm">Tell Me a fun Fact </p>
          <p className="text-white/40">About Roman Empire</p>
        </div>

      </div>
    </div>
  );
}

export default BaseComponent;
