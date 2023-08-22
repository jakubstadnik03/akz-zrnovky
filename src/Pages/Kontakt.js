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
        <title>Kontaktní údaje | AKZ Advokátní kancelář Zrnovský</title>
      </Helmet>
      <Header background={true} title={"Kontaktujte nás"} />
      <main className="contact-wrapper">
        <ContactForm />
        <ContactInfo />
      </main>
      <Footer />
    </>
  );
};

export default Kontakt;
