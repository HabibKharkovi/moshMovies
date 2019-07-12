import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/header';
import LeftSideBar from './components/sidebar/leftsidebar';
import Moives from './components/content/Movies';
import { getMovies } from './services/fakeMovieService'


class App extends Component {
  state = { 
    movies: getMovies(),
    sidebarOpen: false,
   }

  sidebarToggle = (e) => {
    this.setState({ sidebarOpen: !this.state.sidebarOpen })
  }

  render() { 
    const { sidebarOpen, movies } = this.state;
    return (  
    <div className="App">
      <Header 
        sidebarToggle={this.sidebarToggle} 
        sidebarOpen={sidebarOpen}
      />
      <div className="dashboard-content d-flex position-relative">
        <LeftSideBar sidebarOpen={sidebarOpen}/>
        <Moives
           movies={movies}
           sidebarOpen={sidebarOpen}
        />
      </div>
    </div>
    );
  }
}

export default App;