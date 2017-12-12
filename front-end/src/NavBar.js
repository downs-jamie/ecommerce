import React, { Component } from 'react';
// import Bootstrap from 'react-bootstrap';

class NavBar extends Component{
	constructor(){
		super();
	}
	render(){
		return(
			<div id="navbar">
				<nav className="navbar navbar-fixed-top">
            		<div id="first" className="container-fluid navbar-default">
            			<div className="container">
	                		<ul className="nav navbar-nav">
	                			<li>Home</li>
	                			<li>Shop</li>
	                			<li>About Us</li>
	                			<li>Contact Us</li>
	                			
	                		</ul>
	                		<input type="text" className="nav navbar-nav pull-right" placeholder="Search for Iteams"/>
	                		<button type="Search" className="nav navbar-nav pull-right">SEARCH</button>
	                	</div>
                	</div>
                	<div id="second" className="container-fluid navbar-default">
                		<div className="container">
                			<div className="nav navbar-header">
                				ClassicModels Logo
                			</div>
                			<div className="nav navbar-nav pull-right">
                				<li>Sign in or Create an Account</li>
                				<li>(0)iteams in the cart | ($0.00)</li>
                			</div>
                		</div>
                	</div>
                </nav>
			</div>
		)
	}
}
export default NavBar;