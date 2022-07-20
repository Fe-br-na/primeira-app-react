import React from 'react';

export default function Lista() {

     const carros=[
	{categoria: "Esporte", preco: "110000.00", modelo: "Golf GTI"},
	{categoria: "Espore", preco: "120000.00", modelo: "Camaro"},
	{categoria: "SUV", preco: "85000.00", modelo: "HRV"},
	{categoria: "SUV", preco: "83000.00", modelo: "T-CROSS"},
	{categoria: "Utilitario", preco: "120000.00", modelo: "Hillux"},
	{categoria: "Utilitario", preco: "90000.00", modelo: "Ranger"}

     ]
     const listacarros=carros.map(
	(c,i)=>
		<li key={i}>{i} - {c.categoria} {c.modelo} - R${c.preco}</li>

	
     )
	return (
		<>
		{listacarros} 
		</>
	);
}