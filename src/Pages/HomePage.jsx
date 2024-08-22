import React from 'react'
import Header from '../Comp/Header'
import ThreeCards from '../Comp/ThreeCards'
import Footer from '../Comp/Footer'

const HomePage = () => {
    return (
        <div>
            <Header bg={"bg-"} />
            <main className="bg-custom-bg h-screen bg-cover bg-center flex items-start justify-center">
                <div className='text-center w-[700px]'>
                    <h1 className='text-3xl font-semibold'>Discover Your Next Adventure with Us</h1>
                    <p className='mt-4 text-2xl'>Embark on unforgettable journeys and explore stunning destinations around the globe. Whether you’re seeking relaxation, adventure, or cultural experiences, our curated travel packages and expert recommendations are designed to make your dream getaway a reality. Start your adventure today and create memories that will last a lifetime!</p>
                </div>
            </main>
            <div className='container flex flex-wrap justify-evenly mb-3'>
                {/* <ThreeCards name={"Flights"} bg={"bg-flight-bg"} message={"Book your flight now"} link={"/Flights"} /> */}
                <ThreeCards name={"Places"} bg={"bg-place-bg"} message={"Order your place now"} link={"/Places"} />
            </div>
            <Footer />
        </div>
    )
}

export default HomePage