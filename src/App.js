import React from 'react'
import Header from './componentes/Header'
import Body from './componentes/Body'
import Dados from './componentes/Dados'
import './App.css'



export default function App(){
  const Funciona='Por favor Funciona'
 //const soma=(v1,v2)=>{
    //return v1+v2
  

  return(

   <section>
     <Header />
     <Body />
     <Dados Funciona={Funciona}
           // soma={soma}
     
     />
   </section>
  ) 
}