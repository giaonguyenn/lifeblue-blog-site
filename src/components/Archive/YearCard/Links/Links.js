import React, { Component } from "react";

import "./Links.css";

export default class Links extends Component {
	render() {
		const articles = this.props.archive.articles;

		return (
			<div className="links">
				{ articles.map( (article, index) => {
					return (
						<a href= { article.link } target="_blank" id="links" key= { index }><li> { article.title } </li></a>
					)
				})}
			</div>
		)
	}
}
