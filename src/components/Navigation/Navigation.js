import React, { Component } from "react";
// import { Link } from "react-router-dom";

import "./Navigation.css";

export default class Navigation extends Component {
	// constructor() {
	// 	super();
	// }

	render() {
		return (
			<div className="sidenav">
				<div className="logo">
					<h1 className="mod"> MOD<span className="ui">UI</span></h1>
				</div>
				<div className="menu">
					<div> Articles </div>
					<div> Archive </div>
					<div> Popular </div>
					<div> Newsletter </div>
					<div> About </div>
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
