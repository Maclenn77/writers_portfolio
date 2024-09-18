import React, { useState } from "react";
import { projects } from "../data";
import Project from "./project";

const Portfolio = () => {
    return(
    <main style={{width:'80%', margin: 'auto'}}>
        <section style={{width:'80%', margin:'auto'}} className='text-align-justify'>
        <h1 className="display-1">Portfolio</h1>
        <p className="lead">Since 2018, I have created content in English about start-ups, outsourcing, digital business, and software development.</p>
        <p className="lead">Since 2015, I have written in Spanish about science, digital business, start-ups, and new technologies, with a special focus on the Latin America region, creating digital content for Ebussines Hoy (extinct), Jalisco's newspaper <a href="http://f288610467.informador.mx/Mientras-tanto-en-Mexico...-h201910230003.html">El Informador</a>, and cultural magazines such as Nexos, Punto en Línea, Hysteria.mx and Punto de Partida.</p>
        <p className="lead">For improving the quality and specialization of my articles, I have taken courses about business management, software development, computer sciences, and e-learning.</p>
        <div className="d-flex align-items-center justify-content-between"><a href='mailto:maclenn77@gmail.com' className="btn btn-outline-secondary p-2 mr-auto fw-bold">Contact me for your project</a> <p className="text-secondary text-end">I'm also a <a href='http://juanpaulo.xyz' className="text-dark">Full-Stack Web Developer</a>!</p></div>
        </section>
        <h2 className="text-center my-5">Projects</h2>
        <div className="container">
            <div className="row justify-content-around">
    {projects.map((project) => (
      <Project key={project.title} project={project} />
      ))}
      </div>
      </div>
    </main>)
};

export default Portfolio;