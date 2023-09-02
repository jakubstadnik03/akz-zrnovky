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
            <span className="contact-name-side">
              Mgr. Jan Zrnovský, advokát
            </span>
          </div>
          <div className="contact-item">
            <span>Email:</span>{" "}
            <span className="contact-name-side">
              <a href="mailto:zrnovsky@email.cz">zrnovsky@email.cz</a>
            </span>
          </div>
        </div>
        <div className="contact-together">
          <div className="contact-item">
            <span>Jméno:</span>
            <span className="contact-name-side">
              {" "}
              Mgr. et Mgr. Lucie Zrnovská, advokátka
            </span>
          </div>

          <div className="contact-item">
            <span>Email:</span>{" "}
            <span className="contact-name-side">
              <a href="mailto:luciezrnovska@email.cz">
                lucie.zrnovska@email.cz
              </a>
            </span>
          </div>
        </div>
        <div className="contact-item">
          <span>Telefon:</span>{" "}
          <span className="contact-name-side">
            <a href="tel:+ 420 485 107 874">+ 420 485 107 874</a>
          </span>
        </div>
        <div className="contact-item">
          <span>Adresa:</span>
          <span className="contact-name-side">
            <a
              href="https://www.google.com/maps/place/Mgr.+Jan+Zrnovský/@50.7690427,15.0553878,17z/data=!3m1!4b1!4m6!3m5!1s0x4709369ee05d345f:0x7605682481bff95c!8m2!3d50.7690427!4d15.0579627!16s%2Fg%2F1tghn99w?entry=ttu"
              target="_blank"
              rel="noreferrer"
            >
              nám. Dr. Edvarda Beneše 4/12, Liberec III- Jeřáb 460 07
            </a>
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
