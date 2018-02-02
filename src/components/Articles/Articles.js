import React, { Component } from "react";

import Article from "./Article/Article";
import "./Articles.css";

export default class Articles extends Component {

	render() {
		const articles = [
			{
				title: "Nine States of Design",
				author: "Vince Speelman",
				date: "11.05.15",
				img: "https://image.ibb.co/im27Dm/nine_states_of_design.png",
				alt: "Nine States of Design",
				summary: "Modern UI teams are designing components first; Interfaces are merely the thoughtful composition of components. This leaves an often glaring hole for users on “the unhappy path” — The places where users may, intentionally or not, stray from your idealized flow. As we learn to craft systems rather than pages, we must invest effort into shaping these often missed states of design and create with a component lifecycle that can support everyone. Here’s the lifecycle as I see it:",
				link: "https://medium.com/swlh/the-nine-states-of-design-5bfe9b3d6d85"
			},
			{
				title: "When it Comes to UX Design, Simplicity is Overrated",
				author: "Robert Hoekman Jr.",
				date: "12.18.15",
				img: "https://image.ibb.co/czWvzR/simplicity_inline.jpg",
				alt: "Simplicity is Overrated",
				summary: "IS SIMPLICITY A real thing? Or is design the pursuit of something else entirely? A Logic 101 professor once explained to the class I was in that a major factor in screaming matches between people is the lack of a shared definition of a key term. “Clean,” for example, can be measured in degrees. It can mean very different things to people depending on their standards of cleanliness. Then there’s a word like “simple.” Two people can have very different definitions of a word like that. Designers, in particular, most definitely do.",
				link: "https://www.wired.com/2015/12/simplicity-is-overrated-in-ux-design/"
			},
			{
				title: "Kill Friction Before it Kills Your UX",
				author: "Jerry Cao",
				date: "01.15.17",
				img: "https://preview.ibb.co/mOYVYm/kill_friction.png",
				alt: "Kill Friction",
				summary: "It’s been about 15 years since Steve Krug first advised us to not make users think. Friction is anything that prevents users from accomplishing their goals — confusion, distraction, hesitation, or anything else that forces them to think. Let’s take a refresher course on how to smooth over friction points in your design.",
				link: "https://www.uxpin.com/studio/blog/kill-friction-before-it-kills-your-ux/"
			},
			{
				title: "Why White Space is Crucial to UX Design",
				author: "Jerry Cao, Kamil Zieba & Matt Ellis",
				date: "5.28.15",
				img: "https://image.ibb.co/geVzR6/white_space.png",
				alt: "White Space is Crucial",
				summary: "All good visual artists understand the importance of negative space, the empty area that draws attention to, and accentuates, the actual subject. Negative space (the artistic equivalent of a designer’s white space) is like the supporting cast whose duty is to make the star of the show stand out more by not standing out so much themselves. If you don’t think any part of your design should be intentionally blank, take a look at the World’s Worst Website Ever for an extreme example of the damage caused by too many objects competing for attention. In interaction design, white space isn’t just an aesthetic choice— it serves three essential functions.",
				link: "https://www.fastcodesign.com/3046656/why-white-space-is-crucial-to-ux-design"
			},
			{
				title: "Bad User Interface Design is Death by a Thousand Cuts",
				author: "Paul Boag",
				date: "02.03.15",
				img: "https://preview.ibb.co/eNB666/show_me.jpg",
				alt: "Bad UI is Death",
				summary: "Too often we excuse small usability issues by saying it is only a minor inconvenience. But small things add up.",
				link: "https://boagworld.com/usability/bad-user-interface-design-is-death-by-a-thousand-cuts/"
			}
		]

		return (
			<div className="articles" id="articles">
				<Article articles = { articles } />
			</div>
		)
	}
}
