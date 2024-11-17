import React from 'react';
import './About.css'; // Import the CSS file

const About = () => {
  return (
    <div className="container">
      <div className="aboutHeader">
        <h1 className="heading">About Us</h1>
      </div>

      <div className="aboutSection">
        <h2 className="subHeading">Welcome to MyApp</h2>
        <p className="paragraph">
          MyApp is an innovative platform dedicated to providing a seamless experience for students and administrators in managing online tests and evaluations. Our application is designed to make learning assessments more accessible, organized, and interactive for students and institutions alike.
        </p>
      </div>

      <div className="aboutSection">
        <h2 className="subHeading">Our Mission</h2>
        <p className="paragraph">
          We aim to empower students by making test-taking a straightforward, engaging, and productive experience. Additionally, we’re committed to supporting educators and administrators with tools that ease the management of their educational content.
        </p>
      </div>

      <div className="aboutSection">
        <h2 className="subHeading">Our Vision</h2>
        <p className="paragraph">
          Our vision is to drive the evolution of educational technology, making a positive impact on both learning and teaching experiences. By bridging students and educational institutions through smart tech solutions, we aim to shape a future where learning is universally accessible and engaging.
        </p>
      </div>

      <div className="contact">
        <p>
          For more information, reach out to us at: <a href="" className="link">info@myapp.com</a>
        </p>
      </div>
    </div>
  );
};

export default About;
