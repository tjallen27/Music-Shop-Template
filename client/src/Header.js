import React, { Component } from 'react';

export default class Header extends Component {
  render(){
    return(
      <header className="App-header">
        <h1 className="App-title">Klick Audio</h1>
        <p className="App-intro">
          <span role="img" aria-label="emoji">🎧</span>  Royalty free music. No tricks. Just £14.99 each. <span role="img" aria-label="emoji">🎧</span>
        </p>
      </header>
    )
  }
}
