import { motion } from "motion/react";
import { Tooltip } from 'react-tooltip'

const ProfilePicture = () => {
  return (
    <div className="flex mt-10">
      <motion.div
        whileHover={{ scale: 1.08, borderColor: "#f7f8f8" }}
        className="w-30 h-30 md:w-32 md:h-32 rounded-full border-2 border-sfg relative bg-[url(pf_edited.png)] bg-cover bg-top"
      >
        <div className="w-4 h-4 md:w-4.5 md:h-4.5 bg-green-400 rounded-full absolute bottom-2 right-2" data-tooltip-id="availability" data-tooltip-content="Available" data-tooltip-place="right" data-tooltip-delay-hide={50}></div>
        <Tooltip id="availability" style={{backgroundColor: "var(--sbg)", color: "var(--sfg)", fontSize: 14, paddingInline: 12, paddingBlock: 6, borderRadius: 6}} offset={15}/>
      </motion.div>
    </div>
  );
};

export default ProfilePicture;
