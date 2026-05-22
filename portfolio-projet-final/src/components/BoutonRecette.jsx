function BoutonRecette({ url,className }) {
  return (
    <a 
      href={url}
      target="_blank"
      rel="noreferrer"
      className={`inline-block bg-portfolio-yellow text-portfolio-dark font-semibold px-6 py-3 rounded-xl shadow-sm hover:shadow-md hover:bg-opacity-90 transform hover:-translate-y-0.5 transition-all duration-200 text-center ${className || ''}`}
    >
      View Recipe
    </a>
  );
}

export default BoutonRecette;