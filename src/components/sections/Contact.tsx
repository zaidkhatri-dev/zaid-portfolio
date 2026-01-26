import ContactForm from "../sub/ContactForm"

const Contact = () => {
  return (
    <section id="Contact" className='mt-32'>
        <h2 className="text-[22px] md:text-[24px] text-center">Contact</h2>
        <h3 className="text-sfg text-center mt-3 mb-6">Fill out the form and I will get back to you as soon as possible</h3>

        <ContactForm></ContactForm>
    </section>
  )
}

export default Contact