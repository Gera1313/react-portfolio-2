import React from "react";

function Resume() {
  return (
    <section className="resume-section">
      <h2>Resume</h2>

      {/* Resume Link To Download */}
      <div className="resume-download">
        <a href="./assets/resume_gerardo_perez.pdf" download>
          Download My Resume Here
        </a>
      </div>

      {/* Skills Section */}
      <div className="skills-section">
        <h3>Skills</h3>
        <ul>
          <li>JavaScript (ES6+)</li>
          <li>React.js</li>
          <li>Node.js</li>
          <li>HTML5/CSS3</li>
          <li>SQL</li>
          <li>NoSQL</li>
          <li>Python</li>
          <li>REST APIs</li>
          <li>Version Control (Git/GitHub)</li>
          <li>Responsive Web Design</li>
        </ul>
      </div>

      {/* Experience Section */}
      <div className="experience-section">
        <h3>Experience</h3>
        <div className="job">
          <h4>Software Test Engineer</h4>
          <p>Meta | Sept 2021 - Present</p>
          <ul>
            <li>
              Work queues of bug reports generated on internal apps to ensure a strong final product for public release.
            </li>
            <li>
            Reproduce reported bugs to ensure engineers have a comprehensive, detailed report in order to fix bugs most effectively.
            </li>
            <li>
            Understand and communicate product launch risk and severity of issues to partners.
            </li>
            <li>Meticulously document findings.</li>
            <li>
            Communicate effectively with cross functional partners in Operations and Product.
            </li>
            <li>
            Develop test cases and scenarios in order to pinpoint the root cause of product bugs.  
            </li>
            <li>
            Collaborate with team members on both general and product specific issues. 
            </li>
            <li>
            Data analysis - collect and organize triage specific data.
            </li>
            <li>Navigate and troubleshoot SQL queries from internal users utilizing Meta internal tools.</li>
            <li>Enter commands using Python and upload to the hardware to debug.</li>
          </ul>
        </div>
        <div className="job">
          <h4>Freelance Web Developer</h4>
          <p>Self-employed | June 2021 - Dec 2022</p>
          <ul>
            <li>
              Built custom websites for small businesses using modern web
              technologies.
            </li>
            <li>
              Provided ongoing support and updates for existing client websites.
            </li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>

      {/* Education Section */}
      <div className="education-section">
        <h3>Education</h3>
        <p>Full Stack Web Development Bootcamp, ABC Coding Academy | 2022</p>
        <p>Bachelor of Science in Computer Science, University of XYZ | 2021</p>
      </div>
    </section>
  );
}

export default Resume;
