import React, { Component } from 'react';
import '../App.css';

class SearchResult extends Component {

  renderSearchResults = () => {
    return this.props.searchData.map(podcast => {
      return (
        <div key={podcast.id} className='search-result'>
          <img 
            src={podcast.image} 
            alt={podcast.title_original} 
            width='75px'
            onClick={this.props.handleSelect}
            id={podcast.id}
          />
          <div 
            onClick={this.props.handleSelect} 
            id={podcast.id}
            className='search-result-title'
          >
            {podcast.title_original}
          </div>
          <div className='search-result-publisher'>{podcast.publisher_original}</div>
        </div>
      )
    })
  }

  render () {
    return this.renderSearchResults()
  }
}

export default SearchResult

