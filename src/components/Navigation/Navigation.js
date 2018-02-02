import React, { Component } from "react";

import "./Navigation.css";

export default class Navigation extends Component {

	constructor() {
		super();

		this.state = {
			active: false,
			index: ""
		}

		this.toggleClass = this.toggleClass.bind(this);
	}

	toggleClass(e) {
		const currentState = this.state.active;
		this.setState ( {
			active: !currentState,
			index: e
		})
	}

	render() {
		return (
			<div className="sidenav">
				<div className="logo">
					<h1 className="mod"> MOD<span className="ui">UI</span></h1>
				</div>
				<div className="menu">
					<a href="#articles" onClick = { () => {this.toggleClass(1)} }><div className = { this.state.active && (this.state.index === 1 ) ? "active1" : null }> Articles </div></a>
					<a href="#archive" onClick = { () => {this.toggleClass(2)} }><div className = { this.state.active && (this.state.index === 2 ) ? "active2" : null }> Archive </div></a>
					<a href="#popular" onClick = { () => {this.toggleClass(3)} }><div className = { this.state.active && (this.state.index === 3 ) ? "active3" : null }> Popular </div></a>
					<a href="#newsletter" onClick = { () => {this.toggleClass(4)} }><div className = { this.state.active && (this.state.index === 4 ) ? "active4" : null }> Newsletter </div></a>
					<a href="#about" onClick = { () => {this.toggleClass(5)} }><div className = { this.state.active && (this.state.index === 5 ) ? "active5" : null }> About </div></a>
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
