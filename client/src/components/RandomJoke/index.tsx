import React, { useContext } from 'react';

import { CategoryContext } from '../Category';

import {
  Wrapper,
  Spinner,
  Image,
  Content
} from './styled';

const RandomJoke: React.FC = () => {

  const { error, loading, data } = useContext(CategoryContext);

  if (error) {
    return <h1>Something went wrong!</h1>;
  }

  if (loading) {
    return <Spinner />
  }

  const { icon_url, value } = data.getRandomJoke;

  return (
    <Wrapper>
      <Image src={icon_url} alt='chuck norris avatar' />
      <Content>{value}</Content>
    </Wrapper>
  );
}

export default RandomJoke;
