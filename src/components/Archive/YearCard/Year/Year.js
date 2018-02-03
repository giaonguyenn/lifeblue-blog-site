import React, { Component } from "react";

import "./Year.css";

export default class Year extends Component {

	handleClick(year) {
		this.props.handleClick(year);
	}

	render() {
		const archive = this.props;
		const year = archive.year;
		return (
			<div className="year" onClick= { () => { this.handleClick({ year }) } }>
				<div>
					<p>{ archive.year } <span><i className="fa fa-caret-right prefix grey-text"></i></span> </p>
				</div>
			</div>
		)
	}
}
