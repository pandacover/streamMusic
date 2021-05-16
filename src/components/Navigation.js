import React from 'react';
import { Link } from 'react-router-dom';
import './css/navbar.css';

function Navigation () {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand">YEEEET</a>
                <ul className="navbar-nav">
                <li className="nav-item">
                        <Link to="/" className="nav-link" href="#">Explore</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/playlist" className="nav-link" href="#">Playlist</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link" href="#">About</Link>
                    </li>
                </ul>
            </nav>
        )
    }

export default Navigation;