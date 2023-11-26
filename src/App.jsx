import About from "./Components/OurWork/About/About";
import Contact from "./Components/OurWork/Contact/Contact";
import HeroCard from "./Components/OurWork/HeroCard";
import Introduction from "./Components/OurWork/Introduction/Introduction";
import Portfolio from "./Components/OurWork/Portfolio/Portfolio";

export default function App() {
  return (
    <main>
      <HeroCard />
      <div className=" lg:w-[64%] lg:absolute right-16">
        <Introduction />
        <About />
        <Portfolio />
        <Contact />
      </div>
    </main>
  );
}
