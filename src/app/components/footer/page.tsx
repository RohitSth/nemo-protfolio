import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer id="footer" className="text-white body-font bg-[#0D7ABF]">
        <div className="container py-24 mx-auto flex flex-col md:flex-row">
          <div className="md:w-1/4 md:mx-0 mx-auto text-center md:text-left">
            <a className="flex title-font font-medium items-center md:justify-start justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span className="ml-3 text-3xl">LOGO</span>
            </a>
            <p className="mt-2 text-xl">INOVATE. CREATE. DOMINATE.</p>
            <hr className="my-8" />
            <small className="text-lg">
              &copy; 2019 Nemo. Property All Rights Reserved
            </small>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium tracking-widest text-2xl mb-3">
                Quick Links
              </h2>
              <nav className="list-none my-10 text-xl">
                <li>
                  <a className="hover:underline">Nemo Writes</a>
                </li>
                <li>
                  <a className="hover:underline">Portfolio</a>
                </li>
                <li>
                  <a className="hover:underline">Our Company</a>
                </li>
                <li>
                  <a className="hover:underline">Career</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium tracking-widest text-2xl mb-3">
                Contact Us
              </h2>
              <nav className="list-none my-10 text-xl">
                <li>
                  <a className="hover:underline">
                    123 street, Chabahil first floor, Kathmandu, Nepal
                  </a>
                </li>
                <li>
                  <a className="hover:underline">info.@asknemo.com.np</a>
                </li>
                <li>
                  <a className="hover:underline">+977 9874563210</a>
                </li>
              </nav>
            </div>
            {/* <div className="lg:w-1/4 md:w-1/2 w-full flex justify-end ">
              <nav className="list-none mb-10 ">
                <li className="my-2">
                  <a>
                    <Image
                      src="/facebook.png"
                      width={30}
                      height={30}
                      alt="Facebook logo"
                    />
                  </a>
                </li>
                <li className="my-2">
                  <a>
                    <Image
                      src="/instagram.png"
                      width={30}
                      height={30}
                      alt="Instagram logo"
                    />
                  </a>
                </li>
                <li className="my-2">
                  <a>
                    <Image
                      src="/twitter-foot.png"
                      width={30}
                      height={30}
                      alt="Twitter logo"
                    />
                  </a>
                </li>
                <li className="my-2">
                  <a>
                    <Image
                      src="/youtube.png"
                      width={30}
                      height={30}
                      alt="YouTube logo"
                    />
                  </a>
                </li>
                <li className="my-2">
                  <a>
                    <Image
                      src="/linkedin-footer.png"
                      width={30}
                      height={30}
                      alt="LinkedIn logo"
                    />
                  </a>
                </li>
              </nav>
            </div> */}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
