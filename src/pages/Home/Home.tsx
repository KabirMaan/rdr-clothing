import React from "react";
import "./Home.scss";
import HomeContainer from "../../containers/HomeContainer";
import { RouteComponentProps } from "react-router";

interface HomeProps extends RouteComponentProps {}

const Home: React.FC<HomeProps> = (props): JSX.Element => {
  console.log(props);
  return (
    <div className="home">
      <HomeContainer />
    </div>
  );
};

export default Home;
