import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-evenly">
                    {/* About Section */}
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h2 className="text-xl font-bold mb-2">About Us</h2>
                        <p className="text-gray-400">
                            At SunDrop Travel, we make your dream vacations come true. Whether you need to book a flight, find the perfect place to stay, or rent a car to explore your destination, we've got you covered.
                        </p>
                        {/* <a href="/about" className="underline-effect text-blue-400 hover:text-blue-500">Learn more</a> */}
                    </div>

                    {/* Contact Information */}
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h2 className="text-xl font-bold mb-2">Contact Us</h2>
                        <p className="text-gray-400"><i className="fa-solid fa-envelope"></i> Email: Travelsupport@gamil.com</p>
                        <p className="text-gray-400"><i className="fa-solid fa-phone"></i> Phone: +1 (234) 567-8901</p>
                        <p className="text-gray-400"><i classname="fa-solid fa-location-dot"></i> Address: 123 Travel Street, Wanderlust City, Country</p>
                        <p className='text-gray-400'><i className="fa-regular fa-clock"></i> Open every day: 8AM-5PM</p>
                    </div>
                    
                    <div className="flex flex-wrap justify-between items-center">
                        {/* Social Media Links */}
                        <div className="flex space-x-4 flex-col">
                            <h2 className='text-xl font-bold mb-2'>Social Links</h2>
                            <a href="https://facebook.com" className="flex items-center space-x-2 group">
                                <i className="fab fa-facebook-f text-gray-400 group-hover:text-blue-600 transition-colors duration-300"></i>
                                <span className="text-gray-400 underline-effect group-hover:text-white transition-colors duration-300">Facebook</span>
                            </a>
                            <a href="https://instagram.com" className="flex items-center space-x-2 group">
                                <i className="fab fa-instagram text-gray-400 group-hover:text-red-500 transition-colors duration-300"></i>
                                <span className="text-gray-400 underline-effect group-hover:text-white transition-colors duration-300">Instagram</span>
                            </a>
                            <a href="https://twitter.com" className="flex items-center space-x-2 group">
                                <i className="fab fa-twitter text-gray-400 group-hover:text-blue-500 transition-colors duration-300"></i>
                                <span className="text-gray-400 underline-effect group-hover:text-white transition-colors duration-300">Twitter</span>
                            </a>
                            <a href="https://youtube.com" className="flex items-center space-x-2 group">
                                <i className="fab fa-youtube text-gray-400 group-hover:text-red-600 transition-colors duration-300"></i>
                                <span className="text-gray-400 group-hover:text-white underline-effect transition-colors duration-300">YouTube</span>
                            </a>
                        </div>
                    </div>
                </div>


                {/* Legal Links */}
                <div className="mt-8 text-center text-gray-400">
                    <p>&copy; 2024 SunDrop Travel Agency. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
