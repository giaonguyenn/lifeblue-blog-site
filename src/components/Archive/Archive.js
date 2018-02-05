import React, { Component } from "react";

import YearCard from "./YearCard/YearCard"
import "./Archive.css";

export default class Archive extends Component {
	render() {
		const archives = [
			{
				year: 2014,
				articles: [
				{
					title: "7 Rules for Creating Goregous UI",
					date: "11.13.14",
					link: "https://medium.com/@erikdkennedy/7-rules-for-creating-gorgeous-ui-part-1-559d4e805cda"
				},
				{
					title: "Why Her Will Dominate UI Design Even More Than Minority Report",
					date: "01.13.14",
					link: "https://www.wired.com/2014/01/will-influential-ui-design-minority-report/"
				},
				{
					title: "Why You Shouldn't Hire a UI/UX Designer",
					date: "11.10.14",
					link: "https://www.usertesting.com/blog/2014/11/10/dont-hire-ui-ux-designer/"
				}]
			},
			{
				year: 2015,
				articles: [
				{
					title: "Mobile:2015 - Interactive Mind",
					date: "07.31.15",
					link: "https://medium.com/interactive-mind/mobile-2015-263ab694e60e"
				},
				{
					title: "No UI is the New UI",
					date: "11.11.15",
					link: "https://techcrunch.com/2015/11/11/no-ui-is-the-new-ui/"
				},
				{
					title: "29 User Interface Design Resources",
					date: "09.15.15",
					link: "https://www.usertesting.com/blog/2015/09/15/29-user-interface-design-resources-the-ultimate-list/"
				}]
			},
			{
				year: 2016,
				articles: [
				{
					title: "The Best User Interface Upgrades of 2016",
					date: "12.15.16",
					link: "https://www.wired.com/2016/12/2016-ui-upgrades/"
				},
				{
					title: "5 Must Read Articles on UI Design",
					date: "08.14.16",
					link: "https://blog.prototypr.io/5-must-read-articles-on-ui-design-d27b2cbbd940"
				},
				{
					title: "10 Rules of Good UI Design to Follow",
					date: "02.24.16",
					link: "https://www.elegantthemes.com/blog/resources/10-rules-of-good-ui-design-to-follow-on-every-web-design-project"
				}]
			},
			{
				year: 2017,
				articles: [
				{
					title: "Top 10 UX Design Articles of 2017",
					date: "12.14.17",
					link: "https://medium.com/inkoniq-blog/top-10-ux-design-articles-of-2017-must-read-for-every-designer-8156faba4c16"
				},
				{
					title: "Why I Switched to Sketch for UI Design",
					date: "09.14.17",
					link: "https://www.smashingmagazine.com/2017/09/ideal-sketch-setup-ui-design/"
				},
				{
					title: "UI/UX Articles and Interesting Tidbits of the Week",
					date: "05.21.17",
					link: "https://uiux.blog/ui-ux-articles-and-interesting-tidbits-of-the-week-118220a0987e"
				}]
			}
		]

		return (
			<div className="archive" id="archive">
				<h3>Search Archive by Year</h3>
				<YearCard archives = { archives }/>
			</div>
		)
	}
}
