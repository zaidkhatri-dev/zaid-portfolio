import Container from "./components/utility/Container";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Navbar from "./components/sub/Navbar";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";

import { useRef } from "react";

const App = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  
  const sectionRefs = [
    heroRef,
    projectsRef,
    contactRef,
  ]
  
  return (
    <div className="text-pfg bg-pbg dark md:text-lg">
      <Container>
        <Navbar sectionRefs={sectionRefs}></Navbar>
        <Hero heroRef={heroRef}></Hero>
        <Projects projectsRef={projectsRef}></Projects>
        <Contact contactRef={contactRef}></Contact>
        <Footer></Footer>
      </Container>
    </div>
  );
};

export default App;
