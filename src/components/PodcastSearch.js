import React, { Component } from 'react';
import '../App.css';

class PodcastSearch extends Component {

  renderPodcasts = () => {
    if (this.props.selectedPodcasts) {
      return this.props.selectedPodcasts.episodes.map(podcast => {
        let ts = new Date(podcast.pub_date_ms)
        let len = Math.ceil(podcast.audio_length/60)

        return (
          <div key={podcast.id} className='podcast-result'>
            <div className='podcast-result-title'>{podcast.title}</div>
            <div className='podcast-result-timedate'>
              {ts.toLocaleDateString()} - {len} MIN
            </div>
            <div dangerouslySetInnerHTML={{ __html: podcast.description }}></div>
          </div>
        )
      })
    }
  }

  render () {
    if (this.props.selectedPodcasts) {
      return (
        <div>
          <h2>{this.props.selectedPodcasts.title}</h2>
          <button>Subscribe</button>
          {this.renderPodcasts()}
        </div>
      )
    }
    
  }

}

export default PodcastSearch;