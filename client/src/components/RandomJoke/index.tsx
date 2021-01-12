import React, { useContext } from 'react';
import { SpinnerCircular } from 'spinners-react';

import { CategoryContext } from '../Category';

const RandomJoke: React.FC = () => {

  const { error, loading, data } = useContext(CategoryContext);

  if (error) {
    return <h1>Something went wrong!</h1>;
  }

  if (loading) {
    return <SpinnerCircular />
  }

  const { icon_url, value } = data.getRandomJoke;

  return (
    <div>
      <img src={icon_url} alt='chuck norris avatar' />
      <p>{value}</p>
    </div>
  );
}

export default RandomJoke;
