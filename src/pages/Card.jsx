const Card = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen md:h-auto items-center justify-center">
      <div className="relative flex flex-col md:flex-row w-full max-w-[35rem]  rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative m-0 w-full md:w-3/6 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
          <img
            src="/assets/computer.jpg"
            alt="image"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="p-2">
          <h6 className="w-10/12 m-auto block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-gray-900 antialiased">
            Diploma in Computer Engineering
          </h6>
          <p className="w-9/12 lg:w-11/12 m-auto block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
          A Diploma in Computer Engineering is a technical education program that provides foundational knowledge and practical skills in computer science and engineering. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
