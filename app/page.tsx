import Hero from "./components/Hero";
import Systems from "./components/Systems";
import Experience from "./components/Experience";
import MoreWork from "./components/MoreWork";
import About from "./components/About";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <main id="main">
        <Systems />
        <Experience />
        <MoreWork />
        <About />
      </main>
      <Contact />
    </>
  );
}
