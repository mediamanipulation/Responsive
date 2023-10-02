import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero">
        <div className='bg-Title'>Welcome to Mediamanipulation</div>
        <div className='hd-Para'><h1>The beautiful city on the island of Crete.</h1></div>
      <div className='spcr'></div>
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



      {/* <footer>
        © 2023 Chania Tourism. All Rights Reserved.
      </footer> */}
    </div>
  );
}

export default Home;
