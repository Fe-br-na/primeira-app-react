import React from 'react';

export default function RecebeNota(props) {

	

	return (
		<div>
		<p>Soma das notas: {props.somaNotas}</p>
		<p>{props.somaNotas >= 60 ? "Aprovado" :"Repovado"} </p>
		</div>
	);
}