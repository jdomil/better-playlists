import React, { Component } from 'react';
import './App.css';

let defaultStyle = {
  color: '#fff'
}
let fakeServerData = {
  user: {
    name: 'Juan',
    playlists: [
      {
        name: 'My favorites',
        songs: [
          {name: 'Beat it', duration: 211345},
          {name: 'Hola', duration: 123412},
          {name: 'Halo', duration: 234567}
        ]
      },
      {
        name: 'This is the good one',
        songs: [
          {name: 'Beat it', duration: 211345},
          {name: 'Hola', duration: 123412},
          {name: 'Halo', duration: 234567}
        ]
      },
      {
        name: 'Learning chinese',
        songs: [
          {name: 'Beat it', duration: 211345},
          {name: 'Hola', duration: 123412},
          {name: 'Halo', duration: 234567}
        ]
      },
      {
        name: 'This Juan isn\'t good',
        songs: [
          {name: 'Beat it', duration: 211345},
          {name: 'Hola', duration: 123412},
          {name: 'Halo', duration: 234567}
        ]
      }
    ]
  }
}

class PlaylistCounter extends Component {
  render() {
    return (
      <div style={{...defaultStyle, width: '40%', display: 'inline-block'}}>
        <h2>{this.props.playlists.length} playlists</h2>
      </div>
    );
  }
}

class HoursCounter extends Component {
  render() {
    let allSongs = this.props.playlists.reduce((songs, eachPlaylist) => {
      return songs.concat(eachPlaylist.songs)
    }, [])
    let totalDuration = allSongs.reduce((sum,eachSong) => {
      return sum + eachSong.duration
    }, 0)
    return (
      <div style={{...defaultStyle, width: '40%', display: 'inline-block'}}>
        <h2>{Math.round(totalDuration/60)} hours</h2>
      </div>
    );
  }
}

class Filter extends Component {
  render() {
    return (
      <div style={defaultStyle}>
        <img/>
        <input type="text"/>
        Filter
      </div>
    );
  }
}

class Playlist extends Component {
  render() {
    return (
      <div style={{...defaultStyle, display: 'inline-block', width: '30%'}}>
        <img/>
        <h3>Playlist Name</h3>
        <ul><li>Song 1</li><li>Song 2</li><li>Song 3</li></ul>
      </div>
    )
  }
}

class App extends Component {
  constructor() {
    super()
    this.state = {serverData: {}}
  }
  componentDidMount() {
    setTimeout(() => {
    this.setState({serverData: fakeServerData});
  }, 1000)
  }

  render() {
    return (
      <div className="App">
        {this.state.serverData.user ?
        <div>
          <h1 style={{...defaultStyle, 'font-size': '54px'}}>
            {this.state.serverData.user.name}'s Playlist
          </h1>
          <PlaylistCounter playlists={this.state.serverData.user.playlists}/>
          <HoursCounter playlists={this.state.serverData.user.playlists}/>
          <Filter/>
          <Playlist/>
          <Playlist/>
          <Playlist/>
        </div> : <h1 style={{...defaultStyle, 'font-size': '54px'}}>Loading...</h1>
        }
      </div>
    );
  }
}

export default App;
