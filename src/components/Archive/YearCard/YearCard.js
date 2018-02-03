import React, { Component } from "react";

import "./YearCard.css";

import Year from "./Year/Year";
import Links from "./Links/Links";

export default class YearCard extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showArticleDropdown: false,
			year: 0,
			yearMatches: false
		}

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(year) {
		this.setState ({
			showArticleDropdown: !this.state.showArticleDropdown,
			year: year
		})
	}

	render() {
		const { archives } = this.props;

		return (
			<div className="yearCard">
				{/* <div className="article-linksbg"></div> */}
				{ archives.map( (archive, index) => {
					return (
						<div className="year-container" key = { index }>
							<Year
								year = { archive.year }
								handleClick = { this.handleClick.bind(this) }
								showArticleDropdown = { this.state.showArticleDropdown }
							/>
							{
								this.state.showArticleDropdown &&
									<div className="article-links">
										{
											this.state.year.year === archive.year &&
											<Links
												archive = { archive }

											/>
										}
									</div>
							}
						</div>
					)
				})}
			</div>
		)
	}
}
