import React, { Component } from 'react';
import './App.css';

const apiKey = "031c640e4395c08b6e604af80abc7669";
const galleryID = "72157677375993701";

const galleryRequest = `https://api.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=${apiKey}&gallery_id=${galleryID}&format=json&nojsoncallback=1`;
var qSpeed = new URLSearchParams(window.location.search).get("speed");
var shuffleSpeed =  qSpeed != null ? qSpeed : 2000;

console.log(shuffleSpeed);
var gallery = [];
var photoCount;

class App extends Component {
  imageLoader() {
    var currentImg = gallery[Math.floor(Math.random() * (photoCount - 1))];
    var imgDiv = document.querySelector('.App');
    imgDiv.style.backgroundImage = `url(${currentImg})`;
  }
  componentDidMount() {
    fetch(galleryRequest)
      .then((response) => {
        return response.json()
      })
      .then((body) => {
        body.photos.photo.forEach((photo) => {
          var id = photo.id;
          var secret = photo.secret;
          var server = photo.server;
          var farm = photo.farm;

          var photoURL = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`;
          gallery.push(photoURL);
        })
        photoCount = gallery.length;
        window.addEventListener('click', setInterval(this.imageLoader, shuffleSpeed));
      });
  }
  render() {
    return (
      <div className="App">
      </div>
    );
  }
}
export default App;
