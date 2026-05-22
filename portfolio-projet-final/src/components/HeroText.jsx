function HeroText({ name }) {
  return (
    <div className="max-w-md lg:max-w-lg">
      <span className="text-portfolio-yellow font-bold  tracking-wider block mb-3">
        UI/UX DESIGNER
      </span>
      <h1 className="text-7xl font-extrabold mb-6 ">
        Hello, my name is {name}
      </h1>
      <p className="text-gray-500 text-lg mb-8 max-w-md font-medium tracking-[0.06em]">
        I'm a professional Cooker who loves creating delicious meals.
      </p>

      <div className="flex gap-4">
        <a href="#projects" className="bg-yellow-400 font-semibold px-6 py-3 rounded-lg shadow-md">
          Projects
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer"
           className="border-2 border-black font-semibold px-6 py-3 rounded-lg shadow-md">
          LinkedIn
        </a>
      </div>
    </div>
  );
}

export default HeroText;