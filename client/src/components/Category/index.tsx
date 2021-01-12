import React from 'react';
import { useQuery } from '@apollo/client';

import RandomJoke from '../RandomJoke';

import ArrowRightIcon from '../../assets/arrow-right.svg';
import ArrowDownIcon from '../../assets/arrow-down.svg';
import RefreshIcon from '../../assets/refresh.svg';

import { GET_RANDOM_JOKE } from '../../queries';

import {
  Wrapper,
  CategoryContainer,
  Title,
  IconContainer
} from './styled';

// displaying use of Context Api just for this assessment's purpose
export const CategoryContext = React.createContext<any | null>(null);
interface Props {
  category: string,
  handleClick: (category: string, refetch: () => void) => void,
  isOpen: boolean,
  categoryChosen: string,
  color: string
}

interface CallRandomJokeArgs {
  isOpen: boolean,
  category: string,
  categoryChosen: string
}

interface CallIconsArgs {
  isOpen: boolean,
  category: string,
  categoryChosen: string,
  handleClick: (category: string, refetch: () => void) => void,
  refetch: () => void
}

const callIcons = ({ isOpen, category, categoryChosen, handleClick, refetch }: CallIconsArgs) => {

  if (isOpen && category === categoryChosen) {
    return (
      <IconContainer>
        <img
          src={RefreshIcon}
          alt='refresh icon'
          onClick={() => handleClick(category, refetch)}
        />
        <img src={ArrowDownIcon} alt='arrow down icon' />
      </IconContainer>
    )
  }

  return <img src={ArrowRightIcon} alt='arrow right icon' />;

}

const callRandomJoke = ({ isOpen, category, categoryChosen }: CallRandomJokeArgs) => {
  if (isOpen && category === categoryChosen) {
    return <RandomJoke />
  }
}

const Category: React.FC<Props> = ({ category, handleClick, isOpen, categoryChosen, color }) => {

  const { loading, error, data, refetch } = useQuery(GET_RANDOM_JOKE, {
    variables: { category},
    notifyOnNetworkStatusChange: true,
  });

  const randomJokeData = { loading, error, data };

  return (
    <CategoryContext.Provider value={randomJokeData}>
      <Wrapper onClick={() => handleClick(category, refetch)} {...{ color }}>
        <CategoryContainer>
          <Title>{category}</Title>
          {callIcons({ isOpen, category, categoryChosen, handleClick, refetch })}
        </CategoryContainer>
        {callRandomJoke({ isOpen, category, categoryChosen })}
    </Wrapper>
    </CategoryContext.Provider>
  );
}

export default Category;
