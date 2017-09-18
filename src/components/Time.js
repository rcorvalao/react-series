import React from 'react';

import BotaoGol from './BotaoGol'

export default class Time extends React.Component {

	constructor() {
		super();
	}

	render () {
		return (
			<div>
				<h2>{this.props.nome}</h2>
				<h1>{this.props.gols}</h1>
				<BotaoGol marcarGol = {this.props.marcarGol} />
			</div>
		);
	}
}