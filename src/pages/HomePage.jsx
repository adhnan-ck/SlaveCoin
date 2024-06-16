import React from 'react'
import MineImage from '../components/MineImage';
import { GiSlaveryWhip } from "react-icons/gi";
import { RiInstagramFill, RiYoutubeFill } from "react-icons/ri";


function HomePage() {

  return (
    <>
        <div className="h-full">
      
      <div className="w-full container mx-auto">
        <div className="w-full flex items-center justify-between">
          <a className="flex items-center text-sky-500 no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="#">
           <GiSlaveryWhip />
            Slave <span className="bg-clip-text text-transparent bg-gradient-to-r from-stone-500 via-stone-400 to-stone-300">Coin</span>
          </a>

          <div className="flex w-1/2 justify-end content-center">
            <a className="inline-block text-blue-300 no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out" href="https://www.instagram.com/adhnan_ck/">
              <RiInstagramFill />
            </a>
            <a
              className="inline-block text-blue-300 no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out"
              href="https://youtube.com/@adhnanck6209?si=xM92G2Oc5cZwNzFi"
            >
             <RiYoutubeFill />
            </a>
          </div>

        </div>
      </div>
       
       <MineImage />
       
       
      <div className="container pt-24 md:pt-36 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        
        

        
        <div className="w-full pt-16 pb-6 text-sm text-center md:text-left fade-in">
          <a className="text-gray-500 no-underline hover:no-underline" href="#">&copy; </a>
  
          <a className="text-gray-500 no-underline hover:no-underline" href="https://github.com/adhnan-ck">Adhnan_ck</a>
        </div>
      </div>
    </div>
    </>
  )
}

export default HomePage