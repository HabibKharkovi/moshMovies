import React, { Component } from 'react';
import MoviesTable from './moviesTable';
import MovieForm from './movieForm';
import Footer from '../footer/footer';

class Moives extends Component {
    state = { 
        newMovie: false
     }

    handleNewMovie = () => {
        this.setState({ newMovie: !this.state.newMovie })
    }

    render() { 
        const { movies, sidebarOpen, handleDelete, genres } = this.props;
        const { newMovie } = this.state;
        return ( 
            <div className={`right-content position-relative ${sidebarOpen ? `show` : '' }`}>
                {newMovie ?
                <MovieForm
                    newMovie={newMovie}
                    handleNewMovie={this.handleNewMovie}
                /> 
                :
                <MoviesTable 
                    movies={movies}
                    genres={genres}
                    handleDelete={handleDelete}
                    handleNewMovie={this.handleNewMovie}
                />
                }
                <Footer/>
            </div>
         );
    }
}
 
export default Moives;