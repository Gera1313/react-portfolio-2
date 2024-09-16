import React from 'react';
import Project from './Project';

function Portfolio() {
  const projects = [
    { id: 1, title: 'Project 1', description: 'description of project here', link: 'https://github.com/Gera1313/Password-Generator' },
    { id: 1, title: 'Project 1', description: 'description of project here', link: 'https://github.com/Gera1313/Password-Generator' },
    { id: 1, title: 'Project 1', description: 'description of project here', link: 'https://github.com/Gera1313/Password-Generator' },
    { id: 1, title: 'Project 1', description: 'description of project here', link: 'https://github.com/Gera1313/Password-Generator' },
    { id: 1, title: 'Project 1', description: 'description of project here', link: 'https://github.com/Gera1313/Password-Generator' },
    { id: 1, title: 'Project 1', description: 'description of project here', link: 'https://github.com/Gera1313/Password-Generator' },
  ];

  return (
    <section className="portfolio-section">
      <h2>My Projects</h2>
      <div className="project-list">
        {projects.map((project) => (
          <Project 
            key={project.id} 
            title={project.title} 
            description={project.description} 
            link={project.link} 
          />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;