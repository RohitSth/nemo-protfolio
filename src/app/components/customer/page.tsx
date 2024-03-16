import Image from "next/image";

const Customer = () => {
  return (
    <>
      <div className="my-16 flex justify-center">
        <h1 className="title-font text-4xl mb-4 font-bold text-black">
          Our Valued Clients
        </h1>
      </div>
      <div className="w-full flex justify-center mb-24">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_Image]:max-w-none">
          <li>
            <Image src="/python.png" alt="" width={100} height={100} />
          </li>
          <li>
            <Image src="/phone.png" alt="" width={100} height={100} />
          </li>
          <li>
            <Image src="/navigation.png" alt="" width={100} height={100} />
          </li>
          <li>
            <Image src="/linkedin.png" alt="" width={100} height={100} />
          </li>
          <li>
            <Image src="/java-script.png" alt="" width={100} height={100} />
          </li>
          <li>
            <Image src="/html-5.png" alt="" width={100} height={100} />
          </li>
          <li>
            <Image src="/gitnub.png" alt="" width={100} height={100} />
          </li>
          <li>
            <Image src="/envelope.png" alt="" width={100} height={100} />
          </li>
          <li>
            <Image src="/engineering.png" alt="" width={100} height={100} />
          </li>
          <li>
            <Image src="/css.png" alt="" width={100} height={100} />
          </li>
        </ul>
      </div>
      <div>
        <h1 className=" flex justify-center title-font text-4xl mb-4 font-bold text-black">
          Ready to dive into projects?
        </h1>
        <div className="flex justify-center text-sm">
          <p>Get in touch with our team</p>
        </div>
        <div className="flex justify-center my-7">
          <button className=" text-white bg-[#0D7ABF] border-0 py-2 px-6 focus:outline-none hover:bg-[#0a5483] rounded-[26px] text-base">
            CONTACT US
          </button>
        </div>
      </div>
    </>
  );
};

export default Customer;
