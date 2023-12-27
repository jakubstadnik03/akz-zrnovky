import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <Helmet>
        <title>AKZ Advokátní kancelář Zrnovský & Zrnovská</title>
      </Helmet>
      <Header />
      <main
        className="main-image"
        style={{
          backgroundImage: `url("img/background.jpg"), url("svg/lines.svg")`,
        }}
      >
        <div className="main-wrapper">
          <h1 className="main-title">
            <div className="main-title-large">Advokátní kancelář </div>
            <br /> Mgr. Jan Zrnovský, advokát <br />
            Mgr. et Mgr. Lucie Zrnovská, advokátka
          </h1>
          <hr className="line" />
          <h2 style={{ fontWeight: "bold" }}>
            Rodinná firma s více než 40 letou praxí v oboru.
          </h2>
          <Link to="/kontakt" className="btn-nav">
            <button className="btn">
              Kontaktujte nás <span className="arrow-icon "></span>
            </button>
          </Link>
        </div>
      </main>
      <Footer />
      <Analytics />
    </>
  );
}

export default App;
