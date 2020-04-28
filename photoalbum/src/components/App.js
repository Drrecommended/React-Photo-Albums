import React from 'react';
import '../App.css';
import MyAlbums from './MyAlbums'
import AlbumDetail from './AlbumDetail'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
        <Router>
          <Route path="/" exact component={MyAlbums} />
          <Route path="/photos/:id" component={AlbumDetail} />
        </Router>
    </div>
  );
}

export default App

