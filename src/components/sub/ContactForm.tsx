import { useState } from "react";
import SendMsg from "../buttons/SendMsg";

const ContactForm = () => {
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  const [isAnimate, setIsAnimate] = useState<boolean>(false);
  const [response, setResponse] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

     setIsAnimate(true);

      setTimeout(() => {
        setIsSubmit(true);
        form.reset();
      }, 550);

    const form = e.currentTarget;

    const data = new FormData(form);

    try {
      const res = await fetch("/api/msgHandler", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullname: data.get("fullname"),
          phoneNo: data.get("phoneNo"),
          email: data.get("email"),
          message: data.get("message"),
        }),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.err || "Something went wrong");
      }

      setResponse("Your Message has been sent")

    } catch (error) {
      if (error instanceof Error) {
        setResponse(error.message);
      } else {
        setResponse("Unexpected error occurred");
      }
    }
  };

  return (
    <form
      className="flex flex-col gap-6 text-sm md:text-[16px] relative z-0"
      action=""
      onSubmit={handleSubmit}
    >
      {isSubmit && (
        <div className="w-full h-full backdrop-blur-2xl bg-black/30 absolute inset-0 z-10 flex justify-center items-center">
          {response && (<div className="flex flex-col gap-2 justify-center items-center">
            <p>{response}</p>
          <button
            onClick={() => {
              setIsSubmit(false);
              setIsAnimate(false);
            }}
            className="flex text-[12px] md:text-sm items-center bg-bbg text-bfg px-4 py-2 rounded-xl cursor-pointer hover:opacity-80"
          >
            Send Again
          </button>
          </div>)}
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
