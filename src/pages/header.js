import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMdMenu } from "react-icons/io";
import { RiCloseLine } from "react-icons/ri";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className='flex flex-wrap items-center justify-between p-6 mr-20 ml-20 mt-8 sticky top-0 z-50 bg-white'>
            <div className='flex items-center text-black font-bold text-4xl hover:cursor-pointer'>
                <div className='text-blue-800 font-bold hover:text-yellow-600'>
                    <Link to='/'>Seka</Link>
                </div>
                <div>Solution</div>
            </div>
            <button className='lg:hidden' onClick={toggleMenu}>
                {isMenuOpen ? (
                    <RiCloseLine className="text-2xl transition-all duration-500 ease-in-out transform" />
                ) : (
                    <IoMdMenu className="text-2xl transition-all duration-500 ease-in-out transform" />
                )}
            </button>
            <div className={`w-full block flex-grow lg:hidden lg:w-auto ${isMenuOpen ? 'block' : 'hidden'}`}>
                <div className="text-sm lg:flex-grow">
                    <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 text-black active:bg-blue-100 active:rounded-lg focus:text-blue-500">Home</Link>
                    <Link to="/about" className="block mt-4 lg:inline-block lg:mt-0 text-black active:bg-blue-100 active:rounded-lg focus:text-blue-500">About</Link>
                    <Link to="/services" className="block mt-4 lg:inline-block lg:mt-0 text-black active:bg-blue-100 active:rounded-lg focus:text-blue-500">Services</Link>
                    <Link to="/signin" className="block mt-4 lg:inline-block lg:mt-0 text-black active:bg-blue-100 active:rounded-lg focus:text-blue-500">Sign In</Link>
                    <Link to="/signup" className="block mt-4 lg:inline-block lg:mt-0 text-black active:bg-blue-100 active:rounded-lg focus:text-blue-500">Sign Up</Link>
                    <Link to="/blog" className="block mt-4 lg:inline-block lg:mt-0 text-black active:bg-blue-100 active:rounded-lg focus:text-blue-500">Contact Us</Link>
                </div>
            </div>
            <div className="hidden lg:block space-x-4">
                <Link to="/" className="text-black active:bg-blue-100 active:rounded-lg focus:text-blue-500 transition-all duration-500 ease-in-out transform hover:text-2xl hover:bg-slate-200 rounded-2xl hover:font-bold">Home</Link>
                <Link to="/about" className="text-black active:bg-blue-100 active:rounded-lg focus:text-blue-500 transition-all duration-500 ease-in-out transform hover:text-2xl hover:bg-slate-200 rounded-2xl hover:font-bold">About</Link>
                <Link to="/services" className="text-black active:bg-blue-100 active:rounded-lg focus:text-blue-500 transition-all duration-500 ease-in-out transform hover:text-2xl hover:bg-slate-200 rounded-2xl hover:font-bold">Services</Link>
                <Link to="/signin" className="text-black active:bg-blue-100 active:rounded-lg focus:text-blue-500 transition-all duration-500 ease-in-out transform hover:text-2xl hover:bg-slate-200 rounded-2xl hover:font-bold">Sign In</Link>
                <Link to="/signup" className="text-black active:bg-blue-100 active:rounded-lg focus:text-blue-500 transition-all duration-500 ease-in-out transform hover:text-2xl hover:bg-slate-200 rounded-2xl hover:font-bold">Sign Up</Link>
                <Link to="/blog" className="text-black active:bg-blue-100 active:rounded-lg focus:text-blue-500 transition-all duration-500 ease-in-out transform hover:text-2xl hover:bg-slate-200 rounded-2xl hover:font-bold">Contact Us</Link>
            </div>
        </nav>
    );
}

export default Navbar;
