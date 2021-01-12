import React from 'react';

import ChuckNorrisImage from '../../../assets/chuck-norris.png';

const Header: React.FC = () => {
  return (
    <div>
      <div>
        <h4>Chuck Norris Jokes</h4>
        <h6>You don't choose Chuck Norris jokes. Chuck Norris jokes choose you</h6>
      </div>
      <img src={ChuckNorrisImage} alt='Chuck Norris' />
    </div>
  );
}

export default Header;
