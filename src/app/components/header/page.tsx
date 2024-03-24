const Header = () => {
  return (
    <header className="text-black-200 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a
          href="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
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
          <span className="ml-3 text-lg">nemo</span>
        </a>
        <nav className="ml-auto flex flex-wrap items-center justify-center text-lg">
          <a href="/" className="mr-5 hover:text-[#0D7ABF]">
            Home
          </a>
          <a href="#service-page" className="mr-5  hover:text-[#0D7ABF]">
            Services
          </a>
          <a href="#about" className="mr-5  hover:text-[#0D7ABF]">
            About
          </a>
          <a href="#footer" className="mr-5  hover:text-[#0D7ABF]">
            Career
          </a>
          <button className="inline-flex text-white bg-[#0D7ABF] border-0 py-2 px-6 focus:outline-none hover:bg-[#0a5483] rounded-[26px] text-lg mt-4 md:mt-0">
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
