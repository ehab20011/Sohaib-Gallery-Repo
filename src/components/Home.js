// Home.js
import React from 'react';
import './Home.css'; // Import Home styles
import video from './video1.mp4'; // Import the video file

function Home() {
  return (
    <div className="home">
      <video autoPlay muted loop id="video-background" className="video-background">
          <source src={video} type="video/mp4" />
      </video>
      <div className="overlay"></div>
      <div className="container">
        <h1 className="typing-effect">Welcome to Sohaib's Gallery</h1>
      </div>
    </div>
  );
}

export default Home;
