import React from "react";
import '../estilos/usuario.css';
export function Usuario(props) {
    return (
      <div className="contenedor-usuario">
        <img
          className="imagen-usuario"
          src={require(`../imagenes/usuario-${props.imagen}.png`)}
          alt="foto de carla "
        />
        <div className="contenedor-texto">
          <p className="nombre-testimonio"><strong>{props.nombre}</strong> </p>
          <p className="ciudad">{props.ciudad} </p>
          <p className="texto">"{props.texto}"</p>
        </div>
      </div>
    );
}
