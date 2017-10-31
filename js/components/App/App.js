// deps
import React, { Component } from 'react';

// components
import UserCard from '../UserCard/UserCard';

// styles
import './app.scss';

class App extends Component {
  render () {
    return (
      <div className="App">
        <UserCard
          userName="Sara Williams"
          email="saramw2014@gmail.com"
        />
      </div>
    )
  }
}

export default App;
