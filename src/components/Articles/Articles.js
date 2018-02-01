import React, { Component } from "react";

import Article from "./Article/Article";
import "./Articles.css";

export default class Articles extends Component {
	// constructor() {
	// 	super();
	// }

	render() {
		const articles = [
			{
				title: "Nine States of Design",
				date: "11.05.15",
				img: "../../../../assets/nine-states-of-design.png",
				summary: "Modern UI teams are designing components first; Interfaces are merely the thoughtful composition of components. This leaves an often glaring hole for users on “the unhappy path” — The places where users may, intentionally or not, stray from your idealized flow. As we learn to craft systems rather than pages, we must invest effort into shaping these often missed states of design and create with a component lifecycle that can support everyone. Here’s the lifecycle as I see it:"
			}
		]

		return (
			<div className="articles">
				<Article articles = { articles } />
			</div>
		)
	}
}
