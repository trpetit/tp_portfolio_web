import CookieImage from '../assets/Cookie.png';
import CitronImage from '../assets/Citron.png';
import TarteImage from '../assets/Tarte.png';
import SingleProject from './SingleProject';


function Projects() {

const projectsList = [
    { id: 1, title: "Cookies fondants", description: "Des délicieux cookies aux pépites de chocolat", image: CookieImage },
    { id: 2, title: "Tarte au citron meringuée", description: "Une tarte sucrée et rafraichissante", image: CitronImage },
    { id: 3, title: "Tarte chocolat caramel", description: "Une tarte au chocolat gourmande", image: TarteImage }
  ];



  return (
  
    <section className=" py-12 max-w-4xl mx-auto">
    <h3 className="mb-8 text-center font-elegant font-bold text-5xl">Projects</h3>
    <span className=" block  bg-portfolio-yellow rounded-xl p-[0.1em] w-[4em] mx-auto">
    
    </span>
      {projectsList.map((project, index) => (
        <SingleProject
          key={project.id}
          title={project.title}
          description={project.description}
          image={project.image}
          index={index}
          className="my-8"
        />
      ))}
    <h3 className="mb-8 text-center font-elegant font-bold text-5xl">Projects</h3>
    <span className=" block  bg-portfolio-yellow rounded-xl p-[0.1em] w-[4em] mx-auto"></span>
    </section>
  );
}

export default Projects;