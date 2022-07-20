import React, { useState } from "react";

export default function Render() {

  const [log,setlog]=useState(false)

  const msglogin=()=>{
    return 'Usuário Logado'
  }
  const msglogoff=()=>{
    return 'Favor Logar'
  }
  const cumprimento = () => {
    ///const hora = 23;
  const hora=new Date().getHours() 
    if (hora >= 0 && hora < 13) {
      return <p>Bom dia</p>;
    } else if (hora >= 13 && hora < 18) {
      return <p>Boa tarde</p>;
    } else {
      return <p>Boa Noite</p>;
    }
  };
  return ( 
  <>
  {cumprimento()}
  <p>{log?msglogin():msglogoff()}</p>
  <button onClick={()=>setlog(!log)}>{log?'Logoff':'Login'}</button>
  </>
  
  );
}
