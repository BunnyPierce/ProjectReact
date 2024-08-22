import React from 'react'
import { NavLink } from 'react-router-dom'

const CardBuilder = (props) => {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img className="w-full h-48 object-cover" src={props.imageUrl} alt={props.place} />
            <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{props.place}</h2>
                <p className="text-gray-700"><i className="fa-solid fa-person"></i> Adults: {props.adults}</p>
                <p className="text-gray-700"><i className="fa-solid fa-child"></i> Children: {props.childs}</p>
                <p className="text-gray-700"><i className="fa-solid fa-door-open"></i> Rooms: {props.rooms}</p>
                <p className='text-gray-700'><i className="fa-solid fa-money-check-dollar"></i> Price: {props.price}</p>
                <NavLink
                    to="/Flights"
                    state={{
                        firstImage: props.imageUrl,
                        place: props.place,
                        adults: props.adults,
                        childs: props.childs,
                        rooms: props.rooms,
                        price: props.price,
                        locationDetails: props.locationObj,
                        images: props.imageObj
                    }}
                >
                    <button className='border bg-green-500 hover:bg-green-600 text-white p-2 rounded w-20 mt-1'>Details</button>
                </NavLink>
            </div>
        </div>
    )
}

export default CardBuilder
