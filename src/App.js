import React, { Component } from 'react';
import movieData from './movieData';
import Movies from './Movies';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movieData.movies,
    }
  }

  render() {
    return (
      <section>
        <h1>Rancid Tomatillos</h1>
        <Movies />
      </section>
    )
  }
}

export default App;
