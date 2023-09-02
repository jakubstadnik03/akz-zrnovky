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
        <div
          className="onas-content"
          style={{ marginBottom: "0", textAlign: "center" }}
        >
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
          <p>
            V současné době poskytují právní pomoc v advokátní kanceláři dva
            advokáti, a to Mgr. Jan Zrnovský a Mgr. et Mgr. Lucie Zrnovská.{" "}
          </p>
        </div>

        <div className="onas-wrapper">
          <section className="onas-content">
            <h2>Mgr. et Mgr. Lucie Zrnovská, advokátka</h2>
            <p>
              Mgr. et Mgr. Lucie Zrnovská se specializuje na poskytování právní
              pomoci klientům v oblasti rodinného práva, a to především ve
              sporech o úpravu péče o nezletilé dítě pro dobu před a po rozvodu
              manželství, ve sporech týkajících se určování a změn výše
              vyživovací povinnosti, jakož i v dalších oblastech opatrovnické
              agendy.
            </p>
            <p>
              Obor rodinného práva však fakticky zahrnuje řešení všech životních
              milníků ve vývoji nejen nezletilých dětí, ale celé rodiny při
              rozpadu partnerství rodičů.{" "}
            </p>
            <p>
              Kromě výše uvedených řízení, je nutno nástroji rodinného práva
              řešit i tyto zásadní otázky: určení a popření otcovství k
              nezletilému dítěti, nahrazení vůle rodiče ve věci pro nezletilé
              dítě významné, spočívající například v udělení souhlasu za druhého
              rodiče s vycestováním do zahraničí, změnou či určením školského
              zařízení či nahrazením souhlasu se zdravotními úkony.{" "}
            </p>
            <p>
              Dále naše opatrovnická agenda zahrnuje řízení o nezrušitelné
              osvojení dítěte, určení výživného pro neprovdanou matku a výše
              příspěvku na některé náklady neprovdané matky, jakož i například
              řízení o udělení souhlasu za nezletilého v situacích, kdy tento
              souhlas je za nezletilého povinen učinit soud.{" "}
            </p>
            <p>
              Rodinné právo v sobě nepřímo zahrnuje i řešení otázek
              souvisejících se vznikem, trváním a ukončením manželství a úpravou
              práv a povinností, které vůči sobě manželé navzájem mají. Jedná se
              například o problematiku určení výše výživného pro nerozvedeného
              manžela/ manželku, shodně jako určení výše výživného pro již
              rozvedeného manžela/ manželku.{" "}
            </p>
            <p>
              V souvislosti s ukončením manželství je nezbytné vyřešit rovněž i
              úpravu a vypořádání vzájemných majetkových vztahů, které vznikly
              za trvání manželství, tzv. společné jmění manželů.{" "}
            </p>
            <p>
              Mgr. et Mgr. Lucie Zrnovská poskytuje právní pomoc v anglickém a
              německém jazyce.
            </p>
          </section>
          <section className="onas-content">
            <h2>Mgr. Jan Zrnovský, advokát</h2>
            <p>
              {" "}
              Mgr. Jan Zrnovský se v poskytování právní pomoci specializuje
              především na trestní právo, a to jak z pohledu obhajoby klientů v
              trestním řízení, tak v poskytování právní pomoci a zastupování
              klientů, kteří se stali obětí trestného činu. Mgr. Jan Zrnovský
              poskytuje právní pomoc a právní poradenství již od přípravného
              řízení až po řízení dovolací.{" "}
            </p>

            <p>
              Mgr. Jan Zrnovský byl první advokát v Libereckém kraji, který byl
              zapsán v seznamu poskytovatelů právní pomoci obětem trestných
              činů, který je veden Ministerstvem spravedlnosti České republiky.
            </p>
            <p>
              Mgr. Jan Zrnovský poskytuje právní pomoc v anglickém a
              francouzském jazyce.
            </p>
          </section>
        </div>
        <div className="onas-content" style={{ textAlign: "center" }}>
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
            oblasti smluvního práva a pro klienty připravuje celou řadu
            smluvních typů, od smluv kupních, darovacích, smluv, jimiž se
            zřizují služebnosti a reálná břemena, smluv nájemních, smluv o dílo,
            jakož i celou řadu smluv inominátních.
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
