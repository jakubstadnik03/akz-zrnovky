import React from "react";
import { useParams, Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { Helmet } from "react-helmet";
import { saveAs } from "file-saver";

import { aktuality } from "../Data/aktualityData"; 

const AktualityDetails = () => { // Opravený název
  const { title } = useParams();
  console.log(title);

  // Najdeme odpovídající aktualitu
  const aktualita = aktuality.find((aktualita) => aktualita.link === title);

  // Pokud nenajdeme odpovídající aktualitu, zobrazíme chybovou zprávu
  if (!aktualita) {
    return <p>Aktualita nenalezena</p>;
  }

  const downloadFile = () => {
    if (aktualita.downloadFile) {
      saveAs(aktualita.downloadFile, "document.rtf");
    } else {
      console.error("Soubor nelze stáhnout, chybí URL.");
    }
  };

  return (
    <>
      <Helmet>
        <title>{aktualita.title} | AKZ Advokátní kancelář Zrnovský & Zrnovská</title>
      </Helmet>
      <Header
        width={true}
        background={true}
        title={aktualita.title}
      />
      <main className="max-width aktualita-content">
        {aktualita.text.map((text, index) => (
          <p className="aktualita-text" key={index}>
            {text}
          </p>
        ))}

        {aktualita.downloadFile && (
          <button
            className="btn btn-black"
            style={{ marginRight: "20px" }}
            onClick={downloadFile}
          >
            Stáhnout celý dokument
            <span className="arrow-icon arrow-icon-dark"></span>
          </button>
        )}

        <Link to="/kontakt">
          <button className="btn btn-black">
            Kontaktujte nás <span className="arrow-icon arrow-icon-dark"></span>
          </button>
        </Link>
      </main>
      <Footer bottom={true} />
    </>
  );
};

export default AktualityDetails;
