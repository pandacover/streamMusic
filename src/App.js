import React, { useEffect } from 'react';
import {BrowserRouter as Router, Switch, Link} from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Playlist from './components/Playlist';
import About from './components/About';
import Body from './components/Body';

function App() {
  useEffect(() => {
    const fetchSong = async () => {
      const res = await fetch("https://freepd.p.rapidapi.com/upbeat", {
        "method": "GET",
        "headers": {
          "x-rapidapi-key": "dc68e26990msh5bdf26752a3d255p127ceajsn64ec4518bb3f",
          "x-rapidapi-host": "freepd.p.rapidapi.com"
        }
      }).catch(err => {
        console.error(err)});

      const data = res.json();
      const idx = 0;
      console.log(data);
      return data;
    }
    fetchSong();
  }, []);

  

    return (
        <>
        {/*Routing different components || Do not change whatsoever*/}
          <Router>
            <Navigation />
            <Switch>
              <Body path="/" exact Route ="Body"/>
              <About path="/about" Route ="About" />
              <Playlist path="/playlist" Route ="Playlist" />
            </Switch>

            {/* footer || Ignore this code */}
            <div className="container">
              <footer className="page-footer font-small special-color-dark pt-4">
                  <div className="footer-copyright text-center py-3">© 2021 Copyright:
                      <Link to="/"> YEEEET</Link>
                  </div>
              </footer>  
            </div>
          </Router>
        </>
      );
    }

export default App;
