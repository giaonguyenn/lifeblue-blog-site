import React, { Component } from "react";

import "./TabbedTitle.css";

export default class TabbedTitle extends Component {

	handleClick(title) {
		this.props.handleClick(title);
	}

	render() {
		const content = this.props;
		const title = content.title;
		return (
			<div className="tabbed-title" onClick= { () => { this.handleClick({ title }) } }>
        <button className="labels">{ title }</button>
			</div>
		)
	}
}
