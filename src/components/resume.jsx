import '../styles/Resume.css';

function Resume() {
  return (
    <section className="resume-section">
      <h2>Resume</h2>

      {/* Resume Link To Download */}
      <div className="resume-download">
        <a href="/gerardo_perez_cv.pdf" download>
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
          <li>Express</li>
          <li>SQL</li>
          <li>NoSQL</li>
          <li>Python</li>
          <li>REST APIs</li>
          <li>GraphQL</li>
          <li>Version Control (Git/GitHub)</li>
          <li>Responsive Web Design</li>
          <li>jQuery</li>
          <li>MERN</li>
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
          <h4>Technical Support Specialist II</h4>
          <p>Neiman Marcus Direct | Oct. 2006 - Mar. 2017</p>
          <ul>
            <li>
            Provided multi-channel technical support (chat, email, and phone) to customers in the customer care department, addressing inquiries, processing orders, and resolving package and order issues through web-based platforms and applications.
            </li>
            <li>
            Promoted to Tier 2 technical support after one year, handling escalated cases from Tier 1 and delivering timely resolutions through advanced troubleshooting techniques, diagnosing software malfunctions, connectivity issues, and system errors.
            </li>
            <li>Acted as a key resource for colleagues, offering assistance with company policies, procedures, and technical issues related to system performance, software compatibility, and application functionality, with occasional use of basic SQL to resolve data inconsistencies.
            </li>
            <li>Supported Tier 1 agents by providing technical guidance on more complex customer issues, such as application crashes, software updates, and network connectivity problems, escalating to Tier 3 when necessary.
            </li>
            <li>Collaborated with cross-functional teams to identify and resolve root causes of recurring issues and improve customer support processes.</li>
            <li>
            Played an active role in developing and implementing training programs for new technical support agents, ensuring they were equipped to handle common software and system-related issues. 
            </li>
            <li>Led knowledge-sharing sessions to enhance troubleshooting skills, covering a range of topics from hardware diagnostics to software configuration and system performance optimization.</li>
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
