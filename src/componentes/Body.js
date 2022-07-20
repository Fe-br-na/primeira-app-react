import React, { useState } from "react";

export default function Body() {
  const [cor, setCor] = useState(1);

  const vermelho = { color: "#f00" };
  const verde = { color: "#0f0" };
  const azul = { color: "#00f" };

  const recor=(c)=>{
    if (c===1){
      return vermelho
    } else if (c===2){
      return verde
    } else {
      return azul
    }
  };

  const mudaCor = () => {
    setCor(cor + 1);
    if (cor > 2) setCor(1);
  };

  setInterval(mudaCor,2000);

  return (
    <>
      <h2 style={recor(cor)}> A Primeira contabilidade GRÁTIS do Brasil</h2>
      <button onClick={() => mudaCor()}>MudaCor</button>
    </>
  );
}