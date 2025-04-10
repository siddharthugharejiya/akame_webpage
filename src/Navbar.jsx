import React, { useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

function Navbar() {
    const [bar, setBar] = useState(false);


    return (
        <div className="container m-auto mb-3  ">
            <nav className="flex items-center w-full justify-around px-5 py-4 bg-white shadow-md">

                <div className="logo">
                    <img src="/logo.png" alt="Logo" className="w-24" />
                </div>


                <button className="lg:hidden text-xl" onClick={() => setBar(true)}>
                    <i className="fa-solid fa-bars"></i>
                </button>


                <div
                    className={`fixed top-0 left-0 h-full w-64 max-w-[90%] bg-slate-800 text-white p-5 transition-transform duration-300 z-50 ${bar ? "translate-x-0" : "-translate-x-full"} overflow-hidden`}
                >

                    <button
                        className="absolute top-5 right-5 text-xl"
                        onClick={() => setBar(false)}
                    >
                        ✖
                    </button>

                    <ul className="mt-10 space-y-4">
                        <li><Link to="/" >Home</Link></li>
                        <li>
                            <Menu as="div" className="relative inline-block text-left w-full">
                                <MenuButton className="flex items-center w-full justify-between">
                                    Page
                                    <ChevronDownIcon className="size-5 text-gray-400" />
                                </MenuButton>
                                <MenuItems className="absolute left-0 mt-2 w-56 bg-white text-black shadow-lg rounded-md">
                                    <MenuItem>
                                        <a href="#" className={`block px-4 py-2  "bg-gray-200"`}>
                                            Account settings
                                        </a>

                                    </MenuItem>
                                    <MenuItem>
                                        <a href="#" className={`block px-4 py-2 "bg-gray-200"`}>
                                            Support
                                        </a>

                                    </MenuItem>
                                </MenuItems>
                            </Menu>
                        </li>
                        <li><Link to="/portfolio" >Portfolio</Link></li>
                        <li><Link to="/service" >Service</Link></li>
                        <li><Link to="/about" >About Us</Link></li>
                        <li><Link to="/blog" >Blog</Link></li>
                        <li><Link to="/contact" >Contact</Link></li>
                    </ul>
                </div>


                <ul className="hidden lg:flex lg:space-x-6">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                    <li><Link to="/service">Service</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
