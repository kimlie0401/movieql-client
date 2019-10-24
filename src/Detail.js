import React, { useEffect } from "react";
import { Query } from "react-apollo";
import { MOVIE_DETAILS } from "./queries";
import Movie from "./Movie";
import styled from "styled-components";

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
  // display: grid;
  // grid-template-columns: repeat(3, 0.7fr);
  // grid-gap: 1.5rem;
  // flex-wrap: wrap;
  // justify-items: center;
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
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
            <div style={{ display: "flex", justifyContent: "center" }}>
              <svg
                version="1.1"
                id="loader-1"
                xmlns="http://www.w3.org/2000/svg"
                xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                width="40px"
                height="40px"
                viewBox="0 0 40 40"
                enableBackground="new 0 0 40 40"
                space="preserve"
              >
                <path
                  style={{ fill: "white" }}
                  opacity="0.2"
                  fill="#000"
                  d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946
    s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634
    c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"
                />
                <path
                  style={{ fill: "white" }}
                  fill="#000"
                  d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0
    C22.32,8.481,24.301,9.057,26.013,10.047z"
                >
                  <animateTransform
                    attributeType="xml"
                    attributeName="transform"
                    type="rotate"
                    from="0 20 20"
                    to="360 20 20"
                    dur="0.5s"
                    repeatCount="indefinite"
                  />
                </path>
              </svg>
            </div>
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
