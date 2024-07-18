
const TestinomialCard = ({ name, Description, src }) => {
  return (
    <div className="flex flex-col h-auto items-center justify-center w-10/12 m-auto">
      <div className="relative flex flex-col w-full max-w-[25rem]  rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative m-0 w-full shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
          <img
            src={src}
            alt="image"
            className="h-52 w-auto object-contain rounded-2xl"
          />
        </div>
        <div className="p-2">
          <h6 className="w-10/12 m-auto block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-gray-900 antialiased">
            {name}
          </h6>
          <p className="w-9/12 m-auto block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
            {Description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestinomialCard;
