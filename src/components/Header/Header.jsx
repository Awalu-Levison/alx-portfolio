 
 /* eslint-disable no-unused-vars */
import React from 'react';
import './Header.css';
import { assets } from '../../assets/assets'; // Import assets


const Header = () => {
  const { header_img } = assets; // Destructure the image you want

  const myDesc = ["AfroBeats", "HipHop", "Malawi"];
  function genRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
  }

  const description = myDesc[genRandomInt(2)];

  return (
    <div
      className="header"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), transparent), url(${header_img})`,
      }}
    >
      <div className="contents">
        <h1>Foxplayer</h1>
        <h2>Your number 1 music streaming platform</h2>
        <p>Discover {description} music you love, curated just for you.</p>
        <div className="discover">
          <a href="#explore_set">Explore</a>
          <a href="" >
            Sign up <span>&#x27f6;</span>
          </a>
          <span>
            Explore our music and with a click away you can <br />
            enjoy your favorite sounds from across the globe
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
