import React from "react";
import servicios from "../../assets/data2/servicios2";
import { Link } from "react-router-dom";

export default function Body3Component() {
  return (
    <div className="body3component" id="pruebasCovid">
      <div className="pt-4 text-center">
        <h1 className="font-weight-bold">¿Qué pruebas tienen disponibles?</h1>
        <h4 className="h5">
          Pruebas de COVID con un <b>CLICK</b> o en sucursal
        </h4>
      </div>

      <div className="row mt-2 mb-2">
        {servicios
          .filter(servicio => servicio.category === "covid")
          .map(servicio => (
            <div className="col-12 col-md-4 pb-4 pl-2 subcontainer1body3">
              <img
                className="img-fluid mx-auto d-block mt-4 mb-2 imagenbody3"
                src={servicio.imagen}
                alt=""
              />
              <div>
                <h6 className="text-center mb-2 tituloCard">
                  {servicio.titulo}
                </h6>
                <p className="text-center mb-2 muestraCard">
                  {servicio.tipoMuestra}
                </p>
                {/* <p className="text-center mb-2">{servicios[0].descripcioncorta}</p> */}
                <p className="text-center mb-2 resultadosCard">
                  {servicio.resultados}
                </p>
                <p className="text-center mb-2 comentariosCard">
                  {servicio.comentarios}
                </p>
              </div>
              <div className="d-flex justify-content-center">
                <Link to="https://wa.me/+5219511028474">
                  <button className="btn btn-success rounded mt-3">
                    ¡Reserva ya! ${servicio.precio}{" "}
                    <h6 className="font-weight-lighter oldPricebody3 pt-1">
                      ${servicio.oldPrice}
                    </h6>
                  </button>
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}