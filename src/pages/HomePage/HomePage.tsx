import React from "react";
import "./HomePage.scss";

import Directory from "../../components/Directory";
// import { RouteComponentProps } from "react-router";

// interface HomePageProps extends RouteComponentProps {}

const HomePage: React.FC = (): JSX.Element => {
  return (
    <div className="home-page">
      <Directory />
    </div>
  );
};

export default HomePage;
