import React, { useState } from "react";
import BannerComponent from "../components/HomeComponent/BanneComponent";
import Body2Component from "../components/HomeComponent/Body2Component";
import Body3Component from "../components/HomeComponent/Body3Component";

function Home() {
  const [cookies, setCookies] = useState(true);
  const handlecookies = () => {
    setCookies(false);
  };

  return (
    <>
      <BannerComponent />
      <Body2Component
        titulo1={"¿Quiénes somos?"}
        text1={
          "Somos una empresa de laboratorios de Test Clínicos comprometida a ofrecer servicios de Primer Mundo a precios accesibles para toda la población."
        }
        titulo2={"¿Cómo podemos dar estos precios?"}
        text2={
          "Nuestra misión es cuidar del paciente y sus ingresos sobre todo en esta etapa de pandemia, ofreciendo la mayor confidencialidad y confiabilidad en cada test clínico."
        }
        titulo3={"¿Qué servicios ofrecen?"}
        text3={
          "Ofrecemos servicio a domicilio en un CLICK y también en nuestra sucursal."
        }
      />
      <Body3Component />
    </>
  );
}

export default Home;
