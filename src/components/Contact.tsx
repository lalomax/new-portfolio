const Contact = () => {
  return (
    <section className="bg-secondaryDark  text-primaryLight px-5 py-32" id="contact">
      <div className="text-center md:w-[60%] mx-auto text-white">
        <h2 className="text-4xl inline-block font-bold mb-5 border-b-[5px]  mx-auto border-indigo-600 pb-2">
          Contact Me
        </h2>
        <p>
          I am currently open for a fulltime Frontend Developer role. If you
          want to discuss about that feel free to email me or call me.
        </p>

        <p className="py-2">
          <span className="font-bold">Email:</span> lalomax365@gmail.com
        </p>
        <p className="py-2">
          <span className="font-bold">Phone:</span> +591 77595073
        </p>
      </div>
    </section>
  );
};

export default Contact;