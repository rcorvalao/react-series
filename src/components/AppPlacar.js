import React from 'react';

import PlacarContainer from './PlacarContainer'


const placar = {
	partida: {
		estadio: "Maracanã / RJ",
		data: "01/07/2017",
		horario: "16:30",
	},
	casa: {
		nome: "Grêmio",
	},
	visitante: {
		nome: "Botafogo",
	}
};

export default class AppPlacar extends React.Component {
	render() {
		return (
			<PlacarContainer {... placar} tempo={92}/>
		);
	}
}