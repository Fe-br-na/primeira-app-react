import React, { useState } from 'react';
import Notas from './componentes/Notas';
import RecebeNota from './componentes/RecebeNota';

export default function Elevacao_State() {

        const [notas,setNotas]=useState({"nota1":"0","nota2":"0","nota3":"0","notas4":"0"})
	const handleSetNotas=(e)=>{
		if(e.target.geAttribute('name')==='nota1'){
			setNotas({"nota1":notas.nota1,"nota2":notas.nota2,"nota3":notas.nota3,"nota4":notas.nota4})
		}else if(e.target.geAttribute('name')==='nota2'){
			setNotas({"nota1":notas.nota1,"nota2":e.target.value,"nota3":notas.nota3,"nota4":notas.nota4})
		}else if(e.target.geAttribute('name')==='nota3'){
			setNotas({"nota1":notas.nota1,"nota2":notas.nota2,"nota3":e.target.value,"nota4":notas.nota4})
		}else if(e.target.geAttribute('name')==='nota4'){
			setNotas({"nota1":notas.nota1,"nota2":notas.nota2,"nota3":notas.nota3,"nota4":e.target.value})
		}
	}
	return (
		<>
		<Notas num={1} nome={'nota1'} nota={notas.nota1} setNota={handleSetNotas}/>
		<Notas num={2} nome={'nota2'} nota={notas.nota2} setNota={handleSetNotas}/>
		<Notas num={3} nome={'nota3'} nota={notas.nota3} setNota={handleSetNotas}/>
		<Notas num={4} nome={'nota4'} nota={notas.nota4} setNota={handleSetNotas}/>
		<RecebeNota somaNotas={parseFloat(notas.nota1)+parseFloat(notas.nota2)+parseFloat(notas.nota3)+parseFloat(notas.nota4)}/>
		</>
	);
}