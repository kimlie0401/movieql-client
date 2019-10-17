import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";
import { HashRouter as Router, Route } from "react-router-dom";
import client from "./ApolloClient";
import Home from "./Home";
import Detail from "./Detail";
import Header from "./Header";
import { GlobalStyle } from "./globalStyles";

class App extends Component {
  render() {
    return (
      <div>
        <ApolloProvider client={client}>
          <GlobalStyle />
          <Router>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                borderBottom: "1px solid grey"
              }}
            >
              <Header></Header>
            </div>
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
