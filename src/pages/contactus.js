import React from 'react';
import { SlLocationPin } from "react-icons/sl";
import { MdCall } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";

function ContactUs() {
    return (
        <div>
            <div className='bg-gradient-to-b from-blue-100 to-pink-200 flex flex-col  items-center justify-center'>
                <div className='hidden md:block '>
                    <div className='flex items-center justify-center'>

                    <div className='flex flex-col items-center justify-center mx-12 '>
                        
                        <div>
                            <a href="https://www.google.com/maps/@33.7721744,73.1371154,12.17z?entry=ttu" target="_blank" rel='noopener noreferrer'>
                             <SlLocationPin className='text-2xl font-bold transition-all duration-500 ease-in-out transform hover:text-gray-500 hover:w-16 hover:h-16'/></a> </div>
                            <h2>Address : <span>Islamabad Pakistan</span> </h2>
                    
                    </div>
                    <div className='flex flex-col items-center justify-center mx-12'>
                        <div> <a href='https://wa.me/923175566089' target='_blank' rel='noopener noreferrer'> <MdCall className='text-2xl font-bold transition-all duration-500 ease-in-out transform hover:text-green-500 hover:w-16 hover:h-16'/></a> </div>
                            <h2>+923175566089</h2>


                    </div>
                <div className='flex flex-col items-center justify-center mx-12 '>
                        <div> <a href='https://www.instagram.com/salmankhani_sk/' target='_blank' rel='noopener noreferrer'> <FaInstagram className='text-2xl font-bold transition-all duration-500 ease-in-out transform hover:text-pink-500 hover:w-16 hover:h-16'/> </a> </div>
                            <h2>Salmankhani_sk</h2>

                </div>
                </div>
            </div>
            <div className='flex flex-col items-center justify-center lg:hidden  '>

                    <div className='flex flex-col items-center justify-center mx-12 '>
                        
                        <div>
                            <a href="https://www.google.com/maps/@33.7721744,73.1371154,12.17z?entry=ttu" target="_blank" rel='noopener noreferrer'>
                             <SlLocationPin className='text-2xl font-bold transition-all duration-500 ease-in-out transform hover:text-gray-500 hover:w-16 hover:h-16'/></a> </div>
                            <h2>Address : <span>Islamabad Pakistan</span> </h2>
                    
                    </div>
                    <div className='flex flex-col items-center justify-center mx-12'>
                        <div> <a href='https://wa.me/923175566089' target='_blank' rel='noopener noreferrer'> <MdCall className='text-2xl font-bold transition-all duration-500 ease-in-out transform hover:text-green-500 hover:w-16 hover:h-16'/></a> </div>
                            <h2>+923175566089</h2>


                    </div>
                <div className='flex flex-col items-center justify-center mx-12 '>
                        <div> <a href='https://www.instagram.com/salmankhani_sk/' target='_blank' rel='noopener noreferrer'> <FaInstagram className='text-2xl font-bold transition-all duration-500 ease-in-out transform hover:text-pink-500 hover:w-16 hover:h-16'/> </a> </div>
                            <h2>Salmankhani_sk</h2>

                </div>
            </div>
            <div className="flex items-center justify-center h-screen">
                <div className="bg-white p-8 rounded shadow-md w-80">
                    <h2 className="text-2xl font-bold mb-8 text-center">Contact Us</h2>
                    <form>
                        <input className="mb-4 w-full px-3 py-2 border border-gray-300 rounded-md" type="text" placeholder="Name" required />
                        <input className="mb-4 w-full px-3 py-2 border border-gray-300 rounded-md" type="email" placeholder="Email" required />
                        <input className="mb-4 w-full px-3 py-2 border border-gray-300 rounded-md" type="text" placeholder="Subject" required />
                        <textarea className="mb-4 w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="Message" required />
                        <button className="w-full py-2 px-4 bg-blue-600 text-white rounded-md" type="submit">Send Message</button>
                    </form>
                </div>
            </div>
            </div>
        </div>
    );
}

export default ContactUs;
