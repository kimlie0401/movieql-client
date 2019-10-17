import React, { useEffect } from "react";
import { Query } from "react-apollo";
import { MOVIE_DETAILS } from "./queries";
import Movie from "./Movie";
import styled from "styled-components";
import SplitText from "react-pose-text";

const charPoses = {
  exit: { opacity: 0, y: 20 },
  enter: {
    opacity: 1,
    y: 0,
    delay: ({ charIndex }) => charIndex * 150
  }
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-gap: 1.5rem;
  margin-bottom: 50px;
`;

const Card = styled.div`
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  background-color: white;
  border-radius: 7px;
`;

const Image = Card.withComponent("img");

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Paragraph = styled.span`
  margin-bottom: 10px;
  display: block;
  font-weight: ${props => (props.bold ? "500" : "400")};
`;

const MovieContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 0.7fr);
  grid-gap: 1.5rem;
  flex-wrap: wrap;
  justify-items: center;
  margin-top: 50px;
`;

const Detail = ({
  match: {
    params: { movieId }
  }
}) => {
  useEffect(() => {
    console.log("Detail redered!");
    return () => {
      console.log("Detail unmounted");
    };
  });
  return (
    <Query query={MOVIE_DETAILS} variables={{ movieId: parseInt(movieId) }}>
      {({ loading, error, data }) => {
        if (loading)
          return (
            <SplitText
              className="loader__text"
              initialPose="exit"
              pose="enter"
              charPoses={charPoses}
            >
              Loading....................
            </SplitText>
          );
        if (error) return "error";
        return (
          <React.Fragment>
            <Container>
              <Image src={data.movie.medium_cover_image} />
              <span>
                <Title>{data.movie.title}</Title>
                <Paragraph bold>Rating: {data.movie.rating}</Paragraph>
                <Paragraph>{data.movie.description_intro}</Paragraph>
              </span>
            </Container>
            <Title>Suggested</Title>
            <MovieContainer>
              {data.suggestions.map(movie => (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  rating={movie.rating}
                  poster={movie.medium_cover_image}
                />
              ))}
            </MovieContainer>
          </React.Fragment>
        );
      }}
    </Query>
  );
};
export default Detail;