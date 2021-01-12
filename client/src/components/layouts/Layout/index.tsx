import React, { ReactNode } from 'react';

import { Wrapper } from './styled';

const Layout: React.FC<ReactNode> = ({ children }) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
}

export default Layout;
