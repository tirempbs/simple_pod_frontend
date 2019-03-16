import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

class Episode extends Component {

  componentDidMount = () => {
    this.props.getEpisode()
  }

  render() {
    const episode = this.props.selectedEpisode

    if (episode) {
      return (
        <div className='episode'>
          <Link to='/podcast'><div className='episode-podcast-title'>{episode.podcast.title}</div></Link>
          <div className='episode-title'>{episode.title}</div>
          <img src={episode.image} alt={episode.title} />
          <audio ref='audio_tag' src={episode.audio} controls autoPlay/>
          <div 
            className='episode-description' 
            dangerouslySetInnerHTML={{ __html: episode.description }}>
          </div>
        </div>
      )
    } else {
      return null
    }
  }

}

export default Episode;