import React from "react";
import logotipo_secundario from "../Assets/Img/logotipo_secundario.png";

const Nosotros = () => {
  return (
    <div>
      <div>
        <h1>Nosotros</h1>
      </div>
      <div>
        <p className="description">
          Hola!, mi nombre es Sabrina y este es mi emprendimiento familiar
          surgido en el barrio de Turdera. Espero que puedas encontrar algo rico
          para compartir y disfrutar con los que mas queres!
        </p>
        <img src={logotipo_secundario} alt="" width="750" height="600" />
      </div>
    </div>
  );
};

export default Nosotros;
