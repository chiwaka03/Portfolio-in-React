import React from 'react';
import './CSS/CardApple.css';

const CardApple: React.FC = () => {
  return (
    <div className="ventana-apple">
      <div className="barra-superior">
        <div className="botones">
          <div className="boton boton-rojo"></div>
          <div className="boton boton-amarillo"></div>
          <div className="boton boton-verde"></div>
        </div>
        <div className="titulo">Habilidades</div>
      </div>
    </div>
  );
};

export default CardApple;
