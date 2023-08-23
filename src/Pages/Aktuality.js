import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { Link } from "react-router-dom";
import { aktuality } from "../Data/aktualityData";
const Aktuality = () => {
  const Box = ({ data }) => {
    const linkTo = `/aktuality/${data.link}`;

    return (
      <div className="box-content aktuality-box">
        <Link to={linkTo}>
          <h2 className="box-title">{data.title}</h2>
        </Link>
        <p className="box-short-text">{data.shortText}</p>
        <Link to={linkTo}>
          <button className="btn btn-black btn-aktuality">
            Přečíst celý článek
            <span className="arrow-icon arrow-icon-dark"></span>
          </button>
        </Link>
        <span className="box-date">{data.date}</span>
      </div>
    );
  };
  return (
    <>
      <Header background={true} title="Aktuality" />
      <main>
        <div className="aktuality max-width">
          <h3>Přinášíme vám nové aktuality ze světa advokacie</h3>
          {aktuality.map((service, index) => (
            <Box key={index} data={service} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Aktuality;