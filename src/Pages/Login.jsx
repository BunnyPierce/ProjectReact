import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../Comp/Header';
import Footer from '../Comp/Footer';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // Logic for handling login (e.g., API call) goes here
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div>
            <Header bg={"bg-blue-300"} links={true} />
            <div className="flex justify-center items-center max-h-max bg-gray-100">
                <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                    <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                    <form onSubmit={handleLogin}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                required
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                Login
                            </button>
                            <NavLink className={"inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"} to={"/SignUp"}>Don't have an account?</NavLink>
                        </div>
                    </form>
                </div>
            </div>
            <div className='h-[200px]'></div>
            <Footer />
        </div>
    );
};

export default Login;
