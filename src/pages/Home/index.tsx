import React from "react";
import MenuItem from "../../components/MenuItem";
import "./Home.scss";
import HomeContainer from "../../containers/HomeContainer";

const Home = () => {
  return (
    <div className="home">
      <HomeContainer>
        <MenuItem menuTitle="HATS"></MenuItem>
        <MenuItem menuTitle="JACKETS"></MenuItem>
        <MenuItem menuTitle="SNEAKERS"></MenuItem>
        <MenuItem menuTitle="WOMENS"></MenuItem>
        <MenuItem menuTitle="MENS"></MenuItem>
      </HomeContainer>
    </div>
  );
};

export default Home;
