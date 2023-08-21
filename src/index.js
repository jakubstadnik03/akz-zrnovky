import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ONas from "./Pages/ONas";
import NaseSluzby from "./Pages/NaseSluzby";
import Novinky from "./Pages/Novinky";
import Kontakt from "./Pages/Kontakt";
import Details from "./Pages/Details";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/o-nas" element={<ONas />}></Route>
        <Route path="/novinky" element={<Novinky />}></Route>
        <Route path="/kontakt" element={<Kontakt />}></Route>
        <Route path="/nase-sluzby" element={<NaseSluzby />}></Route>
        <Route path="/nase-sluzby/:title" element={<Details />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
