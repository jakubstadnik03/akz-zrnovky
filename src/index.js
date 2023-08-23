import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ONas from "./Pages/ONas";
import NaseSluzby from "./Pages/NaseSluzby";
import Aktuality from "./Pages/Aktuality";
import Kontakt from "./Pages/Kontakt";
import Details from "./Pages/Details";
import AktualityDetails from "./Pages/AktualityDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/o-nas" element={<ONas />}></Route>
        <Route path="/aktuality" element={<Aktuality />}></Route>
        <Route path="/kontakt" element={<Kontakt />}></Route>
        <Route path="/nase-sluzby" element={<NaseSluzby />}></Route>
        <Route path="/nase-sluzby/:title" element={<Details />} />
        <Route path="/aktuality/:title" element={<AktualityDetails />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
