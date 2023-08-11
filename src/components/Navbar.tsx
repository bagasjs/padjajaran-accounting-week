import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
    const menuHiddenStyle = "hidden";
    const menuShownStyle = "block md:z-0 md:static absolute z-50 right-0 top-20"
    const [ showMenu, setShowMenu ] = useState(false);

    return (
        <nav className="fixed z-50 top-0 left-0 w-full">
            <div className="flex relative w-full py-3 px-3 md:px-12 items-center justify-between">
                <Link to="/" id="brand">
                    <img src={logo} alt="Logo PAW" className="h-28"/>
                </Link>
                <div className="flex md:order-2">
                    <Link to="/events" className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">
                        <span className="font-extrabold">Register</span>
                    </Link>
                    <button data-collapse-toggle="navbar-menu-items" type="button" className="inline-flex relative items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-menu-item" aria-expanded="false" onClick={() => setShowMenu(!showMenu)}>
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                </div>
                <div className={`items justify-between ${showMenu ? menuShownStyle : menuHiddenStyle} w-full md:flex md:w-auto md:order-1`} id="navbar-menu-items" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
                    <ul className="flex flex-col font-poppins font-bold p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent">
                        <li className="block py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="block py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">
                            <Link to="/about">About Us</Link>
                        </li>
                        <li className="block py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">
                            <Link to="/events">Our Events</Link>
                        </li>
                        <li className="block py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">
                            <Link to="/contact">Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
