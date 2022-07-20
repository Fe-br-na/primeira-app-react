//import React,{useState} from 'react'
import React from "react";
import Logo from "./imgs/2BContab-Roxo.svg";
//import Simbolo from './imgs/simbolo.png'
import "./App.css";


export default function Header() {
  //const [ligado,setLigado]=useState(true)
  const icones = ["A 2B Contab", "Serviços Adicionais", "FAQ", "Blog"];
  const iista = icones.map((i) => <h1>{i}</h1>);

  return (
    <header>
      <img alt="logo 2B" src={Logo} style={{ width: "10%" }} />
      <>{iista}</>
      {/*<button onClick={()=>setLigado(!ligado)}>{ligado?'Ligar':'Desligar'}</button>*/}
    </header>
  );
}
