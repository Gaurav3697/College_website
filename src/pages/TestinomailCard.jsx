const Card = () => {
    return (
      <div className="flex flex-col md:flex-row h-auto items-center justify-center w-10/12 m-auto">
        <div className="relative flex flex-col md:flex-row w-full max-w-[35rem]  rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="relative m-0 w-full lg:w-1/2 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
            <img
              src="/assets/teacher.jpg"
              alt="image"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="p-2">
            <h6 className="w-10/12 m-auto block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-gray-900 antialiased">
              ...Name
            </h6>
            <p className="w-9/12 m-auto block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
              She is working as a governmental computer operator in ....place
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Card;
  