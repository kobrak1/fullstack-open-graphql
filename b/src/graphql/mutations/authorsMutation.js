import { gql } from "@apollo/client";

export const EDIT_BIRTH_YEAR = gql`
  mutation editAuthor($name: String!, $setToBorn: Int!) {
    editAuthor(
      name: $name
      setToBorn: $setToBorn
    ) {
      name
      born
    }
  }
`;