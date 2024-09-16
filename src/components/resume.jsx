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


    </section>
  );
}

export default Resume;
