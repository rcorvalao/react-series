import React from 'react';

import Time from './Time';
import LocalHorario from './LocalHorario'

export default class PlacarContainer extends React.Component {
	constructor() {
		super();

		this.state = {
			gols_casa: 0,
			gols_visitante: 0,
		};
	}

	marcarGolCasa() {
		this.setState({
			gols_casa: this.state.gols_casa + 1,
		});
	}

	marcarGolVisitante() {
		this.setState({
			gols_visitante: this.state.gols_visitante + 1,
		});
	}

	render () {
		const { partida, casa, visitante } = this.props;
		const estilo = {float: "left", marginRight: "25px"};

		return (
			<div>
				<table>
					<tbody>
					<tr><td>Placar</td></tr>
					<tr>
						<td>
							<label>Casa</label>
							<Time nome={casa.nome}
									gols={this.state.gols_casa}
									marcarGol={this.marcarGolCasa.bind(this)} />

						</td>
						<td>
							<LocalHorario {... partida} /> 
						</td>
						<td>
							<label>Visistante</label>
							<Time nome={visitante.nome}
									gols={this.state.gols_visitante}
									marcarGol={this.marcarGolVisitante.bind(this)} />

						</td>
					</tr>
					</tbody>
				</table>				
			</div>
		);
	}
}


PlacarContainer.propTypes = {
	clima: React.PropTypes.string,
	tempo: React.PropTypes.number.isRequired,
	visitante: React.PropTypes.object.isRequired,
};

PlacarContainer.defaultProps = {
	clima: 'Ensolarado',
};