import React from 'react'
import {
  NavLink, Link
} from 'react-router-dom';

var headerStyle = {
		marginTop:'40px',
		marginBottom:'40px'
};

class Header extends React.Component {

    render() {
    	console.log(this.props);
        return (
        	<header className="header clearfix" style={headerStyle}>
		        <nav>
		          <ul className="nav nav-pills float-right">
		          <li className="nav-item">
		              <NavLink className="nav-link" to="/"  exact activeClassName="active" >
				          Home
				      </NavLink>
		            </li>
		            <li className="nav-item">
		              <NavLink className="nav-link" to="/albums" activeClassName="active" >
				          Albums
				        </NavLink>
		            </li>
		            <li className="nav-item">
		              <NavLink className="nav-link" to="/about" activeClassName="active" >
				          About
				      </NavLink>
		            </li>
		            <li className="nav-item">
		              <NavLink className="nav-link" to="/contact" activeClassName="active" >
				          Contact
				        </NavLink>
		            </li>
		            <li className="nav-item">
		              <NavLink className="nav-link" to="/topics" activeClassName="active" >
				          Topics
				        </NavLink>
		            </li>
		          </ul>
		        </nav>
		        <h3 className="text-muted"><Link to="/"> Project name</Link></h3>
	      </header>
        	);
    }

}

export default Header;