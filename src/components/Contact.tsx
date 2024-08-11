import "./contact.css"
const Contact = () => {
  return (
    <section className="bg-secondaryDark  text-primaryLight px-5 py-32" id="contact">
      <div className="text-center  mx-auto ">
        <h2 className="text-4xl inline-block font-bold mb-5 border-b-[5px]  mx-auto border-indigo-600 pb-2">
          Contact Me
        </h2>
        <p>
          I am currently open for a fulltime Frontend Developer role. If you
          want to discuss about that feel free to email me or call me.
        </p>

        
          <details>
            <summary>
              <span className="font-bold">Email</span>
            </summary>
            <a href="mailto:lalomax365@gmail.com">lalomax365@gmail.com</a>
          </details>
          
          <details>
            <summary>
              <span className="font-bold">Phone</span>
            </summary>
            +591 77595073
          </details>

        
      
      </div>
    </section>
  );
};

export default Contact;