import React, { Component } from 'react';
import '../App.css';

class Episode extends Component {

  componentDidMount = () => {
    this.props.getEpisode()
  }

  render() {
    const episode = this.props.selectedEpisode

    if (episode) {
      return (
        <div className='episode'>
          <div>{episode.podcast.title}</div>
          <div>{episode.title}</div>
          <img src={episode.image} alt={episode.title} />
          <audio ref='audio_tag' src={episode.audio} controls autoPlay/>
        </div>
      )
    } else {
      return null
    }
  }

}

export default Episode;