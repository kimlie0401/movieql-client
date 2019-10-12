import gql from "graphql-tag";

export const HOME_PAGE = gql`
  query {
    movies(rating: 7, limit: 50) {
      id
      title
      genres
      rating
    }
  }
`;
