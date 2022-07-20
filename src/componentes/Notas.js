import React from 'react';

export default function Notas(props) {

	

	return (
		<div>
		<legend>Informe a nota: {props.num}</legend>
		<input type="text" name={props.nome} value={props.nota}onChange={(e)=>props.setNota(e)}></input>
		</div>
	);
}