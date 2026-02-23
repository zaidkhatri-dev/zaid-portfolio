import { useState, useEffect } from "react";
import { motion } from "motion/react";

const Navbar = ({ sectionRefs }: { sectionRefs: React.RefObject<HTMLDivElement | null>[] }) => {
  const navItems: string[] = ["Home", "Projects", "Contact"];

  const [hovered, setHovered] = useState<null | number>(null);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<null | number>(null);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionRefs.forEach((ref, idx) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(idx);
          }
        },
        { 
          threshold: 0,
          rootMargin: "-40% 0px -40% 0px"
        }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }
      observers.push(observer);
    });

    const whenScrolled = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", whenScrolled);

    return () => {
      observers.forEach((obs) => obs.disconnect());
      window.removeEventListener("scroll", whenScrolled);
    };
  }, [sectionRefs]);

  return (
    <nav className="flex justify-center items-center sticky top-0 z-5 py-4">
      {navItems.map((item, idx) => {
        const isHighlighted = hovered === idx || (hovered === null && activeSection === idx);
        
        return (
          <a
            key={idx}
            onMouseEnter={() => window.innerWidth >= 768 && setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
            href={`#${item}`}
            className="relative z-10 text-center lg:px-5 lg:py-2 px-3.75 py-1.5"
          >
            {isHighlighted && (
              <motion.div
                layoutId="hover"
                className="absolute inset-0 w-full h-full bg-bbg rounded-full"
              ></motion.div>
            )}
            <span className={`relative transition-colors duration-300 ease-out ${isHighlighted ? "text-bfg" : ""}`}>
              {item}
            </span>
          </a>
        );
      })}
      {scrolled && (
        <div className="w-full h-full absolute inset-0 backdrop-blur-lg bg-black/30 rounded z-0 pointer-events-none" />
      )}
    </nav>
  );
};

export default Navbar;
