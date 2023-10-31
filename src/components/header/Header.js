'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import "./header.css"

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const logo = {
        image: '/images/logo.png'
    }
    return (
        <div className='header-main'>
            <div className="container mx-auto px-4">

                <nav className="bg-transparent border-gray-200">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                        <a href="/" className="flex items-center">
                            <Image src={logo.image} className="h-20 mr-3" alt="Logo" width={100} height={100} /> </a>
                        <button onClick={() => setIsOpen(!isOpen)} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                        <div className={`w-full md:block md:w-auto ${isOpen ? 'block' : 'hidden'}`} id="navbar-default">
                            <ul className="nav-list font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent">
                                <li>
                                    <a href="#" className="block py-2 pl-3 pr-4 sm:text-black lg:text-white bg-amber-200 rounded md:bg-transparent md:text-white md:p-0 dark:text-dark md:dark:text-amber-200" aria-current="page">Home</a>
                                </li>
                                <li>
                                    <a href="#hair-trends" className="block py-2 pl-3 pr-4 sm:text-black lg:text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-amber-200 md:p-0 md:dark:hover:text-amber-200 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Hair Trends</a>
                                </li>
                                <li>
                                    <a href="#inside-etx" className="block py-2 pl-3 pr-4 sm:text-black lg:text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-amber-200 md:p-0 md:dark:hover:text-amber-200 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Inside ETX</a>
                                </li>
                                <li>
                                    <a href="#crew" className="block py-2 pl-3 pr-4 sm:text-black lg:text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-amber-200 md:p-0 md:dark:hover:text-amber-200 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Crew</a>
                                </li>
                                <li>
                                    <a href="#class" className="block py-2 pl-3 pr-4 sm:text-black lg:text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-amber-200 md:p-0 md:dark:hover:text-amber-200 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Class</a>
                                </li>
                                <li>
                                    <a href="#consultation" className="block py-2 pl-3 pr-4 sm:text-black lg:text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-amber-200 md:p-0 md:dark:hover:text-amber-200 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">For Consultation</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </div>
        </div>
    );
}

export default Header;
