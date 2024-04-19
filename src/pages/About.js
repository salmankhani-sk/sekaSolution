import React from "react";
import 'animate.css';
import "tailwindcss/tailwind.css";
import { FaLaptopCode } from "react-icons/fa";
import { ReactComponent as MySvg } from '../Assets/services.svg';
import { FaBuildingLock } from "react-icons/fa6";
import myImage from '../Assets/skteam.jfif';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { Fade } from 'react-awesome-reveal';
function Hom(){
    return(
        <>
        <div className="flex flex-col items-center justify-center min-h-screen py-2 ">
            <section className="animate-pulse animate__fadeInUp transform transition duration-600 ease-in-out ">
        <div className="flex flex-col items-center ">
          <div >
            <div><VisibilitySensor>
                    <Fade direction="up">
                        <div>
                            <h2 className="text-2xl md:text-4xl font-bold text-gray-90">
                                More than <span className="text-blue-500">35+</span> years we <br/>provide <span className="text-blue-500">IT Solution</span>
                            </h2>
                            <p className="mt-2 text-gray-600 font-normal">
                            Far far away, behind the word mountains, far from the countries <br/> Vokalia and Consonantia
                            </p>
                        </div>
                    </Fade>
                </VisibilitySensor>

            </div>
          </div>
        </div>
      </section>
        
        </div>
        
        <div className="hidden md:block" >
        <VisibilitySensor>
                    <Fade direction="up">
        <section className="flex items-center justify-center"><div className="mx-20 ">
        <FaLaptopCode  style={{fontSize:'8rem'}} className=""/>
        <h2 className="text-2xl">Web Development</h2>
        <p className="mt-2 text-gray-600 font-normal">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
        </div>
        <div>
            <MySvg style={{width:'400px',height:'400px'}}/>
        </div>
        <div className="mx-20">
            <FaBuildingLock style={{fontSize:'8rem'}}/>
            <h2 className="font-bold text-2xl">Server Security</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
        </div>
        
        </section>
        </Fade></VisibilitySensor>
    </div>
    <div className="lg:hidden">
        <>
                    <>
        <section className="flex flex-col items-center justify-center"><div className="mx-20 flex flex-col justify-center items-center">
        <FaLaptopCode  style={{fontSize:'8rem'}} className=""/>
        <h2 className="text-2xl">Web Development</h2>
        <p className="mt-2 text-gray-600 font-normal">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
        </div>
        <div className="flex flex-col justify-center items-center">
            <MySvg style={{width:'400px',height:'400px'}}/>
        </div>
        <div className="mx-20 flex flex-col justify-center items-center">
            <FaBuildingLock style={{fontSize:'8rem'}}/>
            <h2 className="font-bold text-2xl">Server Security</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
        </div>
        
        </section>
        </></>
    </div>
        
    < div className="flex flex-col justify-center items-center h-screen lg:hidden">
            <div style={{ backgroundImage: `url(${myImage})` }} className="bg-cover bg-center ">

            </div>
            <div className="bg-cover bg-center flex flex-col bg-blue-700">
                <div className="mt-16 mx-10">
                <h1 className='text-4xl font-bold text-white'>Consult us here in<br/> 
                <span className="font-bold text-yellow-500">Seka Solution</span></h1>
                <p className="text-white mt-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                </div>
                <div className="flex flex-wrap">
                    <div className="flex-1">
                        <h3 className="font-bold text-3xl mx-10 text-white">
                            <VisibilitySensor>
                                {({ isVisible }) => (
                                    <CountUp end={isVisible ? 750 : 0} />
                                    )} 
                                </VisibilitySensor>
                        </h3>
                        <h5 className="mx-10  text-white">Projects complete</h5>
                    </div>
                    <div className="flex-1">
                        <h3 className="font-bold text-3xl mx-10  text-white">
                            <VisibilitySensor>
                                {({ isVisible }) => (
                                    <CountUp end={isVisible ? 560 : 0} />
                                    )} 
                                </VisibilitySensor>
                        </h3>
                        <h5 className="mx-10  text-white">Happy Client</h5>
                    </div>
                </div>
                <div className="flex flex-wrap">
                    <div className="flex-1">
                        <h3 className="font-bold text-3xl mx-10   text-white">
                            <VisibilitySensor>
                                {({ isVisible }) => (
                                    <CountUp end={isVisible ? 478 : 0} />
                                    )} 
                                </VisibilitySensor>
                        </h3>
                        <h5 className="mx-10  text-white ">Business Partners</h5>
                    </div>
                    <div  className="flex-1">
                        <h3 className="font-bold text-3xl mx-10  text-white">
                            <VisibilitySensor>
                                {({ isVisible }) => (
                                    <CountUp end={isVisible ? 780 : 0} />
                                    )} 
                                </VisibilitySensor>
                        </h3>
                        <h5 className="mx-10  text-white">IT Consultant</h5>
                    </div>
                </div>


            
            </div>
            
        </div><div className="hidden md:block">
        < div className="flex justify-center items-center h-screen">
            <div style={{ backgroundImage: `url(${myImage})` }} className="bg-cover bg-center h-[500px] w-[500px]">

            </div>
            <div className="bg-cover bg-center h-[500px] w-[500px] bg-blue-700">
                <div className="mt-16 mx-10">
                <h1 className='text-4xl font-bold text-white'>Consult us here in<br/> 
                <span className="font-bold text-yellow-500">Seka Solution</span></h1>
                <p className="text-white mt-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                </div>
                <div className="flex flex-wrap">
                    <div className="flex-1">
                        <h3 className="font-bold text-3xl mx-10 text-white">
                            <VisibilitySensor>
                                {({ isVisible }) => (
                                    <CountUp end={isVisible ? 750 : 0} />
                                    )} 
                                </VisibilitySensor>
                        </h3>
                        <h5 className="mx-10  text-white">Projects complete</h5>
                    </div>
                    <div className="flex-1">
                        <h3 className="font-bold text-3xl mx-10  text-white">
                            <VisibilitySensor>
                                {({ isVisible }) => (
                                    <CountUp end={isVisible ? 560 : 0} />
                                    )} 
                                </VisibilitySensor>
                        </h3>
                        <h5 className="mx-10  text-white">Happy Client</h5>
                    </div>
                </div>
                <div className="flex flex-wrap">
                    <div className="flex-1">
                        <h3 className="font-bold text-3xl mx-10   text-white">
                            <VisibilitySensor>
                                {({ isVisible }) => (
                                    <CountUp end={isVisible ? 478 : 0} />
                                    )} 
                                </VisibilitySensor>
                        </h3>
                        <h5 className="mx-10  text-white ">Business Partners</h5>
                    </div>
                    <div  className="flex-1">
                        <h3 className="font-bold text-3xl mx-10  text-white">
                            <VisibilitySensor>
                                {({ isVisible }) => (
                                    <CountUp end={isVisible ? 780 : 0} />
                                    )} 
                                </VisibilitySensor>
                        </h3>
                        <h5 className="mx-10  text-white">IT Consultant</h5>
                    </div>
                </div>


            
            </div>
            
        </div>
        </div>
        
    </>

    )
}
export default  Hom;