"use client";

import React from 'react'
import DemoCarousel from '../components/Carosel';

const Testinomial = () => {
    return (
        <div id="Testinomial" className="h-auto w-screen  bg-image3 relative flex flex-col items-center justify-center min-h-screen bg-fixed bg-center bg-cover overflow-x-hidden"
            style={{ backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundSize: 'cover' }} >
            <div className="h-5/6 w-full md:w-11/12 flex flex-col justify-center items-center inset-0 text-white m-auto bg-gray-900 bg-opacity-70 rounded-3xl">
                < div className="m-10  flex flex-col gap-4" >
                    <h1 className="flex justify-center items-center m-auto uppercase text-xl lg:text-4xl">our Testinomials</h1>
                    <p className="flex justify-center items-center text-center m-auto uppercase text-md lg:text-xl text-gray-300 w-3/4 ">These are our Some of the students who have acheived success in their life and we are very happy about them</p>
                </div >
                <div className=" md:top-0 h-auto w-full md:w-11/12 " >
                    <div className="flex justify-center m-auto uppercase text-xl md:text-3xl lg:text-5xl text-center mb-[10vh]">
                        <DemoCarousel />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Testinomial;