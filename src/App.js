import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <main
        className="main-image"
        style={{
          backgroundImage: `url("img/background.jpg"), url("svg/lines.svg")`,
        }}
      >
        <div className="main-wrapper">
          <h1 className="main-title">
            Mgr. Jan Zrnovský a <br />
            Mgr. et Mgr. Lucie Zrnovská, advokátní kancelář
          </h1>
          <hr className="line" />
          <h2>Rodinná firma s více než 40 letou praxí v oboru.</h2>
          <Link to="/kontakt" className="btn-nav">
            <button className="btn">
              Kontaktujte nás <span class="arrow-icon "></span>
            </button>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
