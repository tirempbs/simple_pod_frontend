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
        </div>
      )
    } else {
      return null
    }
  }

}

export default Episode;