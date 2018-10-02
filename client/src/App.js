import React, { Component } from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import Checkout from './Checkout';
import Header from './Header';
import ErrMess from './ErrMess';
import './App.css';
import { songs } from './songs';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      genre: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick(){
    console.log('Checkout click');
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
            amount={song.amount}
            songSrc={song.songSrc}
            />
          </li>
        </ul>
      </ReactBootstrap.Col>
    );

    const genres = [];
    for(var i = 0; i < songs.length; i++){
      var filterList = genres.push(songs[i].genre);
    }


    function removeDuplicates(arr){
      let unique_array = []
      for(let i = 0;i < arr.length; i++){
          if(unique_array.indexOf(arr[i]) === -1){
              unique_array.push(arr[i])
          }
      }
      return unique_array
    }

    filterList = removeDuplicates(genres);
    return (

      <div className="App">
        <ErrMess value={songList}/>
        <Header />
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
