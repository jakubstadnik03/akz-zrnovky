import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

export default function Footer({ bottom }) {
  return (
    <footer className={`footer  ${bottom ? "footer-bottom" : ""}`}>
      <div className="max-width">
        <div className="row">
          <img
            src={logo}
            alt="logo advokátní kancelář AKZ"
            className="footer-col footer-logo"
          />
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
                <Link to="/nase-sluzby/obchodne-pravni-agenda">
                  Obchodně právní agenda
                </Link>
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
                  <address className="address">
                    nám. Dr. E. Beneše 4/12, Liberec 460 01
                  </address>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-col">
            <h4>Provozní doba kanceláře</h4>
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
