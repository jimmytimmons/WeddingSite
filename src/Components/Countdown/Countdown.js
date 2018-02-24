import React, { Component } from 'react'
import PropTypes from 'prop-types';

import './Countdown.scss'

const className = `Countdown`;
const weddingDate =  new Date('12/09/2018');

class Countdown extends Component {
	constructor(props) {
		super(props);

		this.determineDays = this.determineDays.bind(this);
		this.startTimer = this.startTimer.bind(this);
		this.countdown = this.countdown.bind(this);

		this.timer = null;
		this.state = {
			days: 0
		};
	}

	determineDays(){
		const now = new Date().getTime();
		return Math.ceil((weddingDate - now) / (1000 * 60 * 60 * 24));
	}

	startTimer() {
		if(this.timer === null) {
			this.timer = setInterval(this.countdown, 1000);
		}
	}

	countdown(){
		const days = this.state.days - 1;

		this.setState({
			days
		});

		if(days === 0) {
			clearInterval(this.timer);
		}
	}

	componentDidMount() {
		const daysLeft = this.determineDays();
		this.setState({ days: daysLeft });
	}

	render()  {
		return (
			<div
				className={className}
			>
				{`${this.state.days} days away`}
			</div>
		);
	}
}

export default Countdown;