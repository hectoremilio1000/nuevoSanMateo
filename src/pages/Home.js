import React, { useState } from "react";
import BannerComponent from "../components/HomeComponent/BanneComponent";

function Home() {
  const [cookies, setCookies] = useState(true);
  const handlecookies = () => {
    setCookies(false);
  };

  return (
    <>
      <BannerComponent />
    </>
  );
}

export default Home;
