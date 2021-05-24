import React from 'react';
import List from './reComp/List';
import './css/styles.css';

function Body() {

        {/*Main Landing Page || Dynamically rendering songs list here || Add any songs according to the given array structure in const songs*/}
        const songs = [
            {
                id:1,
                name: "LemonBoy",
                thumb: "https://wallpapercave.com/wp/wp3602192.jpg",
                artist: "Cavetown",
                genre: "Pop"
            },
            {
                id:2,
                name: "Stop this train",
                thumb: "https://m.media-amazon.com/images/I/51DcBk-hOFL._SS500_.jpg",
                artist: "Jonh Mayer",
                genre: "Pop"
            },
            {
                id:3,
                name: "Heather",
                thumb: "https://64.media.tumblr.com/0f5390ff383864b81222b004bedf914f/e8942750230f5bda-2b/s540x810/16f3c688e0d10c1b6c852c8d49e72b204f8ed117.png",
                artist: "Conan Gray",
                genre: "Pop"
            }
            ,
            {
                id:4,
                name: "Peaches",
                thumb: "https://www.the360report.com/wp-content/uploads/2021/05/Justin-Bieber-Peaches-artwork.png",
                artist: "Justin Bieber",
                genre: "Pop"
            }
        ];

        return (
            <div className="container">
                <div className="exp-title">
                    <div className="exp-title-txt">This is what's trending on YEEEET community!</div>
                </div>
                <div className="body-container">
                    <div className="row">
                        {songs.map((songs) => (
                                <List key={songs.id} songs={songs} />
                            ))}
                    </div>
                    <div className="row row-second">
                        {songs.map((songs) => (
                                <List key={songs.id} songs={songs} />
                            ))}
                    </div>
                </div>      
            </div>

        )
    }

export default Body;