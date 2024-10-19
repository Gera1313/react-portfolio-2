import Project from './Project';
import '../styles/Portfolio.css';

function Portfolio() {
  const projects = [
    { id: 1, title: 'Vroomu : A Vehicle Service Guide', description: 'This was designed to help consumers stay up to day on their vehicles Service Maintenances and Recall Repairs', link: 'https://gera1313.github.io/Vroomu-A-Vehicle-Service-Guide/' },
    { id: 2, title: 'A Tech Blog', description: 'A functional tech blog where people can log in and create, edit, or delete posts', link: 'https://radiant-harbor-32410-4d76770b0899.herokuapp.com/' },
    { id: 3, title: 'Note Taker', description: 'A web application that can be used to write and save notes.', link: 'https://evening-peak-83307-f56098080a83.herokuapp.com/' },
    { id: 4, title: 'Password Generator', description: 'An application that enables employees to generate random passwords based on criteria that they’ve selected.', link: 'https://gera1313.github.io/Password-Generator/' },
    { id: 5, title: 'Weather Dashboard', description: 'This is a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS.', link: 'https://gera1313.github.io/weather-dashboard/' },
    { id: 6, title: 'Country Quiz', description: 'A quiz that tests your knowledge of world capital cities', link: 'https://gera1313.github.io/Country-Quiz/' },
    { id: 7, title: 'GiveEasy', description: 'A platform where users can create fundraisers for charitable causes, and donors can make contributions.', link: 'https://giveeasy.netlify.app/' },
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