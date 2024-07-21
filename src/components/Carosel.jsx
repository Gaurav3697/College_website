import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import TestinomailCard from '@/pages/TestinomailCard'

const Testinomial=[
    {
        id:1,
        name:"Manish sah",
        Description:"Had excellenece experience in college and now I am computerengineering facilitator-Rupaitha ma vi",
        src:"/assets/students_img/manish.jpg"
    },
    {
        id:2,
        name:"Ashok Kumar",
        Description:"ASI -Nepal police",
        src:"/assets/students_img/ashok.jpeg"
    },
    {
        id:3,
        name:"Lalu k Das",
        Description:"quality control officer-Nepal govt",
        src:"/assets/students_img/Lallu.jpeg"
    },
    {
        id:7,
        name:"Himai Ishika",
        Description:"The experience in the college was excellence.",
        src:"/assets/students_img/Himai_Ishika.jpg"
    },
    {
        id:8,
        name:"Khusbu_sah",
        Description:"The college environment was very supportive",
        src:"/assets/students_img/Khusbu_sah.jpg"
    },
    {
        id:4,
        name:"satyam Jha",
        Description:"Learnt many skilled related to life and computer feild and now i am Data analyst-freelancer",
        src:"/assets/students_img/satyam.jpeg"
    },
    {
        id:5,
        name:"Kuldip mahato",
        Description:"Transformation in this college was amazing and now i am Neelarjun Engineering college facilitator",
        src:"/assets/students_img/kuldip.jpeg"
    },
    {
        id:6,
        name:"Bittu sah",
        Description:"Data management-Daraz online",
        src:"/assets/students_img/bittu.jpeg"
    },
]

class DemoCarousel extends Component {
    render() {
        return (
            <div className='h-5/6 w-4/5'>
            <Carousel showArrows={false} infiniteLoop={true} autoPlay={true} centerMode={true} interval={'3000'} showIndicators={false} showThumbs={false} showStatus={false}>
              {
                Testinomial.map((Testinomial)=>(
                    <TestinomailCard key={Testinomial.id} name={Testinomial.name} Description={Testinomial.Description} src={Testinomial.src}/>
                ))
              }
            </Carousel>
            </div>
        );
    }
};


// Don't forget to include the css in your page

// Using webpack or parcel with a style loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>

export default DemoCarousel;