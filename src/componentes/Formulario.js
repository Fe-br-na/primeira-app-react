import React, { useState } from "react";


export default function Formulario() {
  const [nome, setNome] = useState("");
  const [carro, setCarro] = useState("");

  return (
    <>
      <label>Digite seu Nome</label>
      <input
        type="tex"
        name="fnome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <p>Nome digitado: {nome}</p>
      <label>Selecione um carro</label>
      <select value={carro} onChange={(e) => setCarro(e.target.value)}>
        <option value="HRV">HRV</option>
        <option value="Golf">Golf</option>
        <option value="Gol">Gol</option>
        <option value="HB20s">HB20s</option>
      </select>
      <p>Carro slecionado: {carro}</p>
    </>
  );
}
