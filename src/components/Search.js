import React from 'react';
import SearchResult from './SearchResult';

function Search(props) {
  return( 
    <>
      <form onSubmit={props.handleSubmit}>
        <input 
          type='text' 
          value={props.search} 
          onChange={props.handleChange}
          placeholder='Search Podcasts'
        />
      </form>
      <SearchResult 
        searchData={props.searchData} 
        getPodcastId={props.getPodcastId} 
      />
    </>
  )
}

export default Search;