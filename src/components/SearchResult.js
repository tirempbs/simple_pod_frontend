import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

class SearchResult extends Component {

  renderSearchResults = () => {
    return this.props.searchData.map(podcast => {
      return (
        <div key={podcast.id} className='search-result'>
          <Link to='/podcast' onClick={this.props.getPodcastId}>
            <img 
              id={podcast.id}
              src={podcast.image} 
              alt={podcast.title_original} 
              width='75px'
            />
          </Link>
          <Link to='/podcast' onClick={this.props.getPodcastId}>
            <div 
              id={podcast.id}
              className='search-result-title'
            >
              {podcast.title_original}
            </div>
          </Link>
          <div className='search-result-publisher'>{podcast.publisher_original}</div>
        </div>
      )
    })
  }

  render () {
    return this.renderSearchResults()
  }
}

export default SearchResult;

