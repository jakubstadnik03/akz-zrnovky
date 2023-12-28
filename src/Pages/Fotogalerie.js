import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import PhotoGallery from "../Components/photoGallery";
import { Link } from "react-router-dom";

function Fotogalerie() {
  const photos = [
    {
      thumbnail: "img/kancelar/akz-kancelar11.jpeg",
      fullsize: "img/kancelar/akz-kancelar-small11.jpeg",
    },
    {
      thumbnail: "img/kancelar/akz-kancelar1.jpeg",
      fullsize: "img/kancelar/akz-kancelar-small1.jpeg",
    },
    {
      thumbnail: "img/kancelar/akz-kancelar2.jpeg",
      fullsize: "img/kancelar/akz-kancelar-small2.jpeg",
    },
    {
      thumbnail: "img/kancelar/akz-kancelar3.jpeg",
      fullsize: "img/kancelar/akz-kancelar-small3.jpeg",
    },
    {
      thumbnail: "img/kancelar/akz-kancelar4.jpeg",
      fullsize: "img/kancelar/akz-kancelar-small4.jpeg",
    },

    {
      thumbnail: "img/kancelar/akz-kancelar6.jpeg",
      fullsize: "img/kancelar/akz-kancelar-small6.jpeg",
    },
    {
      thumbnail: "img/kancelar/akz-kancelar7.jpeg",
      fullsize: "img/kancelar/akz-kancelar-small7.jpeg",
    },

    {
      thumbnail: "img/kancelar/akz-kancelar29.jpeg",
      fullsize: "img/kancelar/akz-kancelar-small29.jpeg",
    },
    {
      thumbnail: "img/kancelar/akz-kancelar9.jpeg",
      fullsize: "img/kancelar/akz-kancelar-small9.jpeg",
    },
    {
      thumbnail: "img/kancelar/akz-kancelar10.jpeg",
      fullsize: "img/kancelar/akz-kancelar-small10.jpeg",
    },
    {
      thumbnail: "img/kancelar/akz-kancelar5.jpeg",
      fullsize: "img/kancelar/akz-kancelar-small5.jpeg",
    },
    {
      thumbnail: "img/kancelar/akz-kancelar12.jpeg",
      fullsize: "img/kancelar/akz-kancelar-small12.jpeg",
    },
    {
      thumbnail: "img/kancelar/akz-kancelar13.jpeg",
      fullsize: "img/kancelar/akz-kancelar-small13.jpeg",
    },
    {
      thumbnail: "img/kancelar/akz-kancelar14.jpeg",
      fullsize: "img/kancelar/akz-kancelar-small14.jpeg",
    },

    {
      thumbnail: "img/kancelar/akz-kancelar16.jpeg",
      fullsize: "img/kancelar/akz-kancelar-small16.jpeg",
    },
    {
      thumbnail: "img/kancelar/akz-kancelar17.jpeg",
      fullsize: "img/kancelar/akz-kancelar-small17.jpeg",
    },
    {
      thumbnail: "img/kancelar/akz-kancelar18.jpeg",
      fullsize: "img/kancelar/akz-kancelar-small18.jpeg",
    },
    {
      thumbnail: "img/kancelar/akz-kancelar19.jpeg",
      fullsize: "img/kancelar/akz-kancelar-small19.jpeg",
    },
    {
      thumbnail: "img/kancelar/akz-kancelar20.jpeg",
      fullsize: "img/kancelar/akz-kancelar-small20.jpeg",
    },
    {
      thumbnail: "img/kancelar/akz-kancelar21.jpeg",
      fullsize: "img/kancelar/akz-kancelar-small21.jpeg",
    },
    {
      thumbnail: "img/kancelar/akz-kancelar22.jpeg",
      fullsize: "img/kancelar/akz-kancelar-small22.jpeg",
    },
    {
      thumbnail: "img/kancelar/akz-kancelar8.jpeg",
      fullsize: "img/kancelar/akz-kancelar-small8.jpeg",
    },
    {
      thumbnail: "img/kancelar/akz-kancelar24.jpeg",
      fullsize: "img/kancelar/akz-kancelar-small24.jpeg",
    },
    {
      thumbnail: "img/kancelar/akz-kancelar25.jpeg",
      fullsize: "img/kancelar/akz-kancelar-small25.jpeg",
    },
    {
      thumbnail: "img/kancelar/akz-kancelar26.jpeg",
      fullsize: "img/kancelar/akz-kancelar-small26.jpeg",
    },
    {
      thumbnail: "img/kancelar/akz-kancelar27.jpeg",
      fullsize: "img/kancelar/akz-kancelar-small27.jpeg",
    },
    {
      thumbnail: "img/kancelar/akz-kancelar28.jpeg",
      fullsize: "img/kancelar/akz-kancelar-small28.jpeg",
    },
    {
      thumbnail: "img/kancelar/akz-kancelar15.jpeg",
      fullsize: "img/kancelar/akz-kancelar-small15.jpeg",
    },
  ];

  return (
    <>
      <Header
        background={true}
        title={"Fotogalerie naší nově zrekonstruvané kanceláře"}
      />
      <main className="max-width aktualita-content">
        <p className="aktualita-text">
          V srdci Liberce, s překrásným výhledem na majestátní radnici, se nyní
          nachází zcela nově zrekonstruovaná advokátní kancelář AKZ Zrnovský &
          Zrnovská. Po pečlivé renovaci, kterou vedla zkušená interiérová
          designérka Lenka Stádníková, tyto prostory nyní představují
          profesionalitu a eleganci. Spojení právních služeb nejvyšší kvality a
          interiéru, který je dílem designérského studia Lenka Design, je
          zárukou, že klientská schůzka se stává nejen obchodní záležitostí, ale
          i příjemným estetickým zážitkem.
        </p>

        <p className="aktualita-text">
          Každý prvek interiéru byl pečlivě vybírán tak, aby podtrhl prestiž
          advokátní kanceláře AKZ Zrnovský & Zrnovská a zároveň přinesl klientům
          komfort a vizuální harmonii. Naše kancelář je nyní místem, kde moderní
          design podporuje jasné myšlení a strategické plánování, což je základ
          úspěchu v právních záležitostech.
        </p>
        <p className="aktualita-text">
          Pokud i vy toužíte po interiéru, který bude odrazem vaší
          profesionalitě a individuality, navštivte{" "}
          <a
            href="https://www.lenkadesign.cz/"
            className="link"
            target="_blank"
          >
            Lenka Design
          </a>
          . Ať už hledáte inspiraci pro kancelář, obchodní prostory, či domov,
          Lenka Design vám nabízí široké portfolio služeb od konzultací po
          kompletní realizaci interiérů.
        </p>

        <Link to="/kontakt">
          <button className="btn btn-black">
            Kontaktujte nás <span className="arrow-icon arrow-icon-dark"></span>
          </button>
        </Link>
        <PhotoGallery photos={photos} />
      </main>
      <Footer />
    </>
  );
}

export default Fotogalerie;
