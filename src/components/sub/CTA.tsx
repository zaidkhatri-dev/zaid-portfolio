import Message from "../buttons/Message";
import Resume from "../buttons/Resume";
import { motion } from "motion/react";

const CTA = () => {
  return (
    <div className="mt-8">
      <h3 className="text-lg md:text-xl">Have a Project in mind?</h3>
      
      <div className="flex items-center gap-2 mt-3">
        <Message content="Get in Touch"></Message>
        <Resume />
      </div>
      
      <div className="flex items-center gap-3 mt-6">
        <motion.a
          whileHover={{ translateY: -6 }}
          href="https://www.linkedin.com/in/zaid-khatri-dev/"
          target="_blank"
        >
          <img height={26} width={26} src="linkedin_icon.svg" alt="" />
        </motion.a>
        <motion.a
          whileHover={{ translateY: -6 }}
          href="https://github.com/zaidkhatri-dev"
          target="_blank"
        >
          <img height={26} width={26} src="github_icon.svg" alt="" />
        </motion.a>
        <motion.a
          whileHover={{ translateY: -6 }}
          href="mailto:zaidkhatri.work@gmail.com"
          target="_blank"
        >
          <img height={26} width={26} src="gmail_icon.svg" alt="gmail" />
        </motion.a>
        <motion.a
          whileHover={{ translateY: -6 }}
          href="https://x.com/zaidkhatri_dev"
          target="_blank"
        >
          <img height={26} width={26} src="x_icon.svg" alt="x" />
        </motion.a>
      </div>
    </div>
  );
};

export default CTA;
