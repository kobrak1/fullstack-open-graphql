import { gql } from "@apollo/client";

export const ALL_BOOKS_QUERY = gql`
  query {
    allBooksTable {
      title
      author
      published
      id
    }
  }
`;