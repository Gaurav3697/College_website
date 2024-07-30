import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

const images = [
    {
        id: 1,
        src: "/assets/gallary/1.jpeg"
    },
    {
        id: 2,
        src: "/assets/gallary/2.jpeg"
    },
    {
        id: 3,
        src: "/assets/gallary/3.jpeg"
    },
    {
        id: 4,
        src: "/assets/gallary/4.jpeg"
    },
    {
        id: 5,
        src: "/assets/gallary/5.jpeg"
    },
    {
        id: 6,
        src: "/assets/gallary/6.jpeg"
    },
    {
        id: 7,
        src: "/assets/gallary/7.jpeg"
    },
    {
        id: 8,
        src: "/assets/gallary/8.jpeg"
    },
    {
        id: 9,
        src: "/assets/gallary/9.jpeg"
    },
    {
        id: 10,
        src: "/assets/gallary/10.jpeg"
    },
    {
        id: 11,
        src: "/assets/gallary/12.jpeg"
    },
    {
        id: 12,
        src: "/assets/gallary/13.jpeg"
    },
    {
        id: 13,
        src: "/assets/gallary/14.jpeg"
    },
]

class Gallary extends Component {
    render() {
        return (
            <div id='gallary' className='h-auto w-screen sm:p-5 lg:p-20 flex flex-col gap-6 bg-white'>
                    <h1 className="flex justify-center items-center m-auto uppercase text-xl lg:text-4xl w-full text-black pt-10">Gallary moments</h1>
                <div className='rounded-3xl p-3'>
                    <Carousel showArrows={true} infiniteLoop={true} autoPlay={true} centerMode={true} interval={'2000'} showIndicators={false} showThumbs={false} showStatus={false} >
                        {
                            images.map((img) => (
                                <div key={img.id} className='md:w-full h-[50vh] md:h-screen flex flex-row mx-4'>
                                    <img
                                        src={img.src}
                                        alt="image"
                                        className="m-auto h-3/4 w-full object-cover rounded-3xl lg:mx-16"
                                    />
                            </div>
                                ))
                            }


                    </Carousel>
                </div>
            </div>
        );
    }
};


// Don't forget to include the css in your page

// Using webpack or parcel with a style loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>

export default Gallary;