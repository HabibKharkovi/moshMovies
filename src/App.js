import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
import Header from './components/header/header';
import LeftSideBar from './components/sidebar/leftsidebar';
import Moives from './components/content/movies';
import { getMovies } from './services/fakeMovieService';
import { getGenres } from './services/fakeGenreService';


class App extends Component {
  state = { 
    movies: getMovies(),
    genres: getGenres(),
    sidebarOpen: false,
   }

  sidebarToggle = (e) => {
    this.setState({ sidebarOpen: !this.state.sidebarOpen })
  }

  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id != movie._id);
    this.setState({
      movies
    });
  }

  createNewMovie = (e, movie) => {
    e.preventDefault();
    let newMovie = { ...movie };
    newMovie._id = Date.now();
    newMovie.liked = false;
    let movies = {newMovie, ...this.state.movies}

    this.setState({
      movies
    })
    console.log('new movie: ', movies, 'movies: ', this.state.movies)
  }

  render() { 
    const { sidebarOpen, movies, genres } = this.state;
    return (  
    <BrowserRouter>
    <div className="App">
      <Header 
        sidebarToggle={this.sidebarToggle} 
        sidebarOpen={sidebarOpen}
      />
      <div className="dashboard-content d-flex position-relative">
        <LeftSideBar 
        sidebarOpen={sidebarOpen}
        />
        <Moives
          movies={movies}
          genres={genres}
          sidebarOpen={sidebarOpen}
          handleDelete={this.handleDelete}
          createNewMovie={this.createNewMovie}
        />
      </div>
    </div>
    </BrowserRouter>
    );
  }
}

export default App;