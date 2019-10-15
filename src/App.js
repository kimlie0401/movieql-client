import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";
import { HashRouter as Router, Route } from "react-router-dom";
import client from "./ApolloClient";
import Home from "./Home";
import Detail from "./Detail";
import { GlobalStyle } from "./globalStyles";

class App extends Component {
  render() {
    const style = {
      height: "50px",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      padding: "0px",
      borderBottom: "1px solid grey",
      backGroundColor: "#2f2f2f",
      fontSize: "25px",
      fontWeight: "500"
    };

    return (
      <div>
        <h1 style={style}>DK's Movie App</h1>
        <ApolloProvider client={client}>
          <GlobalStyle />
          <Router>
            <main>
              <Route exact={true} path={"/"} component={Home} />
              <Route path={"/details/:movieId"} component={Detail} />
            </main>
          </Router>
        </ApolloProvider>
      </div>
    );
  }
}

export default App;
