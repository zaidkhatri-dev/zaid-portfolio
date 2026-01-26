import { Send } from "lucide-react";

const SendMsg = () => {
  return (
    <button type="submit" className="flex items-center gap-2 bg-bbg text-bfg px-4 py-2 rounded-xl cursor-pointer hover:opacity-80">
      <Send strokeWidth={1.5} size={20}></Send>
      <p>Send</p>
    </button>
  )
}

export default SendMsg