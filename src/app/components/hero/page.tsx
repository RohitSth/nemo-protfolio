const Hero = () => {
  return (
    <section
      className="body-font bg-cover bg-no-repeat bg-center flex justify-between"
      style={{
        backgroundImage:
          "url(https://imgs.search.brave.com/arCBS1l8hH6UFU_8TraqBqcNqGwmXAktksFaVskI_4k/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE0/ODM3Mjg2NDIzODct/NmMzYmRkNmM5M2U1/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TVRaOGZH/MXZkVzUwWVdsdWMz/eGxibnd3Zkh3d2ZI/eDhNQT09)",
        backgroundSize: "cover",
        backgroundPosition: "right",
      }}
    >
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-12">
          <div className="p-12 md:w-1/2 flex flex-col items-start">
            <h2 className="text-4xl sm:text-6xl title-font font-medium text-white mt-24 mb-4 hover:text-[#2f4b5b]">
              INNOVATE. CREATE. DOMINATE.
            </h2>
            <div className="mt-14 mb-14 text-xl sm:text-2xl text-white max-w-xl">
              We envision a future where businesses seamlessly harness the power
              of evolving technologies to not only adapt to change but to thrive
              in it.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
