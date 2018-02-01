import React, { Component } from "react";

import "./Image.css";

// import nineStates from "../../../../assets/nine-states-of-design.png"

export default class Image extends Component {

	render() {
		const article = this.props;
		console.log(article.img)
		return (
			<div className="image">
				<img src={`${ article.img }`} alt="Nine States of Design"/> 
				<div className="article-info">
					<h3 className="title">{ article.title }</h3>
					<p className="date">Published: { article.date }</p>
				</div>
			</div>
		)
	}
}
