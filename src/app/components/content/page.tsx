import Image from "next/image";

const Content = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-3/4 md:w-1/2 w-full p-4">
              <div
                id="carouselExampleCaptions"
                className="relative"
                data-twe-carousel-init
                data-twe-ride="carousel"
              >
                {/* Carousel indicators */}
                <div
                  className="absolute bottom-0 left-0 right-0 z-[2] mx-auto mb-4 flex list-none justify-center p-0"
                  data-twe-carousel-indicators
                >
                  {/* Indicator buttons */}
                  <button
                    type="button"
                    data-twe-target="#carouselExampleCaptions"
                    data-twe-slide-to="0"
                    data-twe-carousel-active
                    className="mx-1 box-content h-1 w-8 flex-initial cursor-pointer border-0 border-y-2 border-solid border-transparent bg-white bg-clip-padding p-0 opacity-50 transition-opacity duration-600 ease-cubic-bezier(0.25,0.1,0.25,1.0) motion-reduce:transition-none"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  {/* Add more indicator buttons as needed */}
                </div>

                {/* Carousel items */}
                <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
                  {/* First item */}
                  <div
                    className="relative float-left -mr-full w-full transition-transform duration-600 ease-in-out motion-reduce:transition-none"
                    data-twe-carousel-active
                    data-twe-carousel-item
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <img
                      src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(15).jpg"
                      className="block w-full"
                      alt="..."
                    />
                    <div className="absolute inset-x-0 bottom-5 hidden py-5 text-center text-white md:block">
                      <h5 className="text-xl">First slide label</h5>
                      <p>
                        Some representative placeholder content for the first
                        slide.
                      </p>
                    </div>
                  </div>
                  {/* Add more carousel items as needed */}
                </div>

                {/* Carousel controls - prev item */}
                <button
                  className="absolute bottom-0 left-0 top-0 z-10 flex w-1/6 items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-cubic-bezier(0.25,0.1,0.25,1.0) hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                  type="button"
                  data-twe-target="#carouselExampleCaptions"
                  data-twe-slide="prev"
                >
                  <span className="inline-block h-8 w-8">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        d="M15.75 19.5L8.25 12l7.5-7.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                    Previous
                  </span>
                </button>

                {/* Carousel controls - next item */}
                <button
                  className="absolute bottom-0 right-0 top-0 z-10 flex w-1/6 items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-cubic-bezier(0.25,0.1,0.25,1.0) hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                  type="button"
                  data-twe-target="#carouselExampleCaptions"
                  data-twe-slide="next"
                >
                  <span className="inline-block h-8 w-8">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                    Next
                  </span>
                </button>
              </div>
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
