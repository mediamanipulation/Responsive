import React from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faPalette } from '@fortawesome/free-solid-svg-icons';
import { faCube } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero">
      <div className='pad'>
        <div className='bg-Title animated-title'>Mediamanipulation</div>
        <div className='pad'>
          <div className="flex-container">
            <div className="flex-item">design</div>
            <div className="flex-item">developement</div>
            <div className="flex-item">create</div>
          </div> 
          </div> 
          <div className='spcr'>
            <button>Learn More</button>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="feature">
        <FontAwesomeIcon icon={faPenToSquare} fade size="2xl" tyle={{color: "#0fc7b2",}} />
          <h3>design</h3>
          <p>Design is the fusion of form and function, transcending mere aesthetics to solve complex problems. 
            It prioritizes user experiences, balancing beauty with purpose. As a bridge between humans and technology, 
            design shapes our interactions and future in meaningful ways.</p>
        </div>
        <div className="feature">
        <FontAwesomeIcon icon={faCube} fade size="2xl" tyle={{color: "#0fc7b2",}} />
          <h3>developement</h3>
          <p>Development is the systematic process of transforming ideas into tangible outcomes. 
            It encompasses the journey from concept to completion, driven by innovation and iteration. 
            Through development, visions become realities, adapting to challenges and fulfilling user needs.</p>
        </div>
        <div className="feature">
        <FontAwesomeIcon icon={faPalette} fade size="2xl" tyle={{color: "#0fc7b2",}} />
          <h3>create</h3>
          <p>Creation is the birth of something new from the spark of inspiration. 
            It's the alchemy of turning imagination into reality, marrying originality with purpose. 
            Through creation, ideas transcend their abstract origins, materializing into tangible 
            expressions that resonate with others.</p>
        </div>
      </section>

      {/* <footer>
        © 2023 Chania Tourism. All Rights Reserved.
      </footer> */}
    </div>
  );
}

export default Home;
