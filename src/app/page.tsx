import Header from "./components/header/page";
import Hero from "./components/hero/page";
import StatisticsPage from "./components/statistics/page";
import ServicePage from "./components/service-page/page";
import Content from "./components/content/page";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <StatisticsPage />
      <ServicePage />
      <Content />
    </main>
  );
}
