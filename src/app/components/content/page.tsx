import NextJsCarousel from "../carousel/page";

const Content = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-3/4 md:w-1/2 w-full p-4 h-1/2">
              {/* <div
                id="carouselExampleCaptions"
                className="relative"
                data-twe-carousel-init
                data-twe-ride="carousel"
              > */}
              <NextJsCarousel />
              {/* </div> */}
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4">
              <div className="flex flex-col ml-14">
                <h1 className="title-font text-4xl mb-4 font-bold text-black">
                  Our Projects
                </h1>
                <p className="mb-16 text-sm">
                  We envision a future where businesses seamlessly.
                </p>
                <div className="text-blue-500 text-sm hover:underline">
                  <a href="#">&lt; See all projects</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Content;
