import React from 'react';
import { Link } from 'react-router-dom';
import videoBg from '../Assets/videoBg.mp4';
import videoGameImage from '../Assets/videoGame3.png';
import ContactUs from '../Assets/unch.jpg';
import './Hero.css'; 




const Hero = () => {
  return (
    <>
      <div class="banner">
        <div className="bg">
          <div className="content">
            <h2>A new Home for <br /> Game Lovers</h2>
          </div>
          <video id="myVideo" src={videoBg} autoPlay loop muted/>
        </div>
      </div>

      <div className="about">
        <div className="contentBx">
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque error beatae laborum, animi rem pariatur dicta et nihil, magni maxime voluptatem accusamus ad! Officia tenetur, necessitatibus magnam dicta dolorum incidunt.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque error beatae laborum, animi rem pariatur dicta et nihil, magni maxime voluptatem accusamus ad! Officia tenetur, necessitatibus magnam dicta dolorum incidunt.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque error beatae laborum, animi rem pariatur dicta et nihil, magni maxime voluptatem accusamus ad! Officia tenetur, necessitatibus magnam dicta dolorum incidunt.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque error beatae laborum, animi rem pariatur dicta et nihil, magni maxime voluptatem accusamus ad! Officia tenetur, necessitatibus magnam dicta dolorum incidunt.
          </p>
          <Link to="/about">Read More...</Link>
        </div>
        <img id="myImage" src={videoGameImage}/>
      </div>

    </>
  );
};

export default Hero;
