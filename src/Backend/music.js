const songs = [
    { title: "malele", url: "/backend/songs/Teddy.mp3" },
    { title: "Dumpha", url: "/backend/songs/Saint.mp3" },
    { title: "jamu", url: "path/to/song3.mp3" }
    ];
    
    
    
    export const shuffleSongs = (songsArray) => {
    return [...songsArray].sort(() => Math.random() - 0.5);
    };
    
    
    export const filterSongs = (songsArray, query) => {
    return songsArray.filter(song =>
    song.title.toLowerCase().includes(query.toLowerCase())
    );
    };
    
    
    
    export default songs;