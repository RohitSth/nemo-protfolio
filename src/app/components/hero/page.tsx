const Hero = () => {
  return (
    <>
      <section
        className="text-black-400 bg-gray-400 body-font overflow-hidden"
        style={{
          backgroundImage:
            "url(https://imgs.search.brave.com/K-sTq_berFo9XATHvPZOc3OyRBIEwqIR7Asv_vJFVHQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nbWFnaWMuY29t/L3Byb2R1Y3RfaW1h/Z2VzL0RhcmstYmx1/ZS1XYWxscGFwZXIu/anBn)",
        }}
      >
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-12">
            <div className="p-12 md:w-1/2 flex flex-col items-start">
              <h2 className="sm:text-[44px] text-[44px] title-font font-medium text-white mt-24 mb-4 hover:text-[#0D7ABF]">
                INNOVATE. CREATE. DOMINATE.
              </h2>
              <div className="mb-14 text-[24px] text-white w-[1017px]">
                We envision a future where businesses seamlessly harness the
                power of evolving technologies to not only adapt to change but
                to thrive in it.
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <div className="relative h-[400px] overflow-hidden rounded-lg bg-[url('https://tecdn.b-cdn.net/img/new/slides/041.webp')] bg-cover bg-no-repeat p-12 text-center text-white">
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black/60 bg-fixed">
          <div className="flex h-full items-center justify-center">
            <div className="text-white">
              <h2 className="mb-4 text-4xl font-semibold">Heading</h2>
              <h4 className="mb-6 text-xl font-semibold">Subheading</h4>
              <button
                type="button"
                className="inline-block rounded border-2 border-neutral-50 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-300 hover:text-neutral-200 focus:border-neutral-300 focus:text-neutral-200 focus:outline-none focus:ring-0 active:border-neutral-300 active:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600"
                data-twe-ripple-init
                data-twe-ripple-color="light"
              >
                Call to action
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Hero;
