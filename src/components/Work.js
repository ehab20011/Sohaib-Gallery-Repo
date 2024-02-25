import React from 'react';
import './Work.css'; 
import workpicone from './workpicone.jpg';
import workpictwo from './workpictwo.jpg';
import workpicthree from './workpicthree.jpg';
import WorkPic from './WorkPic.jpg'; //

function Work() {
  return (
    <div className="work-background">
      <img src={WorkPic} alt="Background" className="background-image" />
      <div className="work-container">
        <div className="image-container">
          <img src={workpicone} alt="Work Image 1" className="work-image" />
          <div className="overlay"><div className="text">Sports</div></div>
        </div>
        <div className="image-container">
          <img src={workpictwo} alt="Work Image 2" className="work-image" />
          <div className="overlay"><div className="text">Portraits</div></div>
        </div>
        <div className="image-container">
          <img src={workpicthree} alt="Work Image 3" className="work-image" />
          <div className="overlay"><div className="text">Automotive</div></div>
        </div>
      </div>
    </div>
  );
}

export default Work;
