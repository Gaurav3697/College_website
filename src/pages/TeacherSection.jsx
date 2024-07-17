import PeopleCard from "./PeopleCard";

const TeacherSection = () => {

    return (
        <div id="teachers" className=" lg:w-screen h-auto bg-white p-10 overflow-x-hidden ">
            <div className="h-auto w-full flex flex-col gap-5">
                <div className="mt-6 flex flex-col gap-8">
                <h1 className="flex w-8/10  justify-center items-center m-auto uppercase text-xl lg:text-4xl">Meet Our Qualified Teacher Team</h1>
                <p className="flex justify-center items-center text-center m-auto uppercase text-md lg:text-xl text-gray-500 w-3/4 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, fuga?</p>
                </div>
                <section className="p-2 flex flex-col md:flex-row items-center justify-center  gap-5 w-10/12 m-auto h-auto ">
                    <PeopleCard/>
                    <PeopleCard/>
                    <PeopleCard/>
                    <PeopleCard/>
                </section>
            </div>
        </div>
    );
};

export default TeacherSection;