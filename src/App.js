import React, { Component } from 'react';
import './App.css';
import Search from './components/Search';
import Profile from './components/Profile';
import PodcastPlay from './components/PodcastPlay';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='body'>
          <div className='nav'>
            <Link className='nav-link' to='/profile'>SIMPLE POD</Link>
            <Link className='nav-link' to='/search'>SEARCH</Link>
          </div>
          <div className='content'>
            <Route exact path='/' component={Profile} />
            <Route path='/profile' component={Profile} />
            <Route path='/search' component={Search} />
            <Route path='/podcast' component={PodcastPlay} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
