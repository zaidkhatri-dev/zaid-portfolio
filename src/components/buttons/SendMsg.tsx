import { Send } from "lucide-react";
import { motion } from "motion/react";
import type { SendMsgProps } from "../../types/types";

const SendMsg = ({isAnimate}: SendMsgProps) => {
  
  return (
    <button type="submit" className="flex items-center gap-2 bg-bbg text-bfg px-4 py-2 rounded-xl cursor-pointer hover:opacity-80 active:scale-92">
      <motion.div
        animate={
          isAnimate ? { x: 80, rotate: [20, 40] } : { x: 0, rotate: 0 }
        }
        transition={{ ease: "easeInOut", duration: 0.45 }}
      >
        <Send strokeWidth={1.5} size={22}></Send>
      </motion.div>
      <p className={`${isAnimate ? "opacity-0" : "opacity-100"}`}>Send</p>
    </button>
  )
}

export default SendMsg