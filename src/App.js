import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Search from './components/Search';
import Profile from './components/Profile';
import Podcast from './components/Podcast';
import Episode from './components/Episode';

const searchAPI = 'http://localhost:3000/api/v1/podcasts/search';
const getPodcastsAPI = 'http://localhost:3000/api/v1/podcasts/getPodcasts';
const getEpisodeAPI = 'http://localhost:3000/api/v1/podcasts/getEpisode';

class App extends Component {
  state = {
    search: '',
    searchData: [],
    podcastId: '',
    selectedPodcast: null,
    episodeId: '',
    selectedEpisode: null
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

  getPodcastId = (event) => { this.setState({ podcastId: event.target.id }) }
  getPodcasts = () => {
    const id = this.state.podcastId
    
    fetch(`${getPodcastsAPI}/${id}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(r => r.json())
      .then(data => { this.setState({ selectedPodcast: data}) })
    
  }
  
  getEpisodeId = (event) => { this.setState({ episodeId: event.target.parentElement.id }) }
  getEpisode = () => {
    const id = this.state.episodeId

    fetch(`${getEpisodeAPI}/${id}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(r => r.json())
      .then(data => { 
        this.setState({ selectedEpisode: data })
      })

  }

  render() {
    console.log(this.state)
    return (
      <Router>
        <div className='body'>
          <div className='nav'>
            <Link className='nav-link' to='/profile'>SIMPLE POD</Link>
            <Link className='nav-link' to='/search'>SEARCH</Link>
          </div>
          <div className='content'>
            <Route exact path='/' render={(props) => <Profile {...props} />} />
            <Route path='/profile' render={(props) => <Profile {...props} />} />
            <Route 
              path='/search' 
              render={(props) => <Search {...props} 
                search={this.state.search}
                searchData={this.state.searchData}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                getPodcastId={this.getPodcastId}
              />} 
            />
            <Route path='/podcast' render={(props) => <Podcast {...props} 
                getPodcasts={this.getPodcasts}
                selectedPodcast={this.state.selectedPodcast}
                getEpisodeId={this.getEpisodeId}
              />} 
            />
            <Route path='/episode' render={(props) => <Episode {...props}
                getEpisode={this.getEpisode}
                selectedEpisode={this.state.selectedEpisode}
              />} 
            />
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
