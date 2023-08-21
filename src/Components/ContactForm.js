import React from "react";
import "./contact.css";

const ContactForm = () => {
  return (
    <div className="contact-form">
      <form>
        <div className="form-group">
          <label>Jméno</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" />
        </div>
        <div className="form-group">
          <label>Telefon</label>
          <input type="tel" />
        </div>
        <div className="form-group">
          <label>Zpráva pro nás</label>
          <textarea></textarea>
        </div>
        <div className="form-group">
          <label>Vyberte datum schůzky</label>
          <input type="date" />
        </div>
        <button type="submit">Odeslat</button>
      </form>
    </div>
  );
};

export default ContactForm;
