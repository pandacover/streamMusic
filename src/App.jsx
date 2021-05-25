import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Playlist } from './components/Playlist';
import { About } from './components/About';
import { Body } from './components/Body';

function App() {

  const [songList, setSongList] = useState([]);

  useEffect( () => {
    const fetchTask = async () => { 
    const res = await fetch(`http://localhost:5000/musicDB`);
    const data = await res.json();
    setSongList(data)
    }
    fetchTask();
  }, [])

  return (
    <>
      {/*Routing different components || Do not change whatsoever*/}
      <Router>
        <Navigation />
        <Switch>
          <Body path="/" exact Route ="Body" songList={songList} />
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
