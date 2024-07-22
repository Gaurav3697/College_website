import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import TestinomailCard from '@/pages/TestinomailCard'

const Testinomial=[
    {
        id:7,
        name:"Himai Ishika",
        Description:"Innovative teaching methods and great community. Loved my time here!",
        src:"/assets/students_img/Himai_Ishika.jpg"
    },
    {
        id:8,
        name:"Khusbu_sah",
        Description:"Engaging classes and amazing resources. Prepared me for real-world challenges.",
        src:"/assets/students_img/Khusbu_sah.jpg"
    },
    {
        id:1,
        name:"Manish sah",
        Description:"Excellent faculty and curriculum, prepared me well for my career! and now I am computerengineering facilitator-Rupaitha ma vi",
        src:"/assets/students_img/manish.jpg"
    },
    {
        id:2,
        name:"Ashok Kumar",
        Description:"Supportive environment and comprehensive courses. Highly recommended! now i am ASI -Nepal police",
        src:"/assets/students_img/ashok.jpeg"
    },
    {
        id:3,
        name:"Lalu k Das",
        Description:"Diverse programs and excellent academic support. Truly beneficial and now i am The quality control officer-Nepal govt",
        src:"/assets/students_img/Lallu.jpeg"
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
        Description:"Fantastic campus life and knowledgeable staff. A memorable journey. ",
        src:"/assets/students_img/kuldip.jpeg"
    },
    {
        id:6,
        name:"Bittu sah",
        Description:"Strong academic foundation and vibrant student life. Highly valued . I am working now as Data management-Daraz online",
        src:"/assets/students_img/bittu.jpeg"
    },
]

class DemoCarousel extends Component {
    render() {
        return (
            <div className='h-5/6 w-full md:w-4/5'>
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