import React from "react";
import imagen1 from "../../images/body_2_serviciosSanMateo.jpg";

export default function Body2Component({
  titulo1,
  text1,
  text2,
  titulo2,
  text3,
  titulo3,
}) {
  return (
    <div className="row containerbody2" id="somos">
      <div className="col-sm-8 d-flex flex-column justify-content-center">
        <h1 className="display-5 font-weight-bold ml-2 pt-0 titulo1body2 text-center">
          {titulo1}
        </h1>
        <p className="h5 ml-2 texto1body2 text-center">{text1}</p>
        <h1 className="display-6 font-weight-bold ml-2 titulo1body2 text-center">
          {titulo2}
        </h1>
        <p className="h5 ml-2 texto1body2 text-center">{text2}</p>
        <h1 className="display-6 font-weight-bold ml-2 titulo1body2 text-center">
          {titulo3}
        </h1>
        <p className="h5 ml-2 texto1body2 text-center">{text3}</p>
      </div>
      <div className="col-sm-4 containerImagenSomos mb-4">
        <img
          className="img-fluid imagenSomos "
          src={imagen1}
          alt="Max-width 100% mw-100"
        />
      </div>
    </div>
  );
}
