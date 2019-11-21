import React from "react";
import "./ErrorPage.scss";

class ErrorPage extends React.Component {
  state = {
    hasErrored: false
  };

  static getDerivedStateFromError(error: Error) {
    // process the error
    return { hasErrored: true };
  }

  componentDidCatch(error: Error, info: any) {
    console.log(error);
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <div className="error-page__overlay">
          <div
            className="error-page__image"
            style={{ backgroundImage: "url(https://i.imgur.com/yW2W9SC.png)" }}
          ></div>
          <h2 className="error-page__text">Sorry this page is broken</h2>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorPage;
