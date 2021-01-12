import styled from 'styled-components';
import { SpinnerCircular } from 'spinners-react';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 40px;
`;

export const Spinner = styled(SpinnerCircular)`
  display: block;
  margin: 0 auto;
  padding-bottom: 40px;
`;

export const Image = styled.img`
  margin-right: 10px;
  width: 60px;
  height: auto;
`;

export const Content = styled.p`
  color: #141F45;
  font-family: Roboto;
  font-weight: 400;
  font-size: 20px;
  letter-spacing: 1px;
  margin: 0;
`;
