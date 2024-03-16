const StatisticsPage = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div
          className=" p-4 md:p-8 light:bg-gray-800 light:text-black-200 mx-auto mb-[50px]"
          id="stats"
          role="tabpanel"
          aria-labelledby="stats-tab"
        >
          <dl className="flex justify-center gap-x-32 text-gray-700">
            <div className="flex flex-col items-center justify-center">
              <dt className="text-[64px] font-extrabold">+20</dt>
              <dd className="mt-[-16px] font-bold text-[24px]">Projects</dd>
            </div>
            <div className="flex flex-col items-center justify-center">
              <dt className="text-[64px] font-extrabold">+50M</dt>
              <dd className="mt-[-16px] font-bold text-[24px]">Line Of Code</dd>
            </div>
            <div className="flex flex-col items-center justify-center">
              <dt className="text-[64px] font-extrabold">+50</dt>
              <dd className="mt-[-16px] font-bold text-[24px]">Team</dd>
            </div>
            <div className="flex flex-col items-center justify-center">
              <dt className="text-[64px] font-extrabold">&#8734;</dt>
              <dd className="mt-[-16px] font-bold text-[24px]">Opportunity</dd>
            </div>
          </dl>
        </div>
      </section>
    </>
  );
};

export default StatisticsPage;
