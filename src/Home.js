import React from "react";
import { Query } from "react-apollo";
import { HOME_PAGE } from "./queries";

const Home = () => {
  return (
    <Query query={HOME_PAGE}>
      {/* {({ loading, data, error }) => {
        if (loading) return <span>loading</span>;
        if (error) return <span>Something Happened</span>;
        if (data) {
          console.log(data);
          return <span>Yay!!</span>;
        }
      }} */}
      {({ loading, data, error }) => {
        if (loading) return "loading";
        if (error) return "Something Happened";
        return data.movies.map(item => (
          <h2 key={item.id}>
            {item.title} / {item.rating}
          </h2>
        ));
      }}
    </Query>
  );
};

export default Home;
