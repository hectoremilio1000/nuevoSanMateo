import React from "react";
import { Link } from "react-router-dom";

export default function BannerComponent() {
  return (
    <div className="row banner d-flex justify-content-start ">
      <header
        className="col jumbotron jumbotron-fluid bannerFinal"
        style={{
          backgroundImage: `url("https://imagenesrutalab.s3.amazonaws.com/sanmateo/banner_laboratorioFaseI.4.jpg")`,
          backgroundSize: "cover",
          height: "80vh",
          backgroundPosition: "center",
        }}
      >
        <div className="container-fluid">
          <div className="col-6 col-sm-7 justify-content-md-start">
            <h1 className="display-5 font-weight-bold pt-3 text-start titleBanner">
              ¿Laboratorio Urgente?
            </h1>
            <h3 className="lead display-5 pb-5 subtituloBanner">
              Servicio a domicilio con un click o en sucursal
            </h3>
            <Link to="https://wa.me/+5219511028474">
              <button
                type="button"
                className="btn btn-success btn-lg text-white"
              >
                ¡Reserva ya!
              </button>
            </Link>
            <h1 className="display-5 font-weight-bold pt-3 text-start proximamente">
              Empresa 100% confiable. Sucursales en la Ciudad de <b>Oaxaca</b> y
              próximamente en <b>Puebla</b>
            </h1>
          </div>
        </div>
      </header>
    </div>
  );
}
