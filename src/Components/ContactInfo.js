import React from "react";
import "./contact.css";

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <div className="contact-list list-side">
        <h2>Kontaktní údaje</h2>
        <div className="contact-item">
          <span>Jméno:</span> Mgr. Jan Zrnovský
        </div>
        <div className="contact-item">
          <span>Email:</span> zrnovsky@email.cz
        </div>
        <div className="contact-item">
          <span>Jméno:</span> Mgr. Jan Zrnovský
        </div>
        <div className="contact-item">
          <span>Email:</span> luciezrnovska@email.cz
        </div>
        <div className="contact-item">
          <span>Telefon:</span> + 420 485 107 874
        </div>
        <div className="contact-item">
          <span>Adresa:</span>
          nám. Dr. E. Beneše 4/12, Liberec 460 01
        </div>
        {/* <div className="contact-item">
          <span>GDPR:</span> GDPR information and link
        </div> */}
      </div>
    </div>
  );
};

export default ContactInfo;
