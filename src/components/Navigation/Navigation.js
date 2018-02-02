import React, { Component } from "react";

import "./Navigation.css";

export default class Navigation extends Component {

	render() {
		return (
			<div className="sidenav">
				<div className="logo">
					<h1 className="mod"> MOD<span className="ui">UI</span></h1>
				</div>
				<div className="menu">
					<a href="#articles"><div> Articles </div></a>
					<a href="#archive"><div> Archive </div></a>
					<a href="#popular"><div> Popular </div></a>
					<a href="#newsletter"><div> Newsletter </div></a>
					<a href="#about"><div> About </div></a>
				</div>
				<div className="social-buttons">
					<div><i className="fab fa-facebook"></i></div>
					<div><i className="fab fa-instagram"></i></div>
					<div><i className="fab fa-linkedin"></i></div>
					<div><i className="fab fa-twitter"></i></div>
				</div>
			</div>
		)
	}
}
