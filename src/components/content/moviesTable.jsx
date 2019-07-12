import React, { Component } from 'react';
import Like from '../utilites/like';
import Pagination from '../utilites/pagination';


class MoviesTable extends Component {
    state = {  }
    render() { 
        const { movies, handleDelete, handleNewMovie, genres } = this.props;
        return (
            <React.Fragment>
                <div className="bg-light mx-4 mt-4 p-4 border shadow-sm d-flex">
                    <button className="btn btn-dark rounded-0"
                    onClick={handleNewMovie}
                    >New Movies</button>
                    <div className="input-group search-movie-wrap">
                        <div className="input-group-prepend">
                            <button className="btn btn-outline-secondary text-light btn-dark rounded-0" type="button" id="button-addon1">Search</button>
                        </div>
                            <input type="text" className="form-control rounded-0" placeholder="Search Movies"/>
                    </div>
                </div>
                <div className="m-4 bg-light p-4 border shadow-sm">
                    <div className="p-4 bg-dark text-light w-100 mb-4">
                       {genres.map(genre => <button type="button" className="btn btn-light mr-2 rounded-0 btn-sm" key={genre._id}>{genre.name}</button> )}
                    </div> 
                    <div className="table-responsive-md">
                        <table className="table table-dark w-100 custom-table">
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Genre</th>
                                    <th>Stock</th>
                                    <th>Rating</th>
                                    <th>Delete</th>
                                    <th>Edit</th>
                                    <th>Like</th>
                                </tr>
                            </thead>
                            <tbody>
                                {movies.map(movie => 
                                <tr key={movie._id}>
                                    <td>{movie.title}</td>
                                    <td>{movie.genre.name}</td>
                                    <td>{movie.numberInStock}</td>
                                    <td>{movie.dailyRentalRate}</td>
                                    <td>
                                        <button className="btn btn-light rounded-0 btn-sm"
                                        onClick = {() => handleDelete(movie)}
                                        >Delete</button>
                                    </td>
                                    <td>
                                        <button className="btn btn-light rounded-0 btn-sm">Edit</button>
                                    </td>
                                    <td>
                                        <Like/>
                                    </td>
                                </tr>    
                                )}
                            </tbody>
                        </table>
                    </div>  
                    <Pagination/>
                </div>
            </React.Fragment>
         );
    }
}
 
export default MoviesTable;