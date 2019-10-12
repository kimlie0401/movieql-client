import React from "react";
import { Query } from "react-apollo";
import { HOME_PAGE } from "./queries";
import SplitText from "react-pose-text";

const charPoses = {
  exit: { opacity: 0, y: 20 },
  enter: {
    opacity: 1,
    y: 0,
    delay: ({ charIndex }) => charIndex * 150
  }
};

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
        if (loading)
          return (
            <SplitText
              className="loader__text"
              initialPose="exit"
              pose="enter"
              charPoses={charPoses}
            >
              Loading..........
            </SplitText>
          );
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
