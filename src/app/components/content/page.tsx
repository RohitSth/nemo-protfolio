import NextJsCarousel from "../carousel/page";

const Content = () => {
  return (
    <>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-3/4 md:mr-0 mb-6 md:mb-0">
            <NextJsCarousel />
          </div>
          <div className="md:w-1/4 p-12 pt-48">
            <div className="flex flex-col justify-center">
              <h1 className="title-font text-3xl mb-4 font-bold text-black">
                Our Projects
              </h1>
              <p className="mb-4 text-xl">
                We envision a future where businesses seamlessly.
              </p>
              <a
                href="#"
                className="text-blue-500 text-xl hover:underline inline-block"
              >
                &lt; See all projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
