import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ color }) => color};
  border-radius: 5px;
  margin-bottom: 20px;
  padding: 0 10px 0 30px;

  &:hover {
    cursor: pointer;
  }
`;

export const CategoryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h4`
  color: #141F45;
  font-family: Roboto;
  font-size: 28px;
  line-height: 30px;
  letter-spacing: 2px;
  text-transform: capitalize;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
