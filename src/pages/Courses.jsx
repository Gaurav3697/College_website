import { motion } from "framer-motion";
import Card from "@/pages/Card"

const Courses = () => {
    const course = {
        whileInView: {
            x: 0,
            y: 0,
            opacity: 1,
        },
        one: {
            x: -100,
            opacity: 0,
        },
        Two: {
            x: 100,
            opacity: 0,
        },
    };

    return (

        <div id="courses" className="overflow-x-hidden w-screen  bg-image relative flex flex-col items-center justify-center min-h-screen bg-fixed bg-center bg-cover"
            style={{ backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundSize: 'cover'}}>
            <div className="h-auto md:h-screen w-full flex flex-col gap-2 lg:gap-5 bg-gray-700 bg-opacity-45">
                <div className="mt-6 flex flex-col gap-4">
                <h1 className="flex justify-center items-center m-auto uppercase text-xl lg:text-4xl text-white">Our Featured Courses</h1>
                <p className="flex justify-center items-center text-center m-auto uppercase text-md lg:text-xl text-gray-300 w-3/4 ">We Offers mainly diploma courses featured by ctevt</p>
                </div>
                <section className="p-2 flex flex-col md:flex-row items-center justify-center  gap-5 w-10/12 m-auto h-auto ">
                    {/* useCarosel and show only one at a time */}
                    <Card/>
                </section>
            </div>
        </div>
    );
};

export default Courses;
