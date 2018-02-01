import React, { Component } from "react";

import "./Article.css";

import Image from "./Image/Image";
import Summary from "./Summary/Summary";

export default class Article extends Component {
	render() {
		console.log(this.props);
		const articles = this.props.articles[0];
		console.log(articles);
		return (
			<div className="content">
				<Image 
					title = { articles.title }
					date = { articles.date }
					img = { articles.img }
				/>
				<Summary 
					summary = { articles.summary } 
				/>
			</div>
		)
	}
}
