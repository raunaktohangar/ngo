import React from 'react';
import './About.css'; // Import CSS for styling

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        Welcome to our platform! Our mission is to bridge the gap between passionate volunteers and reputable NGOs.
        We empower individuals to contribute their time, skills, and energy to drive positive change in their communities.
        By connecting individuals with non-profit organizations, we make it easy to find and join volunteer opportunities
        in diverse causes such as education, healthcare, the environment, and more.
      </p>

      <h2>Our Vision</h2>
      <p>
        We envision a world where every individual has the opportunity to make a difference. Our platform is built
        to bring people together, enabling them to work towards causes they care about while helping NGOs find the
        resources and support they need.
      </p>

      <h2>What We Offer</h2>
      <ul>
        <li>Easy access to volunteering opportunities for individuals.</li>
        <li>Seamless tools for NGOs to manage resources and connect with donors.</li>
        <li>A transparent, efficient system for crowdfunding.</li>
        <li>Empowerment for college students to collaborate with NGOs on surveys and projects.</li>
      </ul>

      <h2>Join Us</h2>
      <p>
        Whether you’re an NGO looking for volunteers and funding or a passionate individual ready to contribute to
        a cause, we are here to help. Together, we can create meaningful, lasting change in our communities.
      </p>
    </div>
  );
};

export default About;
