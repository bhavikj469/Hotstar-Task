import React from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Movie from "./Movie";
import BannerAdv from "./BannerAdv";
import  i1 from "./assets/img1.jpg";
import  i2 from "./assets/img2.jpg";
import  i3 from "./assets/img3.jpg";
import  i4 from "./assets/img4.jpg";
import  i5 from "./assets/img5.jpg";
import  i6 from "./assets/img6.jpg";
import  i7 from "./assets/img7.jpg";
import  i8 from "./assets/img8.jpg";
import  i9 from "./assets/img9.jpg";
import  i10 from "./assets/img10.jpg";
import  i11 from "./assets/img11.jpg";
import  i12 from "./assets/img12.jpg";


function App() {
  return (
    <div className="App">
      <Header />
      <BannerAdv />
      <div className="watch">
        <span className="span">Latest Movies</span>
      </div>
      <div className="m-row">
      <a href="/Info">
        <Movie img= {i1} />
      </a>
        <Movie img= {i2} />
        <Movie img= {i3} />
        <Movie img= {i4} />
      </div>
      <div className="watch">
        <span className="span">Recommended For You</span>
      </div>
      <div className="m-row">
        <Movie img= {i5} />
        <Movie img= {i6} />
        <Movie img= {i7} />
        <Movie img= {i8} />
      
      </div>
      <div className="watch">
        <span className="span">Old is Gold</span>
      </div>
      <div className="m-row">
        <Movie img= {i9} />
        <Movie img= {i10} />
        <Movie img= {i11} />
        <Movie img= {i12} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
