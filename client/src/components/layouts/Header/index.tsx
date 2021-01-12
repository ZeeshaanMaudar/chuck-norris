import React from 'react';

import ChuckNorrisImage from '../../../assets/chuck-norris.png';

import {
  Wrapper,
  TitleContainer,
  Title,
  Subheading,
  Image
} from './styled';

const Header: React.FC = () => {
  return (
    <Wrapper>
      <TitleContainer>
        <Title>Chuck Norris Jokes</Title>
        <Subheading>You don't choose Chuck Norris jokes. Chuck Norris jokes choose you</Subheading>
      </TitleContainer>
      <Image src={ChuckNorrisImage} alt='Chuck Norris' />
    </Wrapper>
  );
}

export default Header;
