import React from "react";
import ContactForm from "../Components/ContactForm";
import ContactInfo from "../Components/ContactInfo";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

const Kontakt = () => {
  return (
    <>
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
