import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

class Podcast extends Component {

  componentDidMount = () => {
    this.props.getPodcasts()
  }

  renderPodcasts = () => {
    return this.props.selectedPodcast.episodes.map(podcast => {
      let ts = new Date(podcast.pub_date_ms)
      let len = Math.ceil(podcast.audio_length/60)

      return (
        <Link to='/episode' onClick={this.props.getEpisodeId} key={podcast.id}>
          <div id={podcast.id} className='podcast-result'>
            <div id={podcast.id} className='podcast-result-title'>{podcast.title}</div>
            <div id={podcast.id} className='podcast-result-timedate'>
              {ts.toLocaleDateString()}&ensp;&bull;&ensp;{len} MIN
            </div>
            <div 
              className='podcast-result-description' 
              id={podcast.id} 
              dangerouslySetInnerHTML={{ __html: podcast.description }}>
            </div>
          </div>
        </Link>
      )
    })
  }

  render() {
    const podcast = this.props.selectedPodcast
    
    if (podcast) {
      return (
        <div>
          <div className='podcast-header'>
            <span>{podcast.title}</span>
            <button>Subscribe</button>
          </div>
          <div className='podcast-description'>{podcast.description}</div>
          {this.renderPodcasts()}
        </div>
      )
    } else {
      return null
    }
  }

}

export default Podcast;