import React from "react";
import "./App.css";
import Relogio from "./Relogio";
import Lista from "./Lista";
import Formulario from "./Formulario";

export default function Dados(props) {
  const textoDestaque = {
    color: "#00f",
    fontSize: "2em",
  };

  return (
    <section className="caixa">
      <Formulario/>
	<Lista/>
      <Relogio />
      <p style={textoDestaque}>Funciona:{props.Funciona}</p>
      <p className="texto">como resolver seu problema</p>
      <b href="#" target="blank">
        CPF{" "}
      </b>
    </section>
  );
}
