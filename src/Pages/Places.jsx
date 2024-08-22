import React, { useState, useEffect } from 'react';
import CardBuilder from '../Comp/CardBuilder';
import placeArr from '../placeArr.json';
import Header from '../Comp/Header';
import Footer from '../Comp/Footer';
import Capacity from '../Comp/Capacity';
import RadioButtonGroup from '../Comp/RadioButtonGroup';

const Places = () => {
  const [inputValue, setInput] = useState("");
  const [array, setArray] = useState([]);
  const [sliceArr, setSliceArr] = useState([]);
  const [page, setPage] = useState(1);
  const [disableNext, setDisableNext] = useState(false);
  const [disablePrev, setDisablePrev] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [capacity, setCapacity] = useState({ adults: 1, children: 0, rooms: 1 });
  const imagesPerPage = 3;

  useEffect(() => {
    const start = imagesPerPage * (page - 1);
    const end = start + imagesPerPage;
    setSliceArr(array.slice(start, end));
    setDisablePrev(page === 1);
    setDisableNext(end >= array.length);
  }, [array, page]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 0);

    return () => clearTimeout(timeoutId);
  }, [page]);

  const handleCapacityChange = (newCapacity) => {
    setCapacity(newCapacity);
  };

  const send = (e) => {
    e.preventDefault();
    const filtered = filterCards();
    setArray(filtered);
    setPage(1);
  };

  const filterCards = () => {
    return placeArr.filter((item) => {
      // Convert price to number for filtering
      const price = parseFloat(item.price.replace(/[^0-9.-]+/g, '')); // Remove currency symbol and convert to number

      if (inputValue == "all") {
        return item.adults >= capacity.adults && item.children >= capacity.children && item.location.rooms >= capacity.rooms;
      }

      else if (inputValue !== "") {
        const locationMatches = item.location.place.toLowerCase().includes(inputValue.toLowerCase());
        const capacityMatches = item.adults >= capacity.adults && item.children >= capacity.children && item.location.rooms >= capacity.rooms;
        return locationMatches && capacityMatches;
      }
    });
  };

  const buildCards = (filteredArr) => {
    return filteredArr.map((item, index) => (
      <CardBuilder key={index} imageUrl={item.image} place={item.location.place} adults={item.adults} childs={item.children} rooms={item.location.rooms} price={item.price} locationObj={item.location} imageObj={item.extraImages} />
    ));
  };

  const loadMore = () => {
    const nextPage = page + 1;
    if (nextPage <= Math.ceil(array.length / imagesPerPage)) {
      setPage(nextPage);
    }
  };

  const loadPrev = () => {
    const prevPage = page - 1;
    if (prevPage >= 1) {
      setPage(prevPage);
    }
  };

  const applyFilter = (filterId) => {
    // console.log(`Applying filter: ${filterId}`); // Debug log
    let sortedArray = [...array];

    if (filterId === 'lowest-price') {
      sortedArray.sort((a, b) => parseFloat(a.price.replace(/[^0-9.-]+/g, '')) - parseFloat(b.price.replace(/[^0-9.-]+/g, '')));
    } else if (filterId === 'highest-price') {
      sortedArray.sort((a, b) => parseFloat(b.price.replace(/[^0-9.-]+/g, '')) - parseFloat(a.price.replace(/[^0-9.-]+/g, '')));
    }

    setArray(sortedArray);
    setPage(1);
  };

  const handleFilterChange = (filterId) => {
    // console.log(`Filter changed: ${filterId}`); // Debug log
    setSelectedFilter(filterId);
    applyFilter(filterId);
  };

  return (
    <div>
      <Header links={true} bg={"bg-blue-300"} />
      <div className='mt-3 flex flex-col items-center justify-center'>
        <h1 className='text-3xl font-semibold mb-2'>Search for a place to stay</h1>
        <p className='text-base mt-1'>Write "all" to see all of our places!</p>
        <form className='mt-3 p-1' onSubmit={send}>
          <input type="text" placeholder='Search for your place' className='border border-black p-2 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-cyan-300 focus:border-transparent' onChange={(event) => setInput(event.target.value)} />
          <Capacity onCapacityChange={handleCapacityChange} />
          <button className="bg-green-600 hover:bg-green-700 text-white p-[10px] rounded mt-3 ml-3">Search</button>
        </form>
      </div>
      <div className='container flex justify-around mt-6'>
        <div className='flex flex-wrap gap-4 mx-auto mt-3'>
          {buildCards(sliceArr)}
          {sliceArr.length > 0 && (
            <div className='w-full mt-3'>
              <button className={`bg-blue-500 hover:bg-blue-600 text-white font-semibold p-3 rounded-lg shadow-lg transition-transform transform hover:scale-105 ${disablePrev ? "cursor-not-allowed opacity-50" : ""}`} onClick={loadPrev} disabled={disablePrev}>Load Previous</button>
              <button className={`bg-blue-500 hover:bg-blue-600 text-white font-semibold p-3 rounded-lg shadow-lg transition-transform transform hover:scale-105 ${disableNext ? "cursor-not-allowed opacity-50" : ""} ml-5`} onClick={loadMore} disabled={disableNext}>Next Page</button>
            </div>
          )}
        </div>
        <div className='flex flex-col mt-3'>
          {sliceArr.length > 0 && (
            <RadioButtonGroup
              name="priceFilter"
              options={[
                { id: 'lowest-price', label: 'Lowest Price' },
                { id: 'highest-price', label: 'Highest Price' },
              ]}
              onSelectionChange={handleFilterChange}
              selectedFilter={selectedFilter}
            />
          )}
        </div>
      </div>

      <div className='mt-3'>
        {array.length === 0 &&
          <div className='h-[400px]'></div>}
        <Footer />
      </div>
    </div>
  );
};

export default Places;
