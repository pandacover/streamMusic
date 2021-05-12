import React from 'react';
import './navbar.css'

class Navigation extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand">YEEEET</a>
                <ul className="navbar-nav">
                <li className="nav-item">
                        <a className="nav-link" href="#">Explore</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Playlist</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Navigation;