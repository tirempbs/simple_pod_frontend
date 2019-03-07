import React, { Component } from 'react';
import '../App.css';

class Podcast extends Component {

  componentDidMount = () => {
    this.props.getPodcasts()
  }

  renderPodcasts = () => {
    // if (this.props.selectedPodcast) {
      return this.props.selectedPodcast.episodes.map(podcast => {
        let ts = new Date(podcast.pub_date_ms)
        let len = Math.ceil(podcast.audio_length/60)

        return (
          <div key={podcast.id} className='podcast-result'>
            <div className='podcast-result-title'>{podcast.title}</div>
            <div className='podcast-result-timedate'>
              {ts.toLocaleDateString()}&ensp;&bull;&ensp;{len} MIN
            </div>
            <div dangerouslySetInnerHTML={{ __html: podcast.description }}></div>
          </div>
        )
      })
    // }
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
          <div>{podcast.description}</div>
          {this.renderPodcasts()}
        </div>
      )
    } else {
      return null
    }
    
  }

}

export default Podcast;