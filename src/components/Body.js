import React from 'react';
import './styles.css'

class Body extends React.Component {

    handleClicks(props) {
        alert('Now Playing Lemon Boy by CaveTown!')
        props.preventDefault()
    }

    render() {
        return (
            <div className="container">
                <div className="exp-title">
                    <span class="exp-title-txt">Hear what’s trending in the YEEEET community!</span>
                </div>
                <div className="songs-list">

                    <div class="row">
                        <div className="card col">
                            <img className="card-img-top" src="https://wallpapercave.com/wp/wp3602192.jpg" alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Lemon Boy</h5>
                                <p className="card-text">Artist&nbsp; - CaveTown<br />Genre - Indie Pop</p>
                                <a href="/" className="btn btn-primary" onClick={this.handleClicks} role="button"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3twredg0CXLmygHYWeSkYXsxjYdXxCXJ7qg&usqp=CAU" className="play-btn"/></a>
                            </div>
                        </div>
                        <div className="card col">
                            <img className="card-img-top" src="https://i.scdn.co/image/ab67616d0000b27388e3cda6d29b2552d4d6bc43" alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Heather</h5>
                                <p className="card-text">Artist&nbsp; - Conan Gray<br />Genre - Pop</p>
                                <a href="/" className="btn btn-primary" onClick={this.handleClicks} role="button"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3twredg0CXLmygHYWeSkYXsxjYdXxCXJ7qg&usqp=CAU" className="play-btn"/></a>
                            </div>
                        </div>
                        <div className="card col">
                            <img className="card-img-top" src="https://images.genius.com/ae3c78d485c51675dcbfa1653910ee0c.1000x1000x1.png" alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Peaches</h5>
                                <p className="card-text">Artist&nbsp; - Justin Bieber<br />Genre - Pop</p>
                                <a href="/" className="btn btn-primary" onClick={this.handleClicks} role="button"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3twredg0CXLmygHYWeSkYXsxjYdXxCXJ7qg&usqp=CAU" className="play-btn"/></a>
                            </div>
                        </div>
                        <div className="card col">
                            <img className="card-img-top" src="https://images.genius.com/b5a992fc23abc908c5581655bafbd622.640x640x1.jpg" alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Stop This Train</h5>
                                <p className="card-text">Artist&nbsp; - John Mayer<br />Genre - Pop</p>
                                <a href="/" className="btn btn-primary" onClick={this.handleClicks} role="button"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3twredg0CXLmygHYWeSkYXsxjYdXxCXJ7qg&usqp=CAU" className="play-btn"/></a>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div className="card col">
                            <img className="card-img-top" src="https://wallpapercave.com/wp/wp3602192.jpg" alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Lemon Boy</h5>
                                <p className="card-text">Artist&nbsp; - CaveTown<br />Genre - Indie Pop</p>
                                <a href="/" className="btn btn-primary" onClick={this.handleClicks} role="button"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3twredg0CXLmygHYWeSkYXsxjYdXxCXJ7qg&usqp=CAU" className="play-btn"/></a>
                            </div>
                        </div>
                        <div className="card col">
                            <img className="card-img-top" src="https://i.scdn.co/image/ab67616d0000b27388e3cda6d29b2552d4d6bc43" alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Heather</h5>
                                <p className="card-text">Artist&nbsp; - Conan Gray<br />Genre - Pop</p>
                                <a href="/" className="btn btn-primary" onClick={this.handleClicks} role="button"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3twredg0CXLmygHYWeSkYXsxjYdXxCXJ7qg&usqp=CAU" className="play-btn"/></a>
                            </div>
                        </div>
                        <div className="card col">
                            <img className="card-img-top" src="https://images.genius.com/ae3c78d485c51675dcbfa1653910ee0c.1000x1000x1.png" alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Peaches</h5>
                                <p className="card-text">Artist&nbsp; - Justin Bieber<br />Genre - Pop</p>
                                <a href="/" className="btn btn-primary" onClick={this.handleClicks} role="button"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3twredg0CXLmygHYWeSkYXsxjYdXxCXJ7qg&usqp=CAU" className="play-btn"/></a>
                            </div>
                        </div>
                        <div className="card col">
                            <img className="card-img-top" src="https://images.genius.com/b5a992fc23abc908c5581655bafbd622.640x640x1.jpg" alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Stop This Train</h5>
                                <p className="card-text">Artist&nbsp; - John Mayer<br />Genre - Pop</p>
                                <a href="/" className="btn btn-primary" onClick={this.handleClicks} role="button"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3twredg0CXLmygHYWeSkYXsxjYdXxCXJ7qg&usqp=CAU" className="play-btn"/></a>
                            </div>
                        </div>
                    </div>
                </div>
                <footer class="">
                    <div class="footer-copyright text-center py-3">© 2021 Copyright:
                        <a href="localhost:3000"> YEEEET</a>
                    </div>  
                </footer>
            </div>
        )
    }
}

export default Body;