import React, { Component } from 'react';
import SearchResult from './SearchResult';
import PodcastSearch from './PodcastSearch';

const searchAPI = 'http://localhost:3000/api/v1/podcasts/search';
const getPodcastsAPI = 'http://localhost:3000/api/v1/podcasts/getPodcasts';

class Search extends Component {
  state = {
    searchData: [],
    search: '',
    selectedPodcasts: {},
    loadPodcasts: false
  }

  handleChange = (event) => {
    this.setState({ search: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    fetch(`${searchAPI}/${this.state.search}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(r => r.json())
      .then(data => this.setState({ searchData: data }))

    this.setState({ search: '' })
  }

  handleSelect = (event) => {
    event.preventDefault()

    const id = event.target.id

    fetch(`${getPodcastsAPI}/${id}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(r => r.json())
      .then(data => {
        this.setState({ selectedPodcasts: data, loadPodcasts: true})
      })

  }

  render() {
    console.log(this.state)

    if (this.state.loadPodcasts) {
      return <PodcastSearch selectedPodcasts={this.state.selectedPodcasts} />;
    }

    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input 
            type='text' 
            value={this.state.value} 
            onChange={this.handleChange}
            placeholder='Search Podcasts'
          />
        </form>
        <SearchResult searchData={this.state.searchData} handleSelect={this.handleSelect} />
      </>
    )
  }
}

export default Search