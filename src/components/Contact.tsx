const Contact = () => (
  <div className="max-w-lg ml-20">
    <h1 className="text-4xl font-bold text-gray-800 mb-4 pt-5">Contact</h1>
    <p className="text-l font-semibold text-gray-600 mb-5">
      If you want to get ahold of me, you can send me an email at{" "}
      <a
        href="mailto:marium.deu@gmail.com"
        className="underline text-blue-600 hover:text-blue-800"
      >
        marium.deu@gmail.com
      </a>
    </p>
    <p className="text-l font-semibold text-gray-600 mb-5">
      You can also reach me on LinkedIn at{" "}
      <a
        href="https://www.linkedin.com/in/marium-iqbal-07728139"
        className="underline text-blue-600 hover:text-blue-800"
        target="_blank"
        rel="noopener noreferrer"
      >
        in/marium-iqbal
      </a>
    </p>
    <p className="text-l font-semibold text-gray-600 mb-5">
      Please have a look on my GitHub profile at{" "}
      <a
        href="https://github.com/mariumiqbal"
        className="underline text-blue-600 hover:text-blue-800"
        target="_blank"
        rel="noopener noreferrer"
      >
        mariumiqbal
      </a>
    </p>
  </div>
);

export default Contact;
