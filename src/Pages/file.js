<div className='container flex justify-between flex-wrap mt-6'>
<div className='container flex flex-col mx-auto mt-3 max-w-[400px]'>
  {buildCards(sliceArr)}
  {sliceArr.length > 0 && (
    <div className='self-end'>
      <button className={`bg-blue-500 hover:bg-blue-600 text-white font-semibold p-3 rounded-lg shadow-lg mt-3 ml-3 transition-transform transform hover:scale-105 ${disablePrev ? "cursor-not-allowed opacity-50" : ""}`} onClick={loadPrev} disabled={disablePrev}>Load Previous</button>
      <button className={`bg-blue-500 hover:bg-blue-600 text-white font-semibold p-3 rounded-lg shadow-lg mt-3 ml-3 transition-transform transform hover:scale-105 ${disableNext ? "cursor-not-allowed opacity-50" : ""}`} onClick={loadMore} disabled={disableNext}>Next Page</button>
    </div>
  )}
</div>
<div>
  {sliceArr.length > 0 && (
    <div>
      <RadioButtonGroup
        name="priceFilter"
        options={[
          { id: 'lowest-price', label: 'Lowest Price' },
          { id: 'highest-price', label: 'Highest Price' },
        ]}
        onSelectionChange={handleFilterChange}
        selectedFilter={selectedFilter}
      />
    </div>
  )}
</div>
</div>