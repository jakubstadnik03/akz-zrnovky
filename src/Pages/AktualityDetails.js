import React from "react";
import { useParams, Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { Helmet } from "react-helmet";
import { saveAs } from "file-saver";

import { aktuality } from "../Data/aktualityData"; // Import the services data from NaseSluzby

const AktualityDetils = () => {
  const { title } = useParams();
  const downloadFile = () => {
    const fileURL = "/aktuality-data/1-3522-22_3.rtf"; // Replace with the correct path to your RTF file
    saveAs(fileURL, "document.rtf");
  };

  // Find the service that matches the title parameter
  const aktualita = aktuality.find((aktuality) => aktuality.link === title);

  return (
    <>
      <Helmet>
        <title>
          {aktualita.title} | AKZ Advokátní kancelář Zrnovský & Zrnovská
        </title>
      </Helmet>
      <Header
        background={true}
        title={aktualita ? aktualita.title : "Details"}
      />
      <main className="max-width aktualita-content">
        {aktualita.text.map((aktualita) => {
          return (
            <p className="aktualita-text" key={aktualita}>
              {aktualita}
            </p>
          );
        })}
        <button
          className="btn btn-black"
          style={{ marginRight: "20px" }}
          onClick={downloadFile}
        >
          Stáhnout celý dokument
          <span className="arrow-icon arrow-icon-dark"></span>
        </button>

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

export default AktualityDetils;
