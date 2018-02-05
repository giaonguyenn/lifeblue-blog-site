import React, { Component } from "react";

import "./TabbedContent.css";

export default class TabbedContent extends Component {
	render() {
		const {content} = this.props;
		console.log(content);
		return (
			<div className="popularContent">
				{content.map( (link, index) => {
					return(
						<a href="" target="_blank" key={ index }><p>{ link  }</p></a>
					)
				})}
			</div>
		)
	}
}
