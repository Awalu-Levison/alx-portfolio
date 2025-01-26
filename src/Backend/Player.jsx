/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from 'react';
import './Player.css';
import { getCurrentUser } from './localStorage';
import songs, { shuffleSongs, filterSongs } from './music';
import { assets } from '../assets/assets';

const Player = () => {
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

    useEffect(() => {
        if (audioPlayer.current) {
            audioPlayer.current.src = shuffledSongs[currentSongIndex].url;
            if (isPlaying) audioPlayer.current.play();
        }
    }, [currentSongIndex, isPlaying, shuffledSongs]);

    useEffect(() => {
        localStorage.setItem('playlists', JSON.stringify(playlists));
    }, [playlists]);

    const togglePlayPause = () => {
        if (isPlaying) {
            audioPlayer.current.pause();
        } else {
            audioPlayer.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const changeSong = (direction) => {
        setCurrentSongIndex(
            (prevIndex) => (prevIndex + direction + shuffledSongs.length) % shuffledSongs.length
        );
    };

    const handleSongClick = (index) => {
        setCurrentSongIndex(index);
        setIsPlaying(true);
    };

    const createPlaylist = () => {
        if (!playlistName.trim()) {
            alert('Enter playlist name first!');
            return;
        }
        setPlaylists({ ...playlists, [playlistName]: [] });
        setPlaylistName('');
    };

    const addToPlaylist = (song, playlistName) => {
        setPlaylists((prev) => ({
            ...prev,
            [playlistName]: [...prev[playlistName], song],
        }));
    };

    const deletePlaylist = (name) => {
        const { [name]: _, ...rest } = playlists;
        setPlaylists(rest);
        if (currentPlaylist === name) setCurrentPlaylist('');
    };

    const filteredSongs = filterSongs(shuffledSongs, searchQuery);

    return (
        <div className="player-container">
            <h1 className="welcome">Welcome to Foxplayer!</h1>

            <div className="player">

                {/* Song information */}
                <div className="song-info">
                    <h2>{shuffledSongs[currentSongIndex].title}</h2>
                    <p>
                        {shuffledSongs[currentSongIndex].artist} • {shuffledSongs[currentSongIndex].album} • {shuffledSongs[currentSongIndex].year}
                    </p>
                    <audio ref={audioPlayer} controls></audio>

                    {/* Music control buttons */}
                    <div className="song-controls">
                    <button onClick={() => changeSong(-1)}>
                        <img src={assets.bac} alt="Previous" />
                    </button>
                    <button onClick={togglePlayPause}>
                        {isPlaying ? <img src={assets.pause2} alt="Pause" /> : <img src={assets.play2} alt="Play" />}
                    </button>
                    <button onClick={() => changeSong(1)}>
                        <img src={assets.nn} alt="Next" />
                    </button>
                    <button
                        onClick={() => {
                            const shuffled = shuffleSongs(songs);
                            setShuffledSongs(shuffled);
                            setCurrentSongIndex(0);
                        }}
                    >
                        <img src={assets.shuffle2} alt="Shuffle" />
                    </button>
                </div>

                </div>

                
                <div className="song-cover">
                    <img
                        src={shuffledSongs[currentSongIndex].cover}
                        alt={shuffledSongs[currentSongIndex].title}
                    />
                </div>
            </div>


            {/** Search bar */}
            <input
                type="text"
                placeholder="Search for a song..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="songs-search"
            />


            {/* Song list */}
            <ul className="song-list">
                <h3>All Songs</h3>
                {filteredSongs.map((song, index) => (
                    <li
                        key={index}
                        className={index === currentSongIndex ? 'active-song' : ''}
                    >
                        {/*<img src={song.cover} alt={song.title} />*/}
                        <div
                            className="song-item"
                            onClick={() => handleSongClick(index)}
                        >
                            <img src={song.cover} alt={song.title} className="song-cover-thumbnail" />
                            <p className="song-title">{song.title}</p>
                            <p className="song-details">
                                {song.artist} • {song.album} • {song.year}
                            </p>
                        </div>
                        <button
                            onClick={() => addToPlaylist(song, currentPlaylist)}
                            className='btn1'
                        >
                            Add to Playlist
                        </button>
                    </li>
                ))}
            </ul>

            {/** Playlist content */}
            <div className="playlists-container">
                <h3>Playlists</h3>
                <input
                    type="text"
                    placeholder="New Playlist Name"
                    value={playlistName}
                    onChange={(e) => setPlaylistName(e.target.value)}
                />
                <button onClick={createPlaylist}>Create</button>
                
                <ul className="playlist-list">
                    {Object.keys(playlists).map((name) => (
                        <li key={name}>
                            <span
                                onClick={() => setCurrentPlaylist(name)}
                                className={
                                    currentPlaylist === name
                                        ? 'active-playlist'
                                        : ''
                                }
                            >
                                {name}
                            </span>
                            <button onClick={() => deletePlaylist(name)}>
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>

                {currentPlaylist && (
                    <div className="playlist-songs">
                        <h4>{currentPlaylist}</h4>
                        <ul>
                            {playlists[currentPlaylist].map((song, index) => (
                                <li
                                    key={index}
                                    className={shuffledSongs.indexOf(song) === currentSongIndex ? 'active-song' : ''}
                                >
                                    <div
                                        className="song-item"
                                        onClick={() => {
                                            setCurrentSongIndex(
                                                shuffledSongs.indexOf(song)
                                            );
                                            setIsPlaying(true);
                                        }}
                                    >
                                        <img
                                            src={song.cover}
                                            alt={song.title}
                                            className="song-cover-thumbnail"
                                        />
                                        <p className="song-title">
                                            {song.title}
                                        </p>
                                        <p className="song-details">
                                            {song.artist} • {song.album} • {song.year}
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Player;