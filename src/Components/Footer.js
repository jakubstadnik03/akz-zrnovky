import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

export default function Footer({ bottom }) {
  return (
    <footer className={`footer  ${bottom ? "footer-bottom" : ""}`}>
      <div className="max-width">
        <div className="row">
          <Link to="/" className="footer-col footer-logo">
            <img src={logo} alt="logo advokátní kancelář AKZ" />
          </Link>
          <div className="footer-col">
            <h4>Naše služby</h4>
            <ul>
              <li>
                <Link to="/nase-sluzby/rodinne-pravo">Rodinné právo</Link>
              </li>
              <li>
                <Link to="/nase-sluzby/obcanske-pravo">Občanské právo</Link>
              </li>
              <li>
                <Link to="/nase-sluzby/trestni-pravo">Trestní právo</Link>
              </li>
              <li>
                <Link to="/nase-sluzby/smluvni-agenda">Smluvni agenda</Link>
              </li>
              <li>
                <Link to="/nase-sluzby/pomoc-obetem-trestnych-cinu">
                  Pomoc obětem trestných činů
                </Link>
              </li>
              <li>
                <Link to="/nase-sluzby/pracovni-pravo">Pracovní právo</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Kontakt</h4>
            <div className="contact">
              <ul>
                <li>
                  <a href="tel:+ 420 485 107 874" className="phone">
                    + 420 485 107 874
                  </a>
                </li>
                <li>
                  <a href="mailto:zrnovsky@email.cz" className="mail">
                    zrnovsky@email.cz
                  </a>
                </li>
                <li>
                  <a href="mailto:luciezrnovska@email.cz" className="mail">
                    lucie.zrnovska@email.cz
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.google.com/maps/place/Mgr.+Jan+Zrnovský/@50.7690427,15.0553878,17z/data=!3m1!4b1!4m6!3m5!1s0x4709369ee05d345f:0x7605682481bff95c!8m2!3d50.7690427!4d15.0579627!16s%2Fg%2F1tghn99w?entry=ttu"
                    className="address"
                    target="_blank"
                    rel="noreferrer"
                  >
                    nám. Dr. Edvarda Beneše 4/12, Liberec III- Jeřáb 460 07
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-col">
            <h4>Provozní doba advokátní kanceláře</h4>
            <ul>
              <li className="date">
                <span className="date-left">Pondělí</span>
                <span>8.00 do 16.30 hodin</span>
              </li>
              <li className="date">
                <span className="date-left">Úterý</span>
                <span>8.00 do 16.30 hodin</span>
              </li>
              <li className="date">
                <span className="date-left">Středa</span>
                <span>8.00 do 16.30 hodin</span>
              </li>
              <li className="date">
                <span className="date-left">Čtvrtek</span>
                <span>8.00 do 16.30 hodin</span>
              </li>
              <li className="date">
                <span className="date-left">Pátek</span>
                <span>8.00 do 12.30 hodin</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
