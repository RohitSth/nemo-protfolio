import Image from "next/image";

const ServicePage = () => {
  return (
    <>
      <section id="service-page" className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/4 md:w-1/2 p-4">
              <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-lg">
                <a href="#">
                  <Image
                    className="rounded-t-lg"
                    src="/software.png"
                    width={300}
                    height={300}
                    alt="Software & Application Development"
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <p className="mb-2 text-2xl text-black">
                      Software & Application Development
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4">
              <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-lg">
                <a href="#">
                  <Image
                    className="rounded-t-lg"
                    src="/marketing.png"
                    width={300}
                    height={300}
                    alt="Digital Marketing & Branding"
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <p className="mb-2 text-2xl text-black">
                      Digital Marketing & Branding
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4">
              <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-lg">
                <a href="#">
                  <Image
                    className="rounded-t-lg"
                    src="/video.png"
                    width={300}
                    height={300}
                    alt="Video Production"
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <p className="mb-2 text-2xl text-black">Video Production</p>
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
