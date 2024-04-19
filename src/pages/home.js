import React from "react";
import 'animate.css';
import About from './About';
import Services from "./services";
import ContactUs from "./contactus";
import Footer from "./footer";
import { MdOutlineElectricBolt } from "react-icons/md"; 
import { TbBulb } from "react-icons/tb";
import { SiCyberdefenders } from "react-icons/si";
import bg from "../Assets/work-4.jpg";
function Home(){
    return (
      <div>
        <div className="h-screen hero-wrap-2 bg-cover bg-center flex justify-center items-center animate__fadeInUp" 
        style={{
            backgroundImage: `url(${bg})`,
            height: '598px',
            backgroundPosition: '50% 0px'
        }}
        data-stellar-background-ratio="0.5"
   >
   
   
            <div className="overlay">  </div>
            <div className="container">
            <div className="flex h-screen items-center" data-scrollax-parent="true" style={{height: '598px'}}>
                <div className="col-span-8 animate-fadeInUp mt-5 pt-5" data-scrollax=" properties: { translateY: '70%' }"
                 style={{transform: 'translateZ(0px) translateY(0%)'}}>
                    <div className="flex">
                        <div className="col-span-7 px-14">
                            <p className="mb-4 pl-5 line  text-white font-bold text-xl" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }" style={{opacity: 1, transform: 'translateZ(0px) translateY(0%)'}}>
                                A small river named Duden flows by their place and supplies
                            </p>
                        </div>
                    </div>
                    <h1 className="mb-4 font-extrabold text-5xl text-white px-20" style={{opacity: 1, transform: 'translateZ(0px) translateY(0%)'}}>
                Experienced for <br/>Every Kinds of ITSolution
            </h1>
            <p className="px-20">
                <button href="https://preview.colorlib.com/theme/itsolution/index.html#" 
                className="btn btn-primary px-10 py-4 w-30 bg-blue-900 text-white font-bold  hover:bg-blue-800 transition-colors duration-200 ease-in-out">
                  
                      Read more 
                </button>
            </p>
                </div>
            </div>
        </div>
        <div className="container mx-auto">
      <section className="intro hidden md:block">
        <div className="flex justify-end">
          <div className="">
            <div className="grid grid-cols-3 gap-4 items-stretch mx-5">
              <div className="animate__fadeInUp animate__animated">
                <div className="services-1">
                  <div className="line"></div>
                  <div className="icon"><span className="flaticon-bolt"></span></div>
                  <div className="media-body cursor-default bg-blue-900 w-50 h-60 border-2 border-transparent items-center flex flex-col justify-center text-white hover:text-yellow-500 hover:border-yellow-500 transition-colors duration-200 ease-in-out">
                    <MdOutlineElectricBolt 
                    className=" font-bold items-center text-5xl "/>
                        <h3 className="heading mb-3 font-bold mx-6 my-6 text-2xl">
                          Information Technology Consultancy</h3>
                  </div>

                </div>
              </div>
              <div className="animate__fadeInUp animate__animated">
                <div className="services-1 color-1">
                  <div className="line"></div>
                  <div className="icon"><span className="flaticon-light-bulb"></span></div>
                  <div className="media-body cursor-default bg-blue-900 w-50 h-60 border-2 border-transparent items-center flex flex-col justify-center text-white hover:text-yellow-500 hover:border-yellow-500 transition-colors duration-200 ease-in-out">
                    <TbBulb  
                    className=" font-bold items-center text-5xl "/>
                        <h3 className="heading mb-3 font-bold mx-6 my-6 text-2xl">
                        Product Design Strategy</h3>
                  </div>
                </div>
              </div>
              <div className="animate__fadeInUp animate__animated">
                <div className="services-1 color-2">
                  <div className="line"></div>
                  <div className="icon"><span className="flaticon-cyber"></span></div>
                  <div className="media-body cursor-default bg-blue-900 w-50 h-60 border-2 border-transparent items-center flex flex-col justify-center text-white hover:text-yellow-500 hover:border-yellow-500 transition-colors duration-200 ease-in-out">
                    <SiCyberdefenders 
                    className=" font-bold items-center text-5xl "/>
                        <h3 className="heading mb-3 font-bold mx-6 my-6 text-2xl">
                        Cyber Security &amp; Web Development</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
     
    </div>
    
        </div>
        <div className="container mx-auto md:hidden">
      <section className="intro ">
        <div className="flex flex-col">
          <div className="">
            <div className="grid grid-col gap-4 items-stretch mx-5">
              <div className="animate__fadeInUp animate__animated flex flex-col">
                <div className="services-1">
                  <div className="line"></div>
                  <div className="icon"><span className="flaticon-bolt"></span></div>
                  <div className="media-body cursor-default bg-blue-900 w-50 h-60 border-2 border-transparent items-center flex flex-col justify-center text-white hover:text-yellow-500 hover:border-yellow-500 transition-colors duration-200 ease-in-out">
                    <MdOutlineElectricBolt 
                    className=" font-bold items-center text-5xl "/>
                        <h3 className="heading mb-3 font-bold mx-6 my-6 text-2xl">
                          Information Technology Consultancy</h3>
                  </div>

                </div>
              </div>
              <div className="animate__fadeInUp animate__animated">
                <div className="services-1 color-1">
                  <div className="line"></div>
                  <div className="icon"><span className="flaticon-light-bulb"></span></div>
                  <div className="media-body cursor-default bg-blue-900 w-50 h-60 border-2 border-transparent items-center flex flex-col justify-center text-white hover:text-yellow-500 hover:border-yellow-500 transition-colors duration-200 ease-in-out">
                    <TbBulb  
                    className=" font-bold items-center text-5xl "/>
                        <h3 className="heading mb-3 font-bold mx-6 my-6 text-2xl">
                        Product Design Strategy</h3>
                  </div>
                </div>
              </div>
              <div className="animate__fadeInUp animate__animated">
                <div className="services-1 color-2">
                  <div className="line"></div>
                  <div className="icon"><span className="flaticon-cyber"></span></div>
                  <div className="media-body cursor-default bg-blue-900 w-50 h-60 border-2 border-transparent items-center flex flex-col justify-center text-white hover:text-yellow-500 hover:border-yellow-500 transition-colors duration-200 ease-in-out">
                    <SiCyberdefenders 
                    className=" font-bold items-center text-5xl "/>
                        <h3 className="heading mb-3 font-bold mx-6 my-6 text-2xl">
                        Cyber Security &amp; Web Development</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
     
    </div>
        <About/>
        <Services/>
        <ContactUs/>
        <Footer/>
        </div>
    );
}
export default Home;