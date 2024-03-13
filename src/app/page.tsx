import Header from "./components/header/page";
import Hero from "./components/hero/page";
import StatisticsPage from "./components/statistics/page";
import ServicePage from "./components/service-page/page";
import Content from "./components/content/page";
import IndustryPage from "./components/industry/page";
import Customer from "./components/customer/page";
import Testimonial from "./components/testimonial/page";
import Footer from "./components/footer/page";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <StatisticsPage />
      <ServicePage />
      <Content />
      <IndustryPage />
      <Testimonial />
      <Customer />
      <Footer />
    </main>
  );
}