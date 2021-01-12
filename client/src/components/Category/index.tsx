import React from 'react';
import { ApolloError, useQuery } from '@apollo/client';

import { GET_RANDOM_JOKE } from '../../queries';
import RandomJoke from '../RandomJoke';

// displaying use of Context Api just for this assessment's purpose
export const CategoryContext = React.createContext<any | null>(null);
interface Props {
  category: string,
  handleClick: (category: string) => void,
  isOpen: boolean,
  categoryChosen: string
}

interface callRandomJokeArgs {
  isOpen: boolean,
  category: string,
  categoryChosen: string
}

const callRandomJoke = ({ isOpen, category, categoryChosen }: callRandomJokeArgs) => {
  if (isOpen && category === categoryChosen) {
    return <RandomJoke />
  }
}

const Category: React.FC<Props> = ({ category, handleClick, isOpen, categoryChosen }) => {

  const { loading, error, data } = useQuery(GET_RANDOM_JOKE, {
    variables: { category}
  });

  const randomJokeData = { loading, error, data };

  return (
    <CategoryContext.Provider value={randomJokeData}>
      <div>
        <div onClick={() => handleClick(category)}>
          <h4>{category}</h4>
        </div>
        {callRandomJoke({ isOpen, category, categoryChosen })}
    </div>
    </CategoryContext.Provider>
  );
}

export default Category;
