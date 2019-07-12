import React, { Component } from 'react';

class LeftSideBar extends Component {
    state = {  }
    render() { 
        const { sidebarOpen } = this.props
        return ( 
            <div className={`left-sidebar bg-dark border-right border-light position-fixed h-100 ${sidebarOpen ? `show` : '' }`}  >
                <ul className="list-group list-group-flush">
                    <li><a href="#" className='list-group-item bg-dark text-light'>Cras justo odio</a></li>
                    <li><a href="#" className='list-group-item bg-dark text-light'>Dapibus ac facilisis in</a></li>
                    <li><a href="#" className='list-group-item bg-dark text-light'>Morbi leo risus</a></li>
                    <li><a href="#" className='list-group-item bg-dark text-light'>Porta ac consectetur ac</a></li>
                    <li><a href="#" className='list-group-item bg-dark text-light'>Vestibulum at eros</a></li>
                </ul>
            </div>
         );
    }
}
 
export default LeftSideBar;