import React from "react";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            title="ASUS ROG Strix XG43VQ 43.4 inch LED 1ms Gaming Curved Monitor - 3840 x 1200 Resolution, 1ms Response, Speakers, HDMI"
            price={399.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81VktBgbSML._AC_SL1500_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            title="New Rolex watch. Awesome reviews of custormers. Brown Belt with large Dial"
            image="https://images-eu.ssl-images-amazon.com/images/I/41XdRy2BxfL._AC_SY200_.jpg"
            rating={4}
            price={14.99}
          />
          <Product
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Space Grey (4th Generation)"
            image="https://images-na.ssl-images-amazon.com/images/I/811aBwuSuIL._SL1500_.jpg"
            rating={4}
            price={999.99}
          />
          <Product
            title="Apple XR - Space Grey"
            image="https://m.media-amazon.com/images/I/51qBzX0pGYL._AC_UY218_.jpg"
            rating={4}
            price={1999.99}
          />
          <Product
            title="Apple Watch Series 3 (GPS, 42mm) - Space Grey Aluminium Case with Black Sport Band"
            rating={3}
            price={300.2}
            image="https://m.media-amazon.com/images/I/71EoGntO5bL._AC_UY218_.jpg"
          />
          <Product
            price={89.99}
            rating={5}
            title="Steelbird SBA-1 R2K LIVE Full Face Helmet in Matt Finish(Medium 580 MM, Matt Black/Grey)"
            image="https://images-na.ssl-images-amazon.com/images/I/41BdpG0wTNL.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            title="ASUS ZenBook 13 UX334FL-A7621TS Intel Core i7 10th Gen 13.3-inch FHD Thin & Light Laptop (16GB RAM/1TB PCIe SSD/Windows 10/MS-Office 2019/2GB NVIDIA GeForce MX250"
            price={999.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/614MujB11uL._AC_UL480_FMwebp_QL65_.jpg"
          />
          <Product
            rating={5}
            title="Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage, 2.6GHz 9th Gen Intel Core i7) - Space Grey"
            image="https://m.media-amazon.com/images/I/71L2iBSyyOL._AC_UL480_FMwebp_QL65_.jpg"
            price={1999.99}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
