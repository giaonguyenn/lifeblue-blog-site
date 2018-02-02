import React, { Component } from "react";

import "./Year.css";

export default class Year extends Component {
	constructor(props) {
		super(props);

	}

	handleClick() {
		this.props.handleClick();
	}

	render() {
		const archive = this.props;
		return (
			<div className="year" onClick= { () => { this.handleClick() } }>
				<div>
					<h2>{ archive.year } <span><i className="fa fa-caret-right prefix grey-text"></i></span> </h2>
				</div>
			</div>
		)
	}
}