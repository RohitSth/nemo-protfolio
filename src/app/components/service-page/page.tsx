import Image from "next/image";

const ServicePage = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex -m-4">
            <div className="p-4 lg:w-1/4 md:w-1/2">
              <div>
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 underline underline-offset-2">
                  Our Services
                </h1>
                <p className="mb-16 text-lg">
                  We envision a future where businesses seamlessly.
                </p>
                <div className="text-blue-400 font-bold underline text-xl">
                  <a href="#">See all services</a>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/4 md:w-1/2">
              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg shadow-gray-500/50">
                <a href="#">
                  <Image
                    className="rounded-t-lg w-full h-full"
                    src="/calculator.png"
                    width={300}
                    height={300}
                    alt="Picture of the author"
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700">
                      Noteworthy technology acquisitions 2021
                    </h5>
                  </a>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/4 md:w-1/2">
              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg shadow-gray-500/50">
                <a href="#">
                  <Image
                    className="rounded-t-lg w-full h-full"
                    src="/calculator.png"
                    width={300}
                    height={300}
                    alt="Picture of the author"
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700">
                      Noteworthy technology acquisitions 2021
                    </h5>
                  </a>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/4 md:w-1/2">
              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg shadow-gray-500/50">
                <a href="#">
                  <Image
                    className="rounded-t-lg w-full h-full"
                    src="/calculator.png"
                    width={300}
                    height={300}
                    alt="Picture of the author"
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700">
                      Noteworthy technology acquisitions 2021
                    </h5>
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
