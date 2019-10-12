import React from "react";
import { Query } from "react-apollo";
import { HOME_PAGE } from "./queries";
import SplitText from "react-pose-text";
import styled from "styled-components";
import Movie from "./Movie";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 0.7fr);
  flex-wrap: wrap;
  justify-items: center;
`;

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
    <Container>
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
            <Movie
              id={item.id}
              key={item.id}
              poster={item.medium_cover_image}
              title={item.title}
              rating={item.rating}
            />
          ));
        }}
      </Query>
    </Container>
  );
};

export default Home;
