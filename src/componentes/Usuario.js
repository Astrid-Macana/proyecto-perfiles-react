import React from "react";

export function Usuario() {
    return (
      <div className="contenedor-usuario">
        <img
          className="imagen-usuario"
           src={require("../imagenes/Captura.PNG")}
          alt="foto de carla "
        />
        <div className="contenedor-texto">
          <p className="nombre-testimonio"> Carla Sanchez </p>
          <p className="ciudad">Bogota -Colombia </p>
          <p className="texto">
            Observadora y detallista, Ada Lovelace fue la primera persona en
            notar que el motor analítico servía más que para hacer cálculos,
            razón por la que digitó un algoritmo para calcular los números de
            Bernoulli usando dicha herramienta
          </p>
        </div>
      </div>
    );
}
