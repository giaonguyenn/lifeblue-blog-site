import React, { Component } from "react";

import "./Image.css";

export default class Image extends Component {

	render() {
		const article = this.props;
		return (
			<div className="image">
				<img src={ article.img } alt={ article.alt }/> 
				<div className="article-info">
					<h3 className="title">{ article.title }</h3>
					<p className="date">{ article.author } - Published: { article.date }</p>
				</div>
			</div>
		)
	}
}
