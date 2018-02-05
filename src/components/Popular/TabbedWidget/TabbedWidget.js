import React, { Component } from "react";

import "./TabbedWidget.css";

import TabbedTitle from "./TabbedTitle/TabbedTitle";
import TabbedContent from "./TabbedContent/TabbedContent";

export default class TabbedWidget extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showContent: false,
			title: "",
			titleMatches: false
		}

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(title) {
		this.setState ({
			showContent: !this.state.showContent,
			title: title,
		})
	}

	render() {
		const { popularContent } = this.props;

		return (
			<div className="popular-container">
        { popularContent.map( (content, index) => {
          return (
              <div className="widgets" key={index}>
                <TabbedTitle
									title = { content.title }
									handleClick = { this.handleClick.bind(this) }
									showContent = { this.state.showContent }
								 	/>
									{
										this.state.showContent &&
										<div className="popularLinks-container">
											{
												this.state.title.title === content.title &&
												<TabbedContent content = { content.content } />
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
