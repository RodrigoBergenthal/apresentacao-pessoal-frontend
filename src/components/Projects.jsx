import React from "react";
import bladeRunner from "../assets/projeto.png";
import spiderMan from "../assets/projeto2.png";
import padaria from "../assets/projeto3.png";
import sorteador from "../assets/projeto4.png";
import pagina from "../assets/projeto5.png";
import disney from "../assets/projeto6.png";

const projects = [
  {
    id: 1,
    name: " Page Blade Runner",
    technologies: "Html - CSS - Javascript - Sass - Gulp",
    image: bladeRunner,
    github: "https://github.com/RodrigoBergenthal/Blade-Runner---Gulp",
  },
  {
    id: 2,
    name: "Page SpiderMan",
    technologies: "Html - CSS - Javascript",
    image: spiderMan,
    github: "https://github.com/RodrigoBergenthal/Multiverso-Spider-Man-Criando-um-Site-com-HTML--CSS-e-JavaScript",
  },
  {
    id: 3,
    name: "Site Padaria Porto ALegre",
    technologies: "HTML, CSS, JavaScript e BOOTSTRAP ",
    image: padaria,
    github: "https://github.com/RodrigoBergenthal/14.-Projeto-3---Site-em-Bootstrap---EBAC-Full-stack",
  },
  {
    id: 4,
    name: "Sorteador Grunt",
    technologies: "HTML, CSS, JavaScript e Grunt (para automação de tarefas)",
    image: sorteador,
    github: "https://github.com/RodrigoBergenthal/Sorteador_Grunt/",
  },
  {
    id: 5,
    name: "Página Pessoal",
    technologies: "HTML, CSS3 (LESS), JavaScript e Google Fonts ",
    image: pagina,
    github: "https://github.com/RodrigoBergenthal/Pagina-Pessoal-em-LESS",
  },
  {
    id: 6,
    name: "Disney+ Clone",
    technologies: "HTML, CSS, JavaScript, Gulp e SASS ",
    image: disney,
    github: "https://github.com/RodrigoBergenthal/Tarefa-21---Disney-Plus-Clone",
  },
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className=" text-4xl  font-bold text-center mb-12  bg-gradient-to-r from-red-800 to-red-300'">Meus Projetos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-800 p-6 rounded-lg  hover:shadow-lg 
            transform transition-transform duration-300  hover:animate-shake animate-infinite animate-duration-[5000ms] animate-ease-linear ">
              <img src={project.image} alt={project.name} className="rounded-lg mb-4 
              w-full h-48 object-cover hover:scale-110" />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <a href={project.github} className="inline-block bg-gradient-to-r 
              from-red-800 to-red-400 text-white px-4 py-2 rounded-full" target="_blank" 
              rel="noopener noreferrer">GitHub</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;