import { Send } from "lucide-react";

const Contact = () => {
  return (
    <button className="flex items-center gap-2 bg-bbg text-bfg text-sm md:text-[16px] px-3 py-2 rounded-xl cursor-pointer hover:opacity-80">
      <Send strokeWidth={1.5} size={22}></Send>
      <p>Get in Touch</p>
    </button>
  );
};

export default Contact;
