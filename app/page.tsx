import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProblemSolution from "./components/ProblemSolution";
import WhyChooseUs from "./components/WhyChooseUs";
import HowItWorks from "./components/HowItWorks";
import Customers from "./components/Customers";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
  <Hero />
  <ProblemSolution />
        <WhyChooseUs />
        <HowItWorks />
        <Customers />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
