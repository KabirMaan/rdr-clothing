import React from "react";
import "./HomePage.scss";
import Categories from "../../components/Categories";
// import { RouteComponentProps } from "react-router";

// interface HomePageProps extends RouteComponentProps {}

const HomePage: React.FC = (): JSX.Element => {

  return (
    <div className="home-page">
      <Categories />
    </div>
  );
};

export default HomePage;
