import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { Helmet } from "react-helmet";

const ONas = () => {
  return (
    <>
      <Helmet>
        <title>O naší firmě | AKZ Advokátní kancelář Zrnovský</title>
      </Helmet>
      <Header background={true} title={"O nás"} />
      <main className="max-width">
        <div className="onas-content" style={{ marginBottom: "0" }}>
          <p>
            Advokátní kancelář byla založena v roce 1993 advokátkou JUDr. Lenkou
            Zrnovskou.
          </p>
          <p>
            V průběhu času převzal advokátní praxi Mgr. Jan Zrnovský, advokát, k
            němuž se následně připojila Mgr. et Mgr. Lucie Zrnovská, advokátka.
          </p>
          <p>
            Naše rodinná advokátní kancelář je jednou z historicky
            nejstabilnějších advokátních kanceláří v Libereckém kraji.
          </p>
          <p>
            Poskytujeme právní pomoc našim klientům v tíživých a nesnadných
            životních situacích, a to na základě dlouholeté praxe v advokacii a
            cenných zkušeností v poskytováním právní pomoci, zastupováním
            klientů v soudním řízení a před orgány veřejné moci.
          </p>
        </div>
        <p className="onas-content onas-text">
          V současné době poskytují právní pomoc v advokátní kanceláři dva
          advokáti, a to Mgr. Jan Zrnovský a Mgr. et Mgr. Lucie Zrnovská.{" "}
        </p>
        <div className="onas-wrapper">
          <section className="onas-content">
            <h2>Mgr. et Mgr. Lucie Zrnovská</h2>
            <p>
              Mgr. et Mgr. Lucie Zrnovská se specializuje na poskytování právní
              pomoci klientům v oblasti rodinného práva, a to především ve
              sporech o úpravu péče o nezletilé dítě pro dobu před a po rozvodu
              manželství, ve sporech týkajících se určování a změn výše
              vyživovací povinnosti, jakož i v dalších oblastech opatrovnické
              agendy.
            </p>
            <p>
              Mgr. et Mgr. Lucie Zrnovská poskytuje právní pomoc v anglickém a
              německém jazyce.
            </p>
          </section>
          <section className="onas-content">
            <h2>Mgr. Jan Zrnovský</h2>
            <p>
              {" "}
              Mgr. Jan Zrnovský se v poskytování právní pomoci specializuje
              především na trestní právo, a to jak z pohledu obhajoby klientů v
              trestním řízení, tak v poskytování právní pomoci a zastupování
              klientů, kteří se stali obětí trestného činu. Mgr. Jan Zrnovský
              poskytuje právní pomoc a právní poradenství již od přípravného
              řízené až po řízení dovolací.{" "}
            </p>

            <p>
              Mgr. Jan Zrnovský byl první advokátv Libereckém kraji, který byl
              zapsán v seznamu poskytovatelů právní pomoci obětem trestných
              činů, který je veden Ministerstvem spravedlnosti České republiky.
            </p>
            <p>
              Mgr. Jan Zrnovský poskytuje právní pomoc v anglickém a
              francouzském jazyce.
            </p>
          </section>
        </div>
        <div className="onas-content">
          <p>
            Oba advokáti mají cenné zkušenosti v zastupování klientů v
            občansko-právních sporech, tedy v oblasti tzv. sporné agendy. Jedná
            se zejména o poskytování právní pomoci ve sporech týkajících se
            vypořádání společného jmění manželů, ve sporech o zrušení a
            vypořádání podílového spoluvlastnictví, ve sporech o vyklizení, ve
            sporech spočívajících v mimosoudním a soudním vymáhání pohledávek,
            jakož i ve sporech z vadného plnění a zejména ve sporech, jejichž
            předmětem je náhrada škody a nemajetkové újmy.
          </p>
          <p>
            Naše advokátní kancelář poskytuje komplexní právní poradenství v
            oblasti obchodního práva a pro klienty připravuje celou řadu
            smluvních typů, od smluv kupních, darovacích, smluv, jimiž se
            zřizuje služebnosti a reálná břemena, nájemních, smluv o dílo, jakož
            i smluv inominátních.
          </p>
          <p>
            Ve všech oblastech námi poskytované právní pomoci se snažíme vyjít
            vstříc individuálním požadavkům našich klientů a poskytnout jim
            právní pomoc na vysoké profesní úrovni, založené na rozsáhlé
            zkušenosti z působení v advokacii.
          </p>
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
