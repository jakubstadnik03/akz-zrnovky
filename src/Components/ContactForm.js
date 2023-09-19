import { useRef } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_47m0lpw",
        "template_opggguu",
        form.current,
        "na8xge_55u88BuNEA"
      )
      .then(
        (result) => {
          alert("Vaš dotaz byl úspěšně odeslán!");
          document.location.href = "/";
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact-form">
      <form ref={form} onSubmit={sendEmail}>
        <div className="form-group">
          <label>Jméno</label>
          <input type="text" name="user_name" placeholder="Jméno a příjmení" />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="vzor@vzor.cz"
            name="user_email"
            required
          />
        </div>
        <div className="form-group">
          <label>Telefon</label>
          <input type="tel" placeholder="775 116 555 333" name="user_phone" />
        </div>
        <div className="form-group">
          <label>Zpráva pro nás</label>
          <textarea
            placeholder="Zde se nás můžete zeptat na cokoliv a napsat, o jakou službu by jste měli zájem"
            rows="4"
            name="message"
            id="message"
            required
          ></textarea>
        </div>
        <button type="submit">Odeslat</button>
      </form>
    </div>
  );
};

export default ContactForm;
