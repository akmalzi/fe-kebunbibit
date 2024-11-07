import { useState } from 'react';

function NavbarResponsive(){
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">My Website</h1>
                
                {/* Hamburger menu icon for mobile */}
                <button 
                    className="md:hidden text-white focus:outline-none"
                    onClick={toggleSidebar}
                >
                    <svg 
                        className="w-6 h-6" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6">
                    <a href="#" className="hover:text-gray-300">Home</a>
                    <a href="#" className="hover:text-gray-300">About</a>
                    <a href="#" className="hover:text-gray-300">Services</a>
                    <a href="#" className="hover:text-gray-300">Contact</a>
                </div>
            </div>

            {/* Mobile Sidebar */}
            <div 
                className={`md:hidden fixed inset-y-0 left-0 w-64 bg-gray-800 text-white transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out`}
            >
                <div className="p-4 flex justify-between items-center">
                    <h2 className="text-xl font-bold">Menu</h2>
                    <button 
                        className="text-white focus:outline-none"
                        onClick={toggleSidebar}
                    >
                        <svg 
                            className="w-6 h-6" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24" 
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className="flex flex-col space-y-4 p-4">
                    <a href="#" className="hover:text-gray-300">Home</a>
                    <a href="#" className="hover:text-gray-300">About</a>
                    <a href="#" className="hover:text-gray-300">Services</a>
                    <a href="#" className="hover:text-gray-300">Contact</a>
                </div>
            </div>
        </nav>
    );
};

export default NavbarResponsive;
