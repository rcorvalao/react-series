import React from 'react';

export default class LocalHorario extends React.Component {
	render () {
		return (
			<div>
				<label>Local / Horário</label>
				<div>
					<span>{this.props.estadio}</span>
					<div>
						<span>{this.props.data}</span>
						<span> - </span>
						<span>{this.props.horario}</span>
					</div>
				</div>
			</div>
		);
	}
}