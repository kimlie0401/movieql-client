import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "https://movieql-nomad.herokuapp.com"
});

export default client;
