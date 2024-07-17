"use client";
import { animate, motion } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

const Home = () => {
  const studentCount = useRef(null);
  const parent_satisfaction = useRef(null);
  const success = useRef(null);

  const animationClientsCount = () => {
    animate(0, 300, {
      duration: 2,
      onUpdate: (v) => (studentCount.current.textContent = v.toFixed()),
    });
  };

  const parent_satisfaction_count = () => {
    animate(0, 100, {
      duration: 2,
      onUpdate: (v) => (parent_satisfaction.current.textContent = v.toFixed()),
    });
  };

  const success_count = () => {
    animate(0, 100, {
      duration: 2,
      onUpdate: (v) => (success.current.textContent = v.toFixed()),
    });
  };

  return (
    <div id="home" className="overflow-x-hidden h-auto w-screen bg-image2 lg:relative flex flex-col items-center justify-center min-h-screen bg-fixed bg-contain"
      style={{ backgroundAttachment: 'fixed', backgroundPosition: 'center'}}>
      <div className="mx-auto h-[90vh] lg:h-screen w-full relative" id="section_1">
        <div className="h-full w-full flex justify-center items-center absolute inset-0 text-white m-auto bg-gray-900 bg-opacity-65">
          <div className="flex flex-wrap uppercase text-3xl md:text-5xl text-center font-extrabold tracking-wider md:tracking-widest">
            admission open
          </div>
        </div>
        <Link href={'#section_2'} className="absolute left-1/2 transform -translate-x-1/2 bottom-[10vh] text-3xl text-white">
          <svg className="font-bold h-10 lg:h-24 w-16 lg:w-32 text-white animate-upDown bi bi-chevron-bar-down" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M3.646 4.146a.5.5 0 0 1 .708 0L8 7.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708M1 11.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5" />
          </svg>
        </Link>
      </div>
      {/* section 2 */}
      <div className="bg-white h-auto w-full" id="section_2">
        <div className="w-10/12 mx-auto flex flex-col">
          <div className="w-full h-[30vh] bg-blue-700"></div>
          <div className="w-full md:w-10/12 h-[80vh] bg-white mx-auto flex flex-col md:flex-row -mt-24">
            <div className="w-full md:w-4/12 h-full bg-white mx-auto shadow-2xl flex flex-col gap-8">
              <div className="mt-10 text-gray-600 text-2xl mx-auto">About College</div>
              <div className="m-5 text-gray-500 text-md mx-auto w-10/12">Welcome to our college, where dedicated teachers inspire success and foster growth. Embrace a vibrant community, innovative learning experiences, and a supportive environment that empowers you to achieve your dreams. Discover endless possibilities with us and shape your future!</div>
            </div>
            <div className="w-full md:w-8/12 h-full bg-white mx-auto sm:my-10">
              <video width="100%" controls>
                <source src="/assets/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          {/* animation effects */}
          <div className="animation-effects w-full h-[50vh] mt-[15vh] mb-10 bg-white flex flex-wrap gap-10  md:gap-[10vw] justify-center text-center items-center" >
            <article className="flex gap-3 items-center">
              <svg className="h-16 w-16 text-gray-700" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
              </svg>
              <p className="flex flex-col">
                <span className="text-4xl text-gray-700">
                  <motion.span
                    whileInView={animationClientsCount}
                    ref={studentCount}
                  ></motion.span>+
                </span>
                <span className="text-gray-400">Happy students</span>
              </p>
            </article>
            <article className="flex gap-3 items-center">
              <svg className="h-16 w-16 text-gray-700" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5M4.285 9.567a.5.5 0 0 1 .683.183A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8" />
              </svg>
              <p className="flex flex-col">
                <span className="text-4xl text-gray-700">
                  <motion.span
                    whileInView={parent_satisfaction_count}
                    ref={parent_satisfaction}
                  ></motion.span>%
                </span>
                <span className="text-gray-400">Parent Satisfaction</span>
              </p>
            </article>
            <article className="flex gap-3 items-center">
              <svg className="h-16 w-16 text-gray-700" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917z" />
                <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466z" />
              </svg>
              <p className="flex flex-col">
                <span className="text-4xl text-gray-700">
                  <motion.span
                    whileInView={success_count}
                    ref={success}
                  ></motion.span>%
                </span>
                <span className="text-gray-400">Success</span>
              </p>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
