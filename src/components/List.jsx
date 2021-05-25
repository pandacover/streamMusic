import { useState } from 'react';
import './css/styles.css';
import './css/songCards.css';

export const List = ({ songs }) => {
  
  const [togglePlay, setTogglePlay] = useState(false);
  const handlePlay = e => {
    console.log(window.$_currentPlaying);
  }

  return (
    <div className="col-3">
      <div className="card">
        <img className="card-img-top" src={songs.thumb} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{songs.name}</h5>
          <p className="card-text">Artist&nbsp;: {songs.artist}<br />Genre: {songs.genre}</p>
          <audio src={songs.url} controls className='play-btn' onPlay={handlePlay} />
        </div>
      </div>
    </div>
  );
}