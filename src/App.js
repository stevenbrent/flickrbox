import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const flickr = "https://api.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=031c640e4395c08b6e604af80abc7669&gallery_id=72157677375993701&format=json&nojsoncallback=1"

class App extends Component {

  componentDidMount() {
    fetch(flickr)
      .then((response) => {
        return response.json()
      })
      .then((body) => {
          var photoCount = body.photos.total;
          console.log(`Total Photos: ${photoCount}`);
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
