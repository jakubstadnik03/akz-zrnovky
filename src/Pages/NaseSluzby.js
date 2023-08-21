import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { Link } from "react-router-dom";
import { services } from "../Data/servicesData";
const NaseSluzby = () => {
  const Box = ({ data }) => {
    const linkTo = `/nase-sluzby/${data.link}`;

    return (
      <Link to={linkTo} className="sluzba-box">
        <h2>{data.title}</h2>
        {/* You can add more components here to display other data */}
      </Link>
    );
  };

  return (
    <>
      <Header
        background={true}
        title={"Specializace naší advokátní kanceláře"}
      />
      <main className="max-width">
        <h2>Služby v komplexní právní agendě</h2>
        <div className="sluzby-box">
          {services.map((service, index) => (
            <Box key={index} data={service} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default NaseSluzby;
