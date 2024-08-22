import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = (props) => {
    const func = (links) => {
        if (links) {
            return <nav className='flex justify-center items-center gap-2 text-lg'>
                {/* <NavLink to="/Flights">Flights</NavLink> */}
                <NavLink to="/Places">Places</NavLink>
            </nav>
        }
    }
    return (
        <header className={`${props.bg} flex flex-col sm:flex-row justify-between items-center p-4`}>
            <div>
                <img src="../images/logo.png" alt="logo" className='max-h-[120px]' />
            </div>
            <div className="flex-grow">
                {func(props.links)}
            </div>
            <div className='flex flex-col mt-2 sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2'>
                <Link to={"/SignUp"}>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Sign up</button>
                </Link>
                <Link to={"/Login"}>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Log in</button>
                </Link>
            </div>
        </header>

    )
}

export default Header