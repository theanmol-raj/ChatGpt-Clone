import React from 'react'

function LoginScreen() {
  return (
    <div className=' w-full flex h-screen bg-black'>
        <div className=' w-2/3 bg-[#00002e] relative'>
            <p className=' text-[#d292ff] flex text-xl absolute top-4 left-6 items-center font-semibold'>ChatGPT <div className=' h-5 rounded-full w-5 bg-[#d292ff]' /></p>


        </div>
        <div className=' flex-grow flex flex-col'>
            <div className=' flex-grow flex justify-center items-center'>
                    <div className=' flex flex-col max-w-max'>
                        <p className=' font-bold text-center text-3xl  text-white pb-2'>Get Started</p>
                        <div className=' flex  space-x-4 mt-2'>
                            <button className='bg-[#3c46ff] hover:bg-[#3c3cff] cursor-pointer py-3 px-16 rounded-md text-white '>Log in</button>
                            <button className='bg-[#3c46ff] hover:bg-[#3c3fff] cursor-pointer py-3 px-16 rounded-md text-white '>Sign up</button>
                        </div>

                    </div>
            </div>
            <div className='flex flex-col justify-center items-center py-8 '>
                <div className=' flex'>
                <img width="28" height="28" src="https://img.icons8.com/color/48/chatgpt.png" alt="chatgpt"/>
                <p className=' font-medium text-lg text-gray-500'>OpenAI</p>
                </div>
                <div className='text-gray-600 text-sm tracking-tight underline flex space-x-2'>
                    <p>Terms or use</p>
                    <p> | </p>
                    <p>Privacy Policy</p>
                </div>
                
            </div>

        </div>

    </div>
  )
}

export default LoginScreen