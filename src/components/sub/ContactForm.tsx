import SendMsg from "../buttons/SendMsg"

const ContactForm = () => {
    return (
        <form className="flex flex-col gap-6 text-sm md:text-[16px]" action="">
            <div className="flex flex-col md:flex-row gap-6">
                <div className="flex flex-col gap-2 h-full w-full">
                    <label htmlFor="fullname">Name</label>
                    <input type="text" id="fullname" placeholder="Full Name" name="fullname" className="rounded-lg bg-sbg text-pfg placeholder:text-sfg px-3 py-1.5 border-2 border-transparent focus:border-bbg focus:outline-none transition-colors" />
                </div>

                <div className="flex flex-col gap-2 h-full w-full">
                    <label htmlFor="phoneNo">Phone</label>
                    <input type="text" id="phoneNo" placeholder="+1 (123) xxx-xxxx" name="phoneNo" className="rounded-lg bg-sbg text-pfg placeholder:text-sfg px-3 py-1.5 border-2 border-transparent focus:border-bbg focus:outline-none transition-colors" />
                </div>
            </div>

            <div className="flex flex-col gap-2 h-full w-full">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="your.email@example.com" name="email" className="rounded-lg bg-sbg text-pfg placeholder:text-sfg px-3 py-1.5 border-2 border-transparent focus:border-bbg focus:outline-none transition-colors" />
            </div>

            <div className="flex flex-col gap-2 h-full w-full">
                <label htmlFor="message">Message</label>
                <textarea id="message" placeholder="Send me a short message or just say Hello" name="message" className="rounded-lg bg-sbg text-pfg placeholder:text-sfg px-3 py-1.5 w-full h-40 resize-none border-2 border-transparent focus:border-bbg focus:outline-none transition-colors" />
            </div>

            <div className="flex justify-center mt-3">
            <SendMsg />
            </div>
        </form>
    )
}

export default ContactForm