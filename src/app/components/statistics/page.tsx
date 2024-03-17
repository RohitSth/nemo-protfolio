const StatisticsPage = () => {
  return (
    <>
      <section className="text-gray-900 body-font mt-[30px] w-full">
        <div className="p-8 mx-auto mb-[30px] text-[44px] flex justify-center gap-28 md:gap-44 lg:gap-44 ">
          <div className="flex flex-col items-center justify-center">
            <h1 className="font-extrabold">+20</h1>
            <p className="mt-[-16px] font-bold text-[18px]">Projects</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="font-extrabold">+50M</h1>
            <p className="mt-[-16px] font-bold text-[18px]">Line Of Code</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="font-extrabold">+50</h1>
            <p className="mt-[-16px] font-bold text-[18px]">Team</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="font-extrabold">&#8734;</h1>
            <p className="mt-[-16px] font-bold text-[18px]">Opportunities</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default StatisticsPage;
