import { useState, useEffect } from "react";
import {motion} from "motion/react"

const Navbar = () => {
  const navItems: string[] = ["Projects", "Contact"];

  const [hovered, setHovered] = useState<null | number>(null);
  const [scrolled, setScrolled] = useState<boolean>(false)

  useEffect(()=>{
    const whenScrolled = () => setScrolled(window.scrollY > 0)
    
    window.addEventListener("scroll", whenScrolled)

    return () => window.removeEventListener("scroll", whenScrolled)
  },[])

  return (
    <nav className="flex justify-center items-center sticky top-0 gap-5 lg:gap-0 z-5 py-3">
      {navItems.map((item, idx) => (
        <a
        key={idx}
          onMouseEnter={() => window.innerWidth >= 768 && setHovered(idx)}
          onMouseLeave={() => setHovered(null)}
          href=""
          className="relative z-10 text-center lg:px-5 lg:py-2 group"
        >
          {hovered === idx && <motion.div layoutId="hover" className="absolute inset-0 w-full h-full bg-bbg rounded-full"></motion.div>}
          <span className="group-hover:text-bfg relative transition-colors duration-300 ease-out">{item}</span>
        </a>
      ))}
      {scrolled && (<div className="w-full h-full absolute inset-0 backdrop-blur-lg bg-black/30 rounded z-0" />)}
    </nav>
  );
};

export default Navbar;
