import { Send } from "lucide-react";
import type { MessageProps } from "../../types/types";

const Message = ({content}: MessageProps) => {
  return (
    <button className="flex items-center gap-2 bg-bbg text-bfg text-sm md:text-[16px] px-3 py-2 rounded-xl cursor-pointer hover:opacity-80">
      <Send strokeWidth={1.5} size={22}></Send>
      <p>{content}</p>
    </button>
  );
};

export default Message;
