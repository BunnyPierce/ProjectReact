import React, { useState, useEffect } from 'react';

const Capacity = ({ onCapacityChange }) => {
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    onCapacityChange({ adults, children, rooms });
  }, [adults, children, rooms]);

  const increment = (setter, value) => setter(value < 10 ? value + 1 : 10);
  const decrement = (setter, value) => setter(value > 0 ? value - 1 : 0);

  return (
    <div className='relative inline-block ml-3'>
      <button type="button" className={`border border-black px-4 py-2 bg-white rounded-md shadow-sm ${isDropdownOpen ? "outline-none ring-1 ring-cyan-300 border-transparent" : ""}`} onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
        Choose amount
      </button>

      {isDropdownOpen && (
        <div className='absolute mt-2 w-64 p-4 bg-white shadow-md rounded-lg z-10'>
          <div className='flex justify-between items-center mb-2'>
            <span>Adults</span>
            <div className='flex items-center'>
              <button type='button' className={`px-2 py-1 bg-gray-200 rounded-l ${adults==1?"cursor-not-allowed":null}`} onClick={() => decrement(setAdults, adults)} disabled={adults==1}>-</button>
              <span className='px-4'>{adults}</span>
              <button type='button' className={`px-2 py-1 bg-gray-200 rounded-r ${adults==10?"cursor-not-allowed":null}`} onClick={() => increment(setAdults, adults)}>+</button>
            </div>
          </div>
          <div className='flex justify-between items-center mb-2'>
            <span>Children</span>
            <div className='flex items-center'>
              <button type='button' className={`px-2 py-1 bg-gray-200 rounded-l ${children==0?"cursor-not-allowed":null}`} onClick={() => decrement(setChildren, children)}>-</button>
              <span className='px-4'>{children}</span>
              <button type='button' className={`px-2 py-1 bg-gray-200 rounded-r ${children==10?"cursor-not-allowed":null}`} onClick={() => increment(setChildren, children)}>+</button>
            </div>
          </div>
          <div className='flex justify-between items-center'>
            <span>Rooms</span>
            <div className='flex items-center'>
              <button type='button' className={`px-2 py-1 bg-gray-200 rounded-l ${rooms==1?"cursor-not-allowed":null}`} onClick={() => decrement(setRooms, rooms)} disabled={rooms==1}>-</button>
              <span className='px-4'>{rooms}</span>
              <button type='button' className={`px-2 py-1 bg-gray-200 rounded-r ${rooms==10?"cursor-not-allowed":null}`} onClick={() =>increment(setRooms, rooms)}>+</button>
            </div>
          </div>
          <button type='button' className='mt-2 w-full bg-blue-500 text-white py-2 rounded' onClick={() => setIsDropdownOpen(false)}>
            Done
          </button>
        </div>
      )}
    </div>
  );
}

export default Capacity;
