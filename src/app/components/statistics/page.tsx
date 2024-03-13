const StatisticsPage = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div
          className=" p-4 md:p-8 light:bg-gray-800 light:text-black-200"
          id="stats"
          role="tabpanel"
          aria-labelledby="stats-tab"
        >
          <dl className="flex justify-center gap-x-32">
            <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl font-extrabold">73M+</dt>
              <dd className="text-gray-500 dark:text-gray-400 font-bold">
                Developers
              </dd>
            </div>
            <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl font-extrabold">100M+</dt>
              <dd className="text-gray-500 dark:text-gray-400 font-bold">
                Public repositories
              </dd>
            </div>
            <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl font-extrabold">1000s</dt>
              <dd className="text-gray-500 dark:text-gray-400 font-bold">
                Open source projects
              </dd>
            </div>
            <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl font-extrabold">1B+</dt>
              <dd className="text-gray-500 dark:text-gray-400 font-bold">
                Contributors
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </>
  );
};

export default StatisticsPage;
