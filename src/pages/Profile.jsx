"use client";

import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { useRef } from "react";
import Image from "next/image";

const Profile = () => {

  const animation = {
    h1: {
      initial: { x: "-100%", opacity: 0 },
      whileInView: { x: 0, opacity: 1 },
      transition: { duration: 0.5 },
    },
    button: {
      initial: { y: "-100%", opacity: 0 },
      whileInView: { y: 0, opacity: 1 },
      transition: { duration: 0.5 },
    },
    counts: {
      initial: { opacity: 0 },
      whileInView: { opacity: 1 },
      transition: { duration: 1 },
    },
  };

  return (
    <div id="Home" className="uppercase p-4 md:p-10 min-h-screen w-screen flex flex-col md:flex-row items-center justify-center bg-gray-100">
      <section className=" flex flex-col gap-4 lg:gap-6 items-center justify-center p-8 text-center lg:text-left md:w-8/12 m-auto">
        <motion.h1 {...animation.h1} className="text-3xl lg:text-4xl mb-4 text-gray-800 font-serif tracking-wider fl;ex justify-center align-middle text-center">
         He is the Head of Our College who is
        </motion.h1>
        <Typewriter
          options={{
            strings: ["Student-Centric Leader","Passionate Educator","A Dynamic Leader", "Inspiring Motivator", "Energetic Visionary","Empathetic Communicator","Positive Influencer","Proactive Innovator","Empowering Mentor","Collaborative Spirit","Motivational Speaker"],
            autoStart: true,
            loop: true,
            wrapperClassName: "text-xl lg:text-2xl text-gray-700 mb-6",
            cursor: "",
          }}
        />
      </section>
      <section className="flex-1 flex items-center justify-center p-8">
        <Image src={'/assets/profile.jpg'} alt="profile" width={1600} height={160} className="rounded-full object-cover shadow-lg" />
      </section>
    </div>
  );
};

export default Profile;
