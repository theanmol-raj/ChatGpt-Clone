import React, { useState } from "react";

function SignInFlow() {

    const signin = true ;
    const [flow ,setFlow] = useState(signin)


  return (
    <div className=" w-full h-screen flex justify-center">
      <div className=" h-full flex flex-col items-center  justify-between py-10 ">
        <img
          width="48"
          height="48"
          src="https://img.icons8.com/color/48/chatgpt.png"
          alt="chatgpt"
        />
        <div className=" flex flex-col space-y-4 items-center w-[350px]">
          <h1 className=" text-3xl font-medium ">{flow ? 'Welcome Back' : 'Create your account'}</h1>
          <input
            className=" border-gray-500 rounded-md border w-full py-3 px-3"
            placeholder="Email Address"
          />
          <input
            className={` border-gray-500 rounded-md  border w-full py-3 px-3 `}
            placeholder="Password"
          />
          <button className=" text-white bg-[#10a37f] w-full py-3 text-lg rounded-md">
            Continue
          </button>
          <div className=" flex items-center text-sm space-x-1 pb-8">
            <p>{ flow ? "Don't have an account?" : 'Already have an account?'}</p>
            <button onClick={()=>setFlow(!flow)} className=" text-[#10a37f]">{flow ? 'Sign Up' : 'Log in'}</button>
          </div>
          <div className=" w-full relative ">
            <div className=" border-t h-[1px] flex-grow w-full bg-gray-500" />
            <p className=" absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-4">
              OR
            </p>
          </div>
          <div className="w-full space-y-2 pt-8">
            <div className=" flex items-center space-x-2 w-full border py-3 px-4 rounded-md">
              <img
                width="26"
                height="26"
                src="https://img.icons8.com/fluency/48/google-logo.png"
                alt="google-logo"
              />
              <p className=" text-sm">Continue With Google</p>
            </div>
            <div className=" flex items-center space-x-2 w-full border py-3 px-4 rounded-md">
              <img
                width="26"
                height="26"
                src="https://img.icons8.com/color/48/microsoft.png"
                alt="microsoft-logo"
              />
              <p className=" text-sm">Continue With Microsoft Account</p>
            </div>
            <div className=" flex items-center space-x-2 w-full border py-3 px-4 rounded-md">
              <img
                width="26"
                height="26"
                src="https://img.icons8.com/ios-filled/50/mac-os.png"
                alt="Apple-logo"
              />
              <p className=" text-sm">Continue With Apple</p>
            </div>
          </div>
        </div>

        <div className="text-[#10a37f] text-sm tracking-tight underline flex space-x-2">
          <p>Terms or use</p>
          <p> | </p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
}

export default SignInFlow;
