import React from 'react'
import Header from './componentes/Header'
//import Body from './componentes/Body'
//import Dados from './componentes/Dados'
//import './App.css'
//import Render from './componentes/Render'
//import Elevacao from './Elevacao'
import LocalStorage from './componentes/LocalStorage'



export default function App(){
 // const Funciona='Por favor Funciona'
 //const soma=(v1,v2)=>{
    //return v1+v2
  

  return(
/*
   <section>
     <Header />
     <Elevacao_State/>
     <Dados Funciona={Funciona}
           // soma={soma}
     <Elevacao/>
     />
   </section>
   */
  <section>
    <Header/>
    <LocalStorage/>
  </section>
  ) 
}