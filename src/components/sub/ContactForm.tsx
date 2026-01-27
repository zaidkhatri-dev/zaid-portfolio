import { useState } from "react";
import SendMsg from "../buttons/SendMsg";

const ContactForm = () => {
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  const [isAnimate, setIsAnimate] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    const data = new FormData(form);
    console.log(data.get("fullname"), data.get("email"), data.get("message"));

    setIsAnimate(true);

    setTimeout(() => {
      setIsSubmit(true);
      form.reset();
    }, 650);
  };

  return (
    <form
      className="flex flex-col gap-6 text-sm md:text-[16px] relative z-0"
      action=""
      onSubmit={handleSubmit}
    >
      {isSubmit && (
        <div className="w-full h-full backdrop-blur-2xl bg-black/30 absolute inset-0 z-10 flex flex-col gap-2 justify-center items-center">
          <p>Your Message has been sent</p>
          <button
            onClick={() => {
              setIsSubmit(false);
              setIsAnimate(false);
            }}
            className="flex text-[12px] md:text-sm items-center bg-bbg text-bfg px-4 py-2 rounded-xl cursor-pointer hover:opacity-80"
          >
            Send More
          </button>
        </div>
      )}

      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex flex-col gap-2 h-full w-full">
          <label htmlFor="fullname">Name *</label>
          <input
            type="text"
            id="fullname"
            placeholder="Full Name"
            name="fullname"
            required
            className="rounded-lg bg-sbg text-pfg placeholder:text-sfg px-3 py-1.5 border-2 border-transparent focus:border-bbg focus:outline-none transition-colors"
          />
        </div>

        <div className="flex flex-col gap-2 h-full w-full">
          <label htmlFor="phoneNo">Phone</label>
          <input
            type="text"
            id="phoneNo"
            placeholder="+1 (123) xxx-xxxx"
            name="phoneNo"
            className="rounded-lg bg-sbg text-pfg placeholder:text-sfg px-3 py-1.5 border-2 border-transparent focus:border-bbg focus:outline-none transition-colors"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2 h-full w-full">
        <label htmlFor="email">Email *</label>
        <input
          type="email"
          id="email"
          placeholder="your.email@example.com"
          name="email"
          required
          className="rounded-lg bg-sbg text-pfg placeholder:text-sfg px-3 py-1.5 border-2 border-transparent focus:border-bbg focus:outline-none transition-colors"
        />
      </div>

      <div className="flex flex-col gap-2 h-full w-full">
        <label htmlFor="message">Message *</label>
        <textarea
          id="message"
          placeholder="Send me a short message or just say Hello"
          name="message"
          required
          className="rounded-lg bg-sbg text-pfg placeholder:text-sfg px-3 py-1.5 w-full h-40 resize-none border-2 border-transparent focus:border-bbg focus:outline-none transition-colors"
        />
      </div>

      <div className="flex justify-center mt-3">
        <SendMsg isAnimate={isAnimate} />
      </div>
    </form>
  );
};

export default ContactForm;
