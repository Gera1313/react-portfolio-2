import React from 'react';

function Resume() {
  return (
    <section className="resume-section">
      <h2>Resume</h2>

      {/* Resume Link To Download */}
      <div className="resume-download">
        <a href="./assets/resume_gerardo_perez.pdf" download>Download My Resume Here</a>
      </div>


    </section>
  );
}

export default Resume;
