import React, { Component } from "react";

import "./YearCard.css";

import Year from "./Year/Year";

export default class YearCard extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showArticleDropdown: false
		}

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState ({
			showArticleDropdown: !this.state.showArticleDropdown
		})
	}

	render() {
		const { archives } = this.props;

		return (
			<div className="yearCard">
				{ archives.map( (archive, index) => {
					return (
						// const articles = archive.articles;
						<div className="year-container" key = { index }>
							<Year 
								year = { archive.year }
								handleClick = { this.handleClick.bind(this) }
								showArticleDropdown = { this.state.showArticleDropdown }
							/>
							{ 
								this.state.showArticleDropdown &&
								<div className="article-links">
									<p>Links</p>
								</div>
							}
						</div>
					)
				})}
			</div>
		)
	}
}