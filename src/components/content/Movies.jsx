import React, { Component } from 'react';
import Footer from '../footer/footer';

class Moives extends Component {
    state = {  }
    render() { 
        const { movies, sidebarOpen } = this.props;
        return ( 
            <div className={`right-content position-relative ${sidebarOpen ? `show` : '' }`}>
                <div className="bg-light mx-4 mt-4 p-4 border shadow-sm">
                    <button className="btn btn-dark rounded-0">New Movies</button>
                </div>
                <div className="m-4 bg-light p-4 border shadow-sm">
                    <div className="p-4 bg-dark text-light w-100 mb-4">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <button className="btn btn-outline-secondary text-light btn-dark rounded-0" type="button" id="button-addon1">Search</button>
                            </div>
                                <input type="text" className="form-control rounded-0" placeholder="Search Movies"/>
                        </div>
                    </div>
                    <div className="table-responsive-md">
                        <table className="table table-dark w-100">
                            <thead>
                                <tr>
                                    <th scope="col">Title</th>
                                    <th scope="col">Genre</th>
                                    <th scope="col">Stock</th>
                                    <th scope="col">Rating</th>
                                </tr>
                            </thead>
                            <tbody>
                                {movies.map(movie => 
                                <tr>
                                    <td>{movie.title}</td>
                                    <td>{movie.genre.name}</td>
                                    <td>{movie.numberInStock}</td>
                                    <td>{movie.dailyRentalRate}</td>
                                </tr>    
                                )}
                            </tbody>
                        </table>
                    </div>
                    <ul className="pagination custom-pagination mb-0 mt-4">
                        <li className="page-item">
                            <a className="page-link text-light bg-dark" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        <li className="page-item"><a className="page-link text-light bg-dark" href="#">1</a></li>
                        <li className="page-item"><a className="page-link text-light bg-dark" href="#">2</a></li>
                        <li className="page-item"><a className="page-link text-light bg-dark" href="#">3</a></li>
                        <li className="page-item">
                            <a className="page-link text-light bg-dark" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <Footer/>
            </div>
         );
    }
}
 
export default Moives;