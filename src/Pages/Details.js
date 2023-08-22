import React from "react";
import { useParams, Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { Helmet } from "react-helmet";

import { services } from "../Data/servicesData"; // Import the services data from NaseSluzby

const Details = () => {
  const { title } = useParams();

  // Find the service that matches the title parameter
  const service = services.find((service) => service.link === title);

  return (
    <>
      <Helmet>
        <title>{service.title} | AKZ Advokátní kancelář Zrnovský</title>
      </Helmet>
      <Header background={true} title={service ? service.title : "Details"} />
      <main>
        <div className="details max-width">
          <div className="details-wrapper">
            {service && (
              <>
                <div className={service.infoList ? "text-side" : ""}>
                  {service.text.map((text, index) => (
                    <p key={index} className="details-text">
                      {text}
                    </p>
                  ))}
                  {service.textList && (
                    <div>
                      {service.textList.map((item, index) => (
                        <div key={index} className="details-article">
                          <h2>{item.title}</h2>
                          {item.paragraph.map((paragraph, index) => (
                            <p>{paragraph}</p>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}

                  <Link to="/kontakt" className="btn-nav">
                    <button className="btn btn-black">
                      Kontaktujte nás{" "}
                      <span class="arrow-icon arrow-icon-dark"></span>
                    </button>
                  </Link>
                </div>
                {service.infoList && (
                  <div className="list-side">
                    <h3>{service.infoListTitle}</h3>
                    <ul>
                      {service.infoList.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Details;
