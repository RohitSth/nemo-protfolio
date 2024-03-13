import Image from "next/image";

const Customer = () => {
  return (
    <>
      <div className="w-full inline-flex flex-nowrap">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_Image]:max-w-none">
          <li>
            <Image
              src="/calculator.png"
              alt="Facebook"
              width={300}
              height={300}
            />
          </li>
          <li>
            <Image
              src="/calculator.png"
              alt="Disney"
              width={300}
              height={300}
            />
          </li>
          <li>
            <Image
              src="/calculator.png"
              alt="Airbnb"
              width={300}
              height={300}
            />
          </li>
          <li>
            <Image src="/calculator.png" alt="Apple" width={300} height={300} />
          </li>
          <li>
            <Image src="/calculator.png" alt="Spark" width={300} height={300} />
          </li>
          <li>
            <Image
              src="/calculator.png"
              alt="Samsung"
              width={300}
              height={300}
            />
          </li>
          <li>
            <Image src="/calculator.png" alt="Quora" width={300} height={300} />
          </li>
          <li>
            <Image src="/calculator.png" alt="Sass" width={300} height={300} />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Customer;
