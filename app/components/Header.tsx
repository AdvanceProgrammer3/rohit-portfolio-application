'use client'
import { useState } from "react";
import { Bars3Icon } from '@heroicons/react/24/solid'

const Header = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-[#e67e22] p-4  ">
            <div className=" flex items-center justify-between lg:flex-col lg:space-y-4">
                <div>
                    <p className="text-gray-300 text-xl font-bold">Rohit Patel Portfolio</p>

                </div>

                <div className="lg:hidden">
                    <button onClick={toggleMenu}>
                        <Bars3Icon className="h-8 w-8 text-gray-300" />
                    </button>
                </div>

                {/*full Screen*/}

                <div className="hidden lg:inline-block space-x-4">
                    <button className="menuIcon">Home</button>
                    <button className="menuIcon">Resume</button>
                    <button className="menuIcon">Porfolio</button>
                    <button className="menuIcon">Skills</button>
                    <button className="menuIcon">Testimonials</button>
                    <button className="menuIcon">Articles</button>
                    <button className="menuIcon">Contact Me</button>
                    <button className="menuIcon">Interactive Features</button>
                    <button className="menuIcon">Case Study</button>
                    <button className="menuIcon">Profession Affiliation</button>
                    <button className="menuIcon">Freelance Project</button>
                    <button className="menuIcon">Achievement</button>
                    <button className="menuIcon">Interactive Resume</button>
                    <button className="menuIcon">Video Introduction</button>
                </div>

                {/* Slider for small screens */}
                <div
                    className={`fixed inset-0 z-50 bg-[#e67e22] lg:hidden transform ${
                        isMenuOpen ? "translate-x-0" : "-translate-x-full"
                    } transition-transform duration-300 ease-in-out`}
                >
                    <nav className="flex flex-col items-center justify-center h-screen">
                        <a href="#" className="text-white mb-4">Home</a>
                        <a href="#" className="text-white mb-4">About</a>
                        <button onClick={toggleMenu}>Close</button>
                        {/* Add more menu items as needed */}
                    </nav>
                </div>
            </div>


        </header>
    );
};

export default Header;
