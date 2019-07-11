import React from 'react';

const Dashboard = () => {
    return ( 
        <React.Fragment>
        <div className="main-header bg-dark border-bottom position-fixed w-100">
            <div className="container-fluid py-4">
               <a href="#" className="display-4 text-light">Dashboard</a>
            </div>
        </div>
        <div className="dashboard-content d-flex">
            <div className="left-sidebar bg-dark">
                <ul className="list-group list-group-flush">
                    <li><a href="#" className='list-group-item bg-dark text-light'>Cras justo odio</a></li>
                    <li><a href="#" className='list-group-item bg-dark text-light'>Dapibus ac facilisis in</a></li>
                    <li><a href="#" className='list-group-item bg-dark text-light'>Morbi leo risus</a></li>
                    <li><a href="#" className='list-group-item bg-dark text-light'>Porta ac consectetur ac</a></li>
                    <li><a href="#" className='list-group-item bg-dark text-light'>Vestibulum at eros</a></li>
                </ul>
            </div>
            <div className="right-content flex-grow-1">
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
                                    <th scope="col">#</th>
                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Handle</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                </tr>
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
            </div>
        </div>
        </React.Fragment>
     );
}
 
export default Dashboard;