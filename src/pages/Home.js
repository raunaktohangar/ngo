import React from 'react';
import './Home.css'; // Import CSS for styling

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to VolunteerConnect</h1>
        <p>
          Connecting passionate volunteers with reputable NGOs to create a positive impact.
        </p>
        <button onClick={() => window.location.href = "/explore"} className="cta-button">
          Explore Opportunities
        </button>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>What We Offer</h2>
        <div className="feature-list">
          <div className="feature">
            <h3>For Volunteers</h3>
            <p>
              Discover meaningful opportunities, contribute to crowdfunding campaigns, and collaborate with NGOs
              to make a difference in causes like education, healthcare, and the environment.
            </p>
          </div>
          <div className="feature">
            <h3>For NGOs</h3>
            <p>
              Access passionate, skillful volunteers and reliable donors. Manage resources efficiently and build
              trust through transparent operations.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="call-to-action">
        <h2>Ready to Make a Difference?</h2>
        <button onClick={() => window.location.href = "/signup"} className="cta-button">
          Join Us Today
        </button>
      </section>
    </div>
  );
};

export default Home;
