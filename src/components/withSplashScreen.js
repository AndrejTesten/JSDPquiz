import React, { Component } from "react";
import logo from "../images/logo.jpg";

function SplashMessage() {
  return (
    <div className="splash-screen">
      <h2 className="naslov">
        Dobrodošli u kviz o Jugoslovenskom Sportskom Društvu{" "}
        <span className="naglas">Partizan</span>
      </h2>
    </div>
  );
}

export default function withSplashScreen(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: true,
      };
    }

    async componentDidMount() {
      try {
        // Put here your await requests/ API requests
        setTimeout(() => {
          this.setState({
            loading: false,
          });
        }, 2500);
      } catch (err) {
        console.log(err);
        this.setState({
          loading: false,
        });
      }
    }

    render() {
      // while checking user session, show "loading" message
      if (this.state.loading) return SplashMessage();

      // otherwise, show the desired route
      return <WrappedComponent {...this.props} />;
    }
  };
}
