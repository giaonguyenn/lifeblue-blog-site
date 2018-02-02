import React, { Component } from "react";

import "./Newsletter.css";

export default class Newsletter extends Component {
	render() {
		return (
			<div className="newsletter" id="newsletter">
				<div className="input-field">
					<h3> Sign up to receive more UI inspirations! </h3>
					<label>
			            <input type="text" />
			            <div class="label-text"><i class="fa fa-envelope prefix grey-text"></i> Email Address </div>
			    	<button type="submit">Submit</button>
			        </label>
				</div>
			</div>
		)
	}
}