import React, { Component } from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import Checkout from './Checkout';
import './App.css';
import { download } from './download';
import { songs } from './songs';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      title: songs[0].title,
      description: songs[0].description,
      genre: '',
      songSrc: '',
      select: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.setState({
      title: this.state.title,
      description: this.state.description,
      songSrc: this.state.songSrc,
      genre: e.target.value
    })
    for(var i = 0; i < songs.length; i++){
      var hiddenElements = document.getElementsByClassName('songList-item');
      var checkbox = document.getElementById('clearFilter');
      hiddenElements[i].classList.remove('hidden');
      if (songs[i].genre !== e.target.value){
        console.log(songs[i].genre);
        hiddenElements[i].classList.add('hidden');
        checkbox.checked = false;
      }
    }
  }


  clearFilter(e){
    var checkbox = document.getElementById('clearFilter');
    if(checkbox.checked !== false){
      console.log('checked')
      for(var i = 0; i < songs.length; i++){
        var hiddenElements = document.getElementsByClassName('songList-item');
        hiddenElements[i].classList.remove('hidden');
        if (songs[i].genre !== e.target.value){
          console.log(songs[i].genre);

          hiddenElements[i].classList.remove('hidden');
        }
      }
    }
  }




  render() {
    const songList = songs.map((song, index) =>
      <ReactBootstrap.Col xs={12} sm={6} md={4} lg={4} className="songList-item col-6" key={index}>
        <ul>
          <li>
            {song.title}
          </li>
          <audio controls controlsList="nodownload">
            <source src={song.songSrc} />
            Your browser does not support the audio element.
          </audio>
          <li>
            <span role="img" aria-label="emoji">🚀</span>: {song.genre}
          </li>
          <li>
            <Checkout
            name={song.title}
            amount={14.99}

            download={this.download}

          />
          </li>
        </ul>
      </ReactBootstrap.Col>
    );

    function removeDuplicates(arr){
      let unique_array = []
      for(let i = 0;i < arr.length; i++){
          if(unique_array.indexOf(arr[i]) === -1){
              unique_array.push(arr[i])
          }
      }
      return unique_array
    }


    const genres = [];
    for(var i = 0; i < songs.length; i++){
      var filterList = genres.push(songs[i].genre);
    }

    filterList = removeDuplicates(genres);

    return (
      <div className="App">
        <div id="message-successful-payment">
          <p>Thanks, click here to download </p>
        </div>
        <div id="message-unsuccessful-payment">
          <p>Unfortunately your payment did not go through! Please try again later.</p>
        </div>

        <header className="App-header">
          <h1 className="App-title">Klick Audio</h1>
          <p className="App-intro">
            <span role="img" aria-label="emoji">🎧</span>  Royalty free music. No tricks. Just £14.99 each. <span role="img" aria-label="emoji">🎧</span>
          </p>
          <p className="App-intro">
            Each download contains 30, 60 and 120 second clips.
          </p>
        </header>

        <div className="main-container">
          <div className="form container">
            <form>
            <select onChange={this.handleChange} value={this.state.genre}>
              {filterList.map((item, index)=> (

                <option key={index}>
                  {item}
                </option>
              ))}
            </select>
            <div className="checkbox-container">
              <span>Clear filters: </span>
              <input type="checkbox" name="clear" id="clearFilter" onClick={this.clearFilter} />
            </div>
            </form>
          </div>

          <hr />

          <div className="main-gallery">
            <ReactBootstrap.Grid>
            <ReactBootstrap.Row className="songList container show-grid">
              {songList}
            </ReactBootstrap.Row>
            </ReactBootstrap.Grid>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
