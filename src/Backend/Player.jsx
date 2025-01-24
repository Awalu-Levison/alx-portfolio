/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from 'react';
import './Player.css'
import { getCurrentUser } from './localStorage';
import songs, { shuffleSongs, filterSongs} from './Music';



const Player = () => {

//set the variables
const [currentSongIndex, setCurrentSongIndex] = useState(0);
const [isPlaying, setIsPlaying] = useState(false);
const [shuffledSongs, setShuffledSongs] = useState([...songs]);
const [searchQuery, setSearchQuery] = useState('');

const [playlists, setPlaylists] = useState(() => {
const savedPlaylists = localStorage.getItem('playlists');
return savedPlaylists ? JSON.parse(savedPlaylists) : {};
});

const [currentPlaylist, setCurrentPlaylist] = useState('');
const [playlistName, setPlaylistName] = useState('');
const audioPlayer = useRef(null);
const currentUser = getCurrentUser();
const userName = currentUser ? currentUser.name : '';

// shuffling functionalities
useEffect(() => {
if (audioPlayer.current) {
audioPlayer.current.src = shuffledSongs[currentSongIndex].url;
if (isPlaying) {audioPlayer.current.play();}
}
}, [currentSongIndex, isPlaying, shuffledSongs]);

//playlist funtionalities
useEffect(() => {
localStorage.setItem('playlists', JSON.stringify(playlists));
}, [playlists]);

//song chnage functionalities
const changeSong = (direction) => {
setCurrentSongIndex((prevIndex) => 
(prevIndex + direction + shuffledSongs.length) % shuffledSongs.length);
};

//play and pause toggling funtionalities
const togglePlayPause = () => {
if (isPlaying) {
audioPlayer.current.pause();
} else {audioPlayer.current.play();}
setIsPlaying(!isPlaying);
};


const handleShuffleSongs = () => {
setShuffledSongs(shuffleSongs(shuffledSongs));
setCurrentSongIndex(0); // calling this function will rest the songs to the first songs in the list
};

//search functionalities
const handleSearch = (event) => {
setSearchQuery(event.target.value);
};


const filteredSongs = filterSongs(shuffledSongs, searchQuery);

const addToPlaylist = (song) => {
if (currentPlaylist) {setPlaylists({...playlists, [currentPlaylist]: [...(playlists[currentPlaylist] || []), song]});
} else {alert('Please select or create a playlist first.');}};


const handlePlaylistNameChange = (event) => {setPlaylistName(event.target.value);};


const createPlaylist = () => {
if (playlistName) {setPlaylists({...playlists,[playlistName]: []});
setPlaylistName('');} else {alert('Please enter a playlist name.');}
};


const selectPlaylist = (playlist) => {setCurrentPlaylist(playlist);
setShuffledSongs(playlists[playlist]);
setCurrentSongIndex(0);
};


return (




<div className="songs-player">
<h1>Welcome to Foxplayer, Good Morning {userName}!</h1>

<div className="player">
<audio ref={audioPlayer} controls></audio>
<img src="path/to/song-image.jpg" alt="Song" className="song-image" />
</div>

<div className="songs-controls">
<button onClick={() => changeSong(-1)}>Previous</button>
<button onClick={togglePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
<button onClick={() => changeSong(1)}>Next</button>
<button onClick={handleShuffleSongs}>Shuffle</button>
</div>


<input type="text" placeholder="Search for a song..."  value={searchQuery} 
onChange={handleSearch} className="songs-search"/>

<ul className="song-list">{filteredSongs.map((song, index) => (
    <li key={index}>{song.title}<button onClick={() => addToPlaylist(song)}>Add to Playlist</button></li>
))}
</ul>

<div className="create-songs-playlist">
<input type="text" placeholder="Enter playlist name..." value={playlistName} 
onChange={handlePlaylistNameChange} />
<button onClick={createPlaylist}>Create Playlist</button>
</div>

<div className="songs-playlists">
<h2>My Playlist</h2>
<ul>{Object.keys(playlists).map((playlist, index) => (
<li key={index} onClick={() => selectPlaylist(playlist)}>
{playlist}
</li>
))}
</ul>
</div>

{currentPlaylist && (
<div className="songs-recent-playlist">
<h3>Current Playlist: {currentPlaylist}</h3>
<ul>
{playlists[currentPlaylist].map((song, index) => (
<li key={index}>{song.title}</li>
))}
</ul>
</div>
)}
</div>
);
};


export default Player;