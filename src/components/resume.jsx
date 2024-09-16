import React from 'react';

function Resume() {
  return (
    <section className="resume-section">
      <h2>Resume</h2>

      {/* Resume Link To Download */}
      <div className="resume-download">
        <a href="./assets/resume_gerardo_perez.pdf" download>Download My Resume Here</a>
      </div>

            {/* Skills Section */}
            <div className="skills-section">
        <h3>Skills</h3>
        <ul>
          <li>JavaScript (ES6+)</li>
          <li>React.js</li>
          <li>Node.js</li>
          <li>HTML5/CSS3</li>
          <li>REST APIs</li>
          <li>Version Control (Git/GitHub)</li>
          <li>Responsive Web Design</li>
        </ul>
      </div>

            {/* Experience Section */}
            <div className="experience-section">
        <h3>Experience</h3>
        <div className="job">
          <h4>Junior Web Developer</h4>
          <p>Company Name | Jan 2023 - Present</p>
          <ul>
            <li>Developed and maintained responsive websites using React.js and Node.js.</li>
            <li>Collaborated with a team of developers to build web applications for client projects.</li>
            <li>Worked on improving site performance and optimizing components.</li>
          </ul>
        </div>
        <div className="job">
          <h4>Freelance Web Developer</h4>
          <p>Self-employed | June 2021 - Dec 2022</p>
          <ul>
            <li>Built custom websites for small businesses using modern web technologies.</li>
            <li>Provided ongoing support and updates for existing client websites.</li>
          </ul>
        </div>
      </div>


    </section>
  );
}

export default Resume;
