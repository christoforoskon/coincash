import Header from "./components/Header/Header";
import Services from "./components/Services/Services";
import ServicesGrid from "./components/Services/components/ServicesGrid/ServicesGrid";

const Home = () => {
  return (
    <>
      <Header />
      <Services />
      <ServicesGrid />
    </>
  );
};

export default Home;
