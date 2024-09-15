import React from 'react';
import profilePicture from '../assets/main-aboutme.jpeg';

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
            Hi! I'm Gerardo Perez, a passionate web developer with experience in building modern, responsive single-page applications using React and other technologies. I love learning new things and working on challenging projects!
          </p>
        </div>
      </section>
    );
  }

export default About; 

// import React from 'react';

// function About() {
//   return (
//     <div>
//       <h1>About Me</h1>
//       <p>This is the About Me section</p>
//     </div>
//   );
// }

// export default About;