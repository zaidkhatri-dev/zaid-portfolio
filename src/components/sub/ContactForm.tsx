import { useState } from "react";
import SendMsg from "../buttons/SendMsg";
import formInValidation from "../../utils/formInValidation";
import { z } from "zod";

const ContactForm = () => {
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  const [isAnimate, setIsAnimate] = useState<boolean>(false);
  const [response, setResponse] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    setIsAnimate(true);

    setTimeout(() => {
      setIsSubmit(true);
      form.reset();
    }, 550);

    const formData = new FormData(form);

    try {
      formInValidation({
        fullname: formData.get("fullname") as string,
        phoneNo: formData.get("phoneNo") as string,
        email: formData.get("email") as string,
        message: formData.get("message") as string,
      });

      formData.append("access_key", "c7316b91-c2f8-4e1e-9f90-f55c0dd016da");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!data.success) {
        throw new Error("Something went wrong");
      }

      setResponse("Your Message has been sent");
    } catch (error) {
      if (error instanceof z.ZodError) {
        setResponse(`${error.issues[0].message}`);
      } else {
        setResponse("Failed to send Message");
      }
    }
  };

  return (
    <form
      className="flex flex-col gap-6 text-sm md:text-[16px] relative z-0"
      method="POST"
      onSubmit={handleSubmit}
    >
      {isSubmit && (
        <div className="w-full h-full backdrop-blur-2xl bg-black/30 absolute inset-0 z-10 flex justify-center items-center">
          {response && (
            <div className="flex flex-col gap-2 justify-center items-center">
              <p>{response}</p>
              <button
                onClick={() => {
                  setIsSubmit(false);
                  setIsAnimate(false);
                }}
                className="flex text-[12px] md:text-sm items-center bg-bbg text-bfg px-4 py-2 rounded-xl cursor-pointer hover:opacity-80 active:scale-92"
              >
                Send Again
              </button>
            </div>
          )}
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
          <label htmlFor="phoneNo">Phone *</label>
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
