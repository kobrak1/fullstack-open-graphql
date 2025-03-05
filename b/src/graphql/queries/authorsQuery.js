import { gql } from '@apollo/client';

export const allAuthorsQuery = gql`
  query {
    allAuthors {
      name
      id
      born
      bookCount
    }
  }
`