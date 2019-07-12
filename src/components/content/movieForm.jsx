import React, { Component } from 'react';

class MovieForm extends Component {
    state = {  }
    render() { 
        const { handleNewMovie } = this.props; 
        return ( 
            <React.Fragment>
                <div className="bg-light mx-4 mt-4 p-4 border shadow-sm">
                    <button className="btn btn-dark rounded-0"
                    onClick={handleNewMovie}
                    >Back</button>
                </div>
                <div className="bg-dark mx-4 mt-4 p-4 border shadow-sm">
                    <form>
                        <div className="form-group">
                            <label className="text-light" htmlFor="title">Title</label>
                            <input type="text" className="form-control" id="title"/>
                        </div>
                        <div className="form-group">
                            <label className="text-light" htmlFor="genre">Select Genre</label>
                            <select className="form-control" id="genre">
                                <option>Action</option>
                                <option>Thriller</option>
                                <option>Comedy</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label className="text-light" htmlFor="stock">Stock</label>
                            <input type="text" className="form-control" id="stock"/>
                        </div>
                        <div className="form-group">
                            <label className="text-light" htmlFor="rate">Rating</label>
                            <input type="text" className="form-control" id="rate"/>
                        </div>
                        <button type="submit" className="btn btn-light mt-3">Submit</button>
                    </form>
                </div>
            </React.Fragment>
         );
    }
}
 
export default MovieForm;