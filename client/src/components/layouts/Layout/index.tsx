import React, { ReactNode } from 'react';
import Header from '../Header';

import { Wrapper } from './styled';

const Layout: React.FC<ReactNode> = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <div>
        {children}
      </div>
    </Wrapper>
  );
}

export default Layout;
