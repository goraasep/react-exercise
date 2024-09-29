import { FC } from "react";
import Header from "../components/Header";
import Works from "../components/Works.tsx";
import Galeries from "../components/Galeries.tsx";
import About from "../components/About.tsx";
import Testimonials from "../components/Testimonials.tsx";

import Footer from "../components/Footer.tsx";
const Home: FC = () => {
  return (
    <>
      <Header />
      <div className="px-20 flex justify-between py-40 flex-col gap-40 bg-home">
        <About />
        <Works />
      </div>
      <Galeries />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;
