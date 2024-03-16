import Image from "next/image";

const ServicePage = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex -m-4">
            <div className="p-4 lg:w-1/4 md:w-1/2">
              <div>
                <a
                  href=""
                  className="text-blue-500 underline underline-offset-4"
                >
                  <h1 className="title-font text-[44px] mb-4 font-medium text-black ">
                    Our Services
                  </h1>
                </a>
                <p className="mb-16 text-[20px]">
                  We envision a future where businesses seamlessly.
                </p>
                <div className="text-blue-500 text-[24px] hover:underline">
                  <a href="#">See all services</a>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/4 md:w-1/2">
              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg shadow-gray-500/50">
                <a href="#">
                  <Image
                    className="rounded-t-lg w-full h-full"
                    src="/software.png"
                    width={300}
                    height={300}
                    alt="Picture of the author"
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <p className="mb-2 text-[24px] text-black">
                      Software & Application Development
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/4 md:w-1/2">
              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg shadow-gray-500/50">
                <a href="#">
                  <Image
                    className="rounded-t-lg w-full h-full"
                    src="/marketing.png"
                    width={300}
                    height={300}
                    alt="Picture of the author"
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <p className="mb-2 text-[24px] text-black">
                      Digital Marketing & Branding
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/4 md:w-1/2">
              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg shadow-gray-500/50">
                <a href="#">
                  <Image
                    className="rounded-t-lg w-full h-full"
                    src="/video.png"
                    width={300}
                    height={300}
                    alt="Picture of the author"
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <p className="mb-2 text-[24px] text-black">
                      Video Production
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicePage;
