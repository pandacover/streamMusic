import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Popup from './Popup';
import '../css/styles.css';
import '../css/songCards.css';
import 'play.svg';

export default function List(props) {

    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="col-3">
            <div className="card">
                <img className="card-img-top" src={props.songs.thumb} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{props.songs.name}</h5>
                    <p className="card-text">Artist&nbsp;: {props.songs.artist}<br />Genre: {props.songs.genre}</p>
                    <Link to="#" class="" role="button" ><img className="play-btn" src="play.svg" alt="play" onClick={togglePopup} /></Link>
                </div>
            </div>

            {isOpen && <Popup
                content={<>
                    <b>Now Playing!</b>
                    <p>{props.songs.name}</p>
                </>}
                handleClose={togglePopup}
            />}
        </div>
    );
}