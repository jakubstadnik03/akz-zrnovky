import React from "react";
import "./contact.css";

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <div className="contact-list list-side">
        <h2>Kontaktní údaje</h2>
        <div className="contact-together">
          <div className="contact-item">
            <span>Jméno:</span>{" "}
            <span className="contact-name-side">Mgr. Jan Zrnovský</span>
          </div>
          <div className="contact-item">
            <span>Email:</span>{" "}
            <span className="contact-name-side">zrnovsky@email.cz</span>
          </div>
        </div>
        <div className="contact-together">
          <div className="contact-item">
            <span>Jméno:</span>
            <span className="contact-name-side">
              {" "}
              Mgr. et Mgr. Lucie Zrnovská
            </span>
          </div>

          <div className="contact-item">
            <span>Email:</span>{" "}
            <span className="contact-name-side">luciezrnovska@email.cz</span>
          </div>
        </div>
        <div className="contact-item">
          <span>Telefon:</span>{" "}
          <span className="contact-name-side">+ 420 485 107 874</span>
        </div>
        <div className="contact-item">
          <span>Adresa:</span>
          <span className="contact-name-side">
            nám. Dr. E. Beneše 4/12, Liberec 460 01
          </span>
        </div>
        {/* <div className="contact-item">
          <span>GDPR:</span> GDPR information and link
        </div> */}
      </div>
    </div>
  );
};

export default ContactInfo;
