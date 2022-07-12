import React from 'react'
import './App.css'

export default function Dados(props){

	const textoDestaque={
		color:'#00f',
		fontSize:'2em'
	}

	return(
		<section className='caixa'>
			<p style={textoDestaque}>Funciona:{props.Funciona}</p>
			<p className='texto'>como resolver seu problema</p>
			
		</section>
	)
}
