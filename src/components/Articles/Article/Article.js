import React, { Component } from "react";

import "./Article.css";

import Image from "./Image/Image";
import Summary from "./Summary/Summary";

export default class Article extends Component {
	render() {
		const { articles } = this.props;

		return (
			<div className="content-container">
				{ articles.map( (article, index) => {
					let className= "";
					if(index.toString().match(/0|9/) !== null) {
						className = "feature"

					} else {
						className = "nonfeature"
					}
					return (
						//<div className={ className } key= { index }>
							<a href={ article.link } target="_blank">
							<div className="content">
								<Image 
									title = { article.title }
									author = { article.author }
									date = { article.date }
									img = { article.img }
								/>
								<Summary 
									summary = { article.summary }
								/>
							</div>
							</a>
						//</div>
					)
				})}
			</div>
		)
	}
}
