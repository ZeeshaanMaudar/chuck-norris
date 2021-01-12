import { gql } from '@apollo/client';

export const GET_CATEGORIES = gql`
  {
    categories
  }
`;

export const GET_RANDOM_JOKE = gql`
  query($category: String!) {
    getRandomJoke(category: $category) {
      icon_url
      value
    }
  }
`;
