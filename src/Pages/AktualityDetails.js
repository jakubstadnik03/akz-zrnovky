import React from "react";
import { useParams, Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { Helmet } from "react-helmet";

import { aktuality } from "../Data/aktualityData"; // Import the services data from NaseSluzby

const AktualityDetils = () => {
  const { title } = useParams();

  // Find the service that matches the title parameter
  const aktualita = aktuality.find((aktuality) => aktuality.link === title);

  return (
    <>
      <Helmet>
        <title>{aktualita.title} | AKZ Advokátní kancelář Zrnovský</title>
      </Helmet>
      <Header
        background={true}
        title={aktualita ? aktualita.title : "Details"}
      />
      <main className="max-width">
        <p>{aktualita.text}</p>
        <Link to="/kontakt">
          <button className="btn btn-black">
            Kontaktujte nás <span class="arrow-icon arrow-icon-dark"></span>
          </button>
        </Link>
      </main>
      <Footer bottom={true} />
    </>
  );
};

export default AktualityDetils;
