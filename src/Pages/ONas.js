import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

const ONas = () => {
  return (
    <>
      <Header background={true} title={"O nás"} />
      <main className="max-width">
        <div className="onas-wrapper">
          <section className="onas-content">
            <h2>Mgr. et Mgr. Lucie Zrnovská</h2>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy
            </p>
          </section>
          <section className="onas-content">
            <h2>Mgr. Jan Zrnovský</h2>
            <p>
              Od roku 2006 pokračuje v rodinné tradici členů právnických
              profesí, od počátku jako advokát. V rámci své činnosti se
              orientuje především na ochranu slabších účastníků právních vztahů,
              kteří jsou v důsledku svého přirozeného postavení či v důsledku
              mimořádných okolností ohroženi vznikem újmy. Jednak se dlouhodobě
              a cíleně zabývá zastoupením poškozených či obětí v trestním
              řízení: zejména prosazováním jejich práv a vymáháním škody, která
              jim byla způsobena trestným činem. Stejně tak pravidelně přebírá
              obhajobu obviněných/obžalovaných v trestním řízení. Neposledně se
              zabývá otázkami vypořádání majetkových společenství (zaniklého
              společného jmění manželů a podílového spoluvlastnictví) či
              otázkami náhrady škody.
            </p>
          </section>
        </div>
        <section className="onas-bottom-article">
          <h2>Z historie naší advokátní kanceláře</h2>
          <p>
            JUDr. Lenka Zrnovská založila na počátku devadesátých let advokátní
            kancelář, která nese svou tradici dodnes. JUDr. Lenka Zrnovská se ve
            své praxi zabývala komplexní právní agendou. Převážnou dobu výkonu
            advokacie se zaměřovala především na rodinné právo a celkovou
            opatrovnickou agendu.
          </p>
          <p>
            Rozum, lidskost, přiměřenost a hlavně výkon advokacie s empatií a
            ideou se stal doménou advokátky JUDr. Lenky Zrnovské. Její
            schopnosti lze bez ostychu označit za pravé umění.
          </p>
          <p>
            Díky čtyřicetileté praxi a výjimečnému přístupu JUDr. Lenky Zrnovské
            pokračuje advokátní kancelář další generací až do dnešních dní.
            Osobnost JUDr. Lenky Zrnovské v naší kanceláři však stále přetrvává
            a nikdy nevymizí.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ONas;
