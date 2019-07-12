import React, { Component } from 'react';

class MovieForm extends Component {
    state = { 
        movie: {
            title: 'af',
            genre: '',
            numberInStock: '3er',
            dailyRentalRate: 'd'
        }
     }

    handleChangle = e => {
        const movie = {...this.state.movie};
        movie[e.target.name] = e.target.value;
        this.setState({
            movie
        });
    }
    render() { 
        const { handleNewMovie, createNewMovie } = this.props; 
        const { movie } = this.state;
        return ( 
            <React.Fragment>
                <div className="bg-light mx-4 mt-4 p-4 border shadow-sm">
                    <button className="btn btn-dark rounded-0"
                    onClick={handleNewMovie}
                    >Back</button>
                </div>
                <div className="bg-dark mx-4 mt-4 p-4 border shadow-sm">
                    <form onSubmit={(e) => createNewMovie(e, movie)}>
                        <div className="form-group">
                            <label className="text-light" htmlFor="title">Title</label>
                            <input type="text" name="title" onChange={this.handleChangle} value={movie.title} className="form-control" id="title"/>
                        </div>
                        <div className="form-group">
                            <label className="text-light" htmlFor="genre">Select Genre</label>
                            <select className="form-control" value={movie.genre} name='genre' onChange={this.handleChangle} id="genre">
                                <option value="action">Action</option>
                                <option value="thriller">Thriller</option>
                                <option value="comedy">Comedy</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label className="text-light" htmlFor="stock">Stock</label>
                            <input type="text" name="numberInStock" onChange={this.handleChangle} value={movie.numberInStock} className="form-control" id="stock"/>
                        </div>
                        <div className="form-group">
                            <label className="text-light" htmlFor="rate">Rating</label>
                            <input type="text" name="dailyRentalRate" onChange={this.handleChangle} value={movie.dailyRentalRate} className="form-control" id="rate"/>
                        </div>
                        <button type="submit" className="btn btn-light mt-3">Submit</button>
                    </form>
                </div>
            </React.Fragment>
         );
    }
}
 
export default MovieForm;