import React, { useState } from 'react';
import Header from '../Comp/Header';
import { useLocation } from 'react-router-dom';
import Footer from '../Comp/Footer';
import CustomMarker from '../Comp/CustomMarker';

const Flights = () => {
  const location = useLocation()
  const { state } = location
  const [selectedImage, setSelectedImage] = useState(state.firstImage);

  console.log(state.images.first)
  const images = [
    state.firstImage,
    state.images.first,
    state.images.second,
  ];

  return (
    <div>
      <Header links={true} bg={"bg-blue-300"} />
      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row">
          {/* Apartment Info Section */}
          <div className="md:w-1/2 p-4">
            <h2 className="text-3xl font-bold mb-2">Apartment Information:</h2>
            <p className="text-lg mb-2"><i className="fa-solid fa-house"></i> Location: {state.locationDetails.place}</p>
            <p className="text-lg mb-2"><i className="fa-solid fa-person"></i> Adults: {state.adults}</p>
            <p className="text-lg mb-2"><i className="fa-solid fa-child"></i> Children: {state.childs}</p>
            <p className="text-lg mb-2"><i className="fa-solid fa-door-open"></i> Rooms: {state.locationDetails.rooms}</p>
            <p className="text-lg mb-2"><i className="fa-solid fa-bed"></i> Beds: {state.locationDetails.beds}</p>
            <p className="text-lg mb-2"><i className="fa-solid fa-money-check-dollar"></i> Price: {state.price}</p>
            <p className="text-lg mb-2">A-bit about the place: <span className='block w-[400px]'>{state.locationDetails.information}</span></p>
            {state.locationDetails.freeCancel == true &&
              <p className="text-lg mb-2 text-green-600"> Free to Cancel!</p>}
            <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75" onClick={()=>{alert("Item bought")}}>Order Now!</button>
          </div>

          {/* Image Gallery Section */}
          <div className="md:w-1/2 p-4">
            {/* Large Image */}
            <div className="mb-4">
              <img
                src={selectedImage}
                alt="Selected"
                className="w-full h-64 object-cover"
              />
            </div>

            {/* Thumbnail Images */}
            <div className="flex space-x-2">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-1/3 h-24 object-cover cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="w-full h-64 mt-8">
          <h2 className="text-xl font-bold mb-2">Location on Map</h2>
          {/* Replace the div below with a map component or iframe */}
          <CustomMarker position={state.locationDetails.position} name={state.locationDetails.place} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Flights;
