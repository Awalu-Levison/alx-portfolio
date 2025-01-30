const songs = [
    { 
        title: "Malele", 
        artist: "Teddy", 
        album: "Zikomo", 
        year: 2023, 
        url: "./Teddy.mp3", 
        cover: "./teddy_cover.png" 
    },
    { 
        title: "Dumpha", 
        artist: "Saint", 
        album: "Love Songs", 
        year: 2022, 
        url: "./Saint.mp3", 
        cover: "./saint_cover.png" 
    },
    { 
        title: "Jamu", 
        artist: "Mbosso", 
        album: "Afro Beats", 
        year: 2021, 
        url: "./Mbosso.mp3", 
        cover: "./mbosso_cover.png" 
    },

    { 
        title: "Vula-Sekele", 
        artist: "Harry-Cane-Ft-Eemoh", 
        album: "Afro Beats", 
        year: 2021, 
        url: "./Harry-Cane-Ft-Eemoh-Vula-Sekele.mp3", 
        cover: "./vula.png" 
    },


    { 
        title: "KA JIVE", 
        artist: "Various Artists - Ka Jive-Theme-Song-Malawian_Hit", 
        album: "Afro Beats", 
        year: 2018, 
        url: "./Various-Artists-KaJive-Theme-Song-Malawian_Hit.mp3", 
        cover: "./kajive.png" 
    },
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
