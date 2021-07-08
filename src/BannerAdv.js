import React from "react";
import "./BannerAdv.css";
import  imageAd from "./assets/banner-adv.jpg"

const BannerAdv = () => {
  return (
    <div className="bannerAdv">
      <div className="text">
        <span>Anupama</span>
        <p>StarPlus - Hindi . Drama</p>
        <p>
        Anupama had to sacrifice a lot to become an ideal wife, daughter-in-law, and mother. 
        After a bitter realisation, she sets out to live on her own terms.
        </p>
      </div>
      <div className="movieImage">
        <img
          src={imageAd}
          alt="NoImg"
        />
      </div>
    </div>
  );
};

export default BannerAdv;
