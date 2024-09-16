import React from 'react';
import profilePicture from '../assets/main-aboutme.jpeg';
import '../styles/About.css';

function About() {
    return (
      <section className="about-section">
        <h2>About Me</h2>
        <div className="about-content">
          {/* Developer's Photo or Avatar */}
          <img
            src={profilePicture}
            alt="Developer"
            className="profile-picture"
          />
          
          {/* Short Bio */}
          <p>
            Hello, I am Gerardo Perez, a passionate web developer based in the USA. I have a strong passion for creating web applications that are not only functional but also visually appealing. With 2 years of experience in web development, I have worked on a wide range of projects.
          </p>
          <p>
            When I am not coding, I enjoy backpackig in different countries, going to raves and concerts in the city, long treks in nature, camping expeditions to the mountains, and anything adventurous. I am always eager to learn and stay up-to-date with the latest web development trends and technologies. 
          </p>
        </div>
      </section>
    );
  }

export default About; 