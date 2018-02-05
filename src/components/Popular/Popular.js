import React, { Component } from "react";

import "./Popular.css";

import TabbedWidget from "./TabbedWidget/TabbedWidget";

export default class Popular extends Component {

	render() {
		const popularContent = [
			{
				title: "Most Viewed",
				content: [
					"test1",
					"test2",
					"test3",
					"test4",
					"test5",
					"test6",
					"test7",
					"test8",
					"test9",
					"test10"
				]
			},
			{
				title: "Most Commented",
				content: [
					"link1",
					"link2",
					"link3",
					"link4",
					"link5",
					"link6",
					"link7",
					"link8",
					"link9",
					"link10"
				]
			},
			{
				title: "Most Shared",
				content: [
					"more1",
					"more2",
					"more3",
					"more4",
					"more5",
					"more6",
					"more7",
					"more8",
					"more9",
					"more10"
				]
			}]

		return (
			<div className="popular" id="popular">
				<TabbedWidget popularContent = { popularContent } />
			</div>
		)
	}
}
