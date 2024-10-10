import React from "react";
import ContactForm from "../Components/ContactForm";
import ContactInfo from "../Components/ContactInfo";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { Helmet } from "react-helmet";

const Kontakt = () => {
  return (
    <>
      <Helmet>
        <title>
          Kontaktní údaje | AKZ Advokátní kancelář Zrnovský & Zrnovská
        </title>
      </Helmet>
      <Header background={true} title={"Kontaktujte nás"} />
      <main className=" content-2">
       <div className="contact-wrapper">
          <ContactForm />
          <ContactInfo />
       </div>
      </main>
      <Footer bottom={true} />
    </>
  );
};

export default Kontakt;
