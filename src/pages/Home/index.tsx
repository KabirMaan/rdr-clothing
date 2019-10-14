import React from "react";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <h1>Home</h1>
      <div className="home__menu">
        <div className="menu-item">
          <div className="menu-item__content">
            <div className="menu-item__title">HATS</div>
            <div className="menu-item__subtitle">SHOP NOW</div>
          </div>
        </div>
        <div className="menu-item">
          <div className="menu-item__content">
            <div className="menu-item__title">JACKETS</div>
            <div className="menu-item__subtitle">SHOP NOW</div>
          </div>
        </div>
        <div className="menu-item">
          <div className="menu-item__content">
            <div className="menu-item__title">SNEAKERS</div>
            <div className="menu-item__subtitle">SHOP NOW</div>
          </div>
        </div>
        <div className="menu-item">
          <div className="menu-item__content">
            <div className="menu-item__title">WOMENS</div>
            <div className="menu-item__subtitle">SHOP NOW</div>
          </div>
        </div>
        <div className="menu-item">
          <div className="menu-item__content">
            <div className="menu-item__title">MENS</div>
            <div className="menu-item__subtitle">SHOP NOW</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
