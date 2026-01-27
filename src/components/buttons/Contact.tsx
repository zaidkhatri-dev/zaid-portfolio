import { Send } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const Contact = () => {
  const [isAnimate, setIsAnimate] = useState<boolean>(false);

  const handleClick = async () => {
    setIsAnimate(true);

    setTimeout(() => {
      const section = document.getElementById("Contact");
      section?.scrollIntoView({ behavior: "smooth" });
    }, 600);

	setTimeout(()=>{
		setIsAnimate(false);
	}, 800)
  };

  return (
    <button
      onClick={handleClick}
      className="flex items-center gap-2 bg-bbg text-bfg text-sm md:text-[16px] px-3 py-2 rounded-xl cursor-pointer hover:opacity-80 active:scale-92"
    >
      <motion.div
        animate={
          isAnimate ? { x: 75, rotate: [20, 40, 60, 80] } : { x: 0, rotate: 0 }
        }
        transition={{ ease: 'easeInOut' ,duration: 0.5 }}
      >
        <Send strokeWidth={1.5} size={22}></Send>
      </motion.div>
      <p className={`${isAnimate ? "opacity-0" : "opacity-100"}`}>
        Get in Touch
      </p>
    </button>
  );
};

export default Contact;
