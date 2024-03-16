import Image from "next/image";

const IndustryPage = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <a href="" className="text-blue-500 underline underline-offset-4">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 underline:">
                Industries We Serve
              </h1>
            </a>
            <p className="text-lg">
              We envision a future where businesses seamlessly.
            </p>
          </div>
          <div className="flex flex-wrap h-full w-full">
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60 h-auto max-w-lg transition-all duration-300 rounded-lg blur-none hover:blur-sm">
              <Image src={"/software.png"} height={1000} width={1000} alt="" />
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60 h-auto max-w-lg transition-all duration-300 rounded-lg blur-none hover:blur-sm">
              <Image src={"/marketing.png"} height={1000} width={1000} alt="" />
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60 h-auto max-w-lg transition-all duration-300 rounded-lg blur-none hover:blur-sm">
              <Image src={"/video.png"} height={1000} width={1000} alt="" />
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60 h-auto max-w-lg transition-all duration-300 rounded-lg blur-none hover:blur-sm">
              <Image src={"/software.png"} height={1000} width={1000} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IndustryPage;
