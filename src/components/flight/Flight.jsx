import React from 'react';
import './Flight.css';

const Flight = () => {
  return (
    <div className="home-container">
      <section className="hero">
        <h1>Flight Page</h1>
        <p>The beautiful city on the island of Crete.</p>
        <button>Learn More</button>
      </section>

      <section className="features">
        <div className="feature">
          <div className="feature-icon">🌆</div>
          <h3>Stunning Architecture</h3>
          <p>Historic buildings and modern structures blend in harmony.</p>
        </div>
        <div className="feature">
          <div className="feature-icon">🍲</div>
          <h3>Delicious Cuisine</h3>
          <p>Experience the rich flavors of Cretan food.</p>
        </div>
        <div className="feature">
          <div className="feature-icon">🏖️</div>
          <h3>Beautiful Beaches</h3>
          <p>Relax on pristine beaches and enjoy the Mediterranean sun.</p>
        </div>
      </section>

      <section className="cta">
        <h2>Interested in Visiting?</h2>
        <p>Sign up for our travel newsletter to get the latest updates.</p>
        <button>Sign Up Now</button>
      </section>

      {/* <footer>
        © 2023 Chania Tourism. All Rights Reserved.
      </footer> */}
    </div>
  );
}

export default Flight;
