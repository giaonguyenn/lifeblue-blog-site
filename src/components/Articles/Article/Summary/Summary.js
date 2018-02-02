import React, { Component } from "react";

import "./Summary.css";

export default class Summary extends Component {
	render() {
		const article = this.props;
		return (
			<div className="summary">
				<p> { article.summary }
				</p> 
			</div>
		)
	}
}
