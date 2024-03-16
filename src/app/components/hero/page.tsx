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
    </>
  );
};

export default Hero;
