import React from "react";
import '../styles/Resume.css';

function Resume() {
  return (
    <section className="resume-section">
      <h2>Resume</h2>

      {/* Resume Link To Download */}
      <div className="resume-download">
        <a href="/resume_gerardo_perez.pdf" download>
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
          <h4>Technical Support Specialist</h4>
          <p>Neiman Marcus Direct | Oct. 2006 - Mar. 2017</p>
          <ul>
            <li>
            Provided multi-channel (chat, email, & phone) technical support to customers in the customer care department, assisting with inquiries, order placements, and resolving package or order issues via online web and our various applications.
            </li>
            <li>
            Promoted to Tier 2 technical support after one year with the company, responsible for handling escalated customer issues from Tier 1 support and ensuring a timely resolution.
            </li>
            <li>Assisted colleagues with inquiries regarding company policies, procedures, and computer systems functionality, serving as a resource for troubleshooting and problem-solving.
            </li>
            <li>Provided technical support for Tier 1 agents, offering guidance on complex customer inquiries and escalating issues to Tier 3 support when necessary.
            </li>
            <li>
            Collaborated with cross-functional teams to address systemic issues and improve customer support processes.
            </li>
            <li>
            Contributed to the development and implementation of training programs for new technical support agents, ensuring consistent service delivery and adherence to company standards.
            </li>
            <li>
            Facilitated knowledge sharing sessions to enhance team proficiency in troubleshooting techniques and system functionalities.
            </li>
          </ul>
        </div>
      </div>

      {/* Education Section */}
      <div className="education-section">
        <h3>Education</h3>
        <p>Full Stack Web Development Bootcamp, University of Texas San Antonio | 2023</p>
        <p>Certified Entry Level Python Programmer, Goodwill Training Center | 2021</p>
        <p>Bachelor of Arts in International Relations, University of North Texas | 2015</p>
      </div>
    </section>
  );
}

export default Resume;
