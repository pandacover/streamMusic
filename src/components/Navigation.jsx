import React from 'react';
import { Link } from 'react-router-dom';
import './css/navbar.css';

export const Navigation = () => {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand">YEEEET</a>
                <ul className="navbar-nav">
                <li className="nav-item">
                        <Link to="/" className="nav-link">Explore</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/playlist" className="nav-link">Playlist</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link">About</Link>
                    </li>
                </ul>
            </nav>
        )
    }