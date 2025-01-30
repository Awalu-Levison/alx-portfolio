/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './Explore.css';
import { Music_List } from '../../assets/assets.js';

export default function Explore() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  function handleSelect(topic) {
    setSelectedTopic(topic);
  }

  const tabContent = selectedTopic ? (
    <div id="tab-content">
      <h3>{Music_List[selectedTopic].title}</h3>
      <p>{Music_List[selectedTopic].description}</p>
      <pre>
        <code>{Music_List[selectedTopic].code}</code>
      </pre>
    </div>
  ) : (
    <div className="default-info" id="default-content">
      <h3>Genre description goes here</h3>
      <p>Select a genre to dive into the world of music you love.</p>
      <img src="/assets/default_music.png" alt="Default Music" className="default-image" />
    </div>
  );

  return (
    <section className="explore-session" id="explore_set">
      <header className="explore-header">
        <h1>Explore Music</h1>
        <p>Discover genres and find the music you love the most.</p>
      </header>

      <div className="grid-container">
        {Object.keys(Music_List).map((genre, index) => (
          <div
            key={index}
            className={`grid-item ${selectedTopic === genre ? 'active' : ''}`}
            onClick={() => handleSelect(genre)}
          >
            <img src={Music_List[genre].image} alt={genre} className="genre-image" />
            <h3>{genre}</h3>
            <button className="explore-button">
              {selectedTopic === genre ? 'Clicked' : 'Click'}
            </button>
          </div>
        ))}
      </div>

      {tabContent}
    </section>
  );
}
