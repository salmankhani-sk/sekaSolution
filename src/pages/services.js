import React from "react";
import { Fade } from 'react-awesome-reveal';
import VisibilitySensor from 'react-visibility-sensor';
import { FaLaptopCode } from "react-icons/fa";
import { TbDeviceAnalytics } from "react-icons/tb";
import { FaBuildingLock } from "react-icons/fa6";
import { MdScreenshotMonitor } from "react-icons/md";


function Services(){
    return(
        <div>
        <div className="flex justify-center items-center h-screen">
            <VisibilitySensor>
                <Fade direction="up">
                    <h1 className="text-5xl font-extrabold">Our Exlusive <span className="text-blue-900">IT Solution </span><br/> Services </h1>
                </Fade>
            </VisibilitySensor>

        </div>
        <div  className=" hidden md:block ">
            <div className=" flex justify-center items-center h-screen mx-24 ">
            
        <VisibilitySensor>
                <Fade direction="left" >
            <div className="bg-blue-700 text-lg text-white w-60 h-56 rounded-xl flex flex-col items-center transition-all duration-500 ease-in-out transform hover:bg-yellow-900 hover:w-80 hover:h-72">
                <FaLaptopCode className="text-5xl"/>
                <h2 className="text-lg font-semibold">Web Development</h2>
                <p>203 Fake St. Mountain View, San Francisco, California ,USA</p>
            </div>
            </Fade></VisibilitySensor>
            
        <VisibilitySensor>
                <Fade direction="left" >
            <div className="bg-blue-700 text-lg text-white w-60 h-56 rounded-xl flex flex-col items-center transition-all duration-500 ease-in-out transform hover:bg-yellow-900 hover:w-80 hover:h-72">
                <TbDeviceAnalytics className="text-5xl"/>
                <h2 className="text-lg font-semibold">Database Analysis</h2>
                <p>A small river named Duden flows by their place and supplies.</p>

            </div></Fade></VisibilitySensor>
        <VisibilitySensor>
                <Fade direction="left" >
            <div className="bg-blue-700 text-lg text-white w-60 h-56 rounded-xl flex flex-col items-center transition-all duration-500 ease-in-out transform hover:bg-yellow-900 hover:w-80 hover:h-72">
                <FaBuildingLock className="text-5xl"/>
                <h2 className="text-lg font-semibold">Server Security</h2>
                <p>A small river named Duden flows by their place and supplies</p>
            </div></Fade></VisibilitySensor>
            <div className="bg-blue-700 text-lg text-white w-60 h-56 rounded-xl flex flex-col items-center transition-all duration-500 ease-in-out transform hover:bg-yellow-900 hover:w-80 hover:h-72">
                <MdScreenshotMonitor className="text-5xl"/>
                <h2 className="text-lg font-semibold">UX/UI Strategy</h2>
                <p>A small river named Duden flows by their place and supplies</p>

            </div></div>
        </div>
        <div  className="flex flex-col justify-center items-center h-screen lg:hidden ">
            
        <VisibilitySensor>
                <Fade direction="up" >
            <div className="bg-blue-700 text-lg text-white rounded-xl flex flex-col items-center transition-all duration-500 ease-in-out transform hover:bg-yellow-900 hover:w-80 hover:h-72">
                <FaLaptopCode className="text-5xl"/>
                <h2 className="text-lg font-semibold">Web Development</h2>
                <p>203 Fake St. Mountain View, San Francisco, California ,USA</p>
            </div>
            </Fade></VisibilitySensor>
            
        <VisibilitySensor>
                <Fade direction="up" >
            <div className="bg-blue-700 text-lg text-white  rounded-xl flex flex-col items-center transition-all duration-500 ease-in-out transform hover:bg-yellow-900 hover:w-80 hover:h-72">
                <TbDeviceAnalytics className="text-5xl"/>
                <h2 className="text-lg font-semibold">Database Analysis</h2>
                <p>A small river named Duden flows by their place and supplies.</p>

            </div></Fade></VisibilitySensor>
        <VisibilitySensor>
                <Fade direction="up" >
            <div className="bg-blue-700 text-lg text-white  rounded-xl flex flex-col items-center transition-all duration-500 ease-in-out transform hover:bg-yellow-900 hover:w-80 hover:h-72">
                <FaBuildingLock className="text-5xl"/>
                <h2 className="text-lg font-semibold">Server Security</h2>
                <p>A small river named Duden flows by their place and supplies</p>
            </div></Fade></VisibilitySensor>
            
            
        </div>
        </div>
    )
}
export default Services;
