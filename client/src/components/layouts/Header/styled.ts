import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #D9EBF3;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 10px 10px 0 10px;

  @media screen and (min-width: 950px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0;
  }
`;

export const TitleContainer = styled.div`
  max-width: 510px;
  text-align: center;

  @media screen and (min-width: 950px) {
    text-align: left;
    margin-left: 95px;
  }
`;

export const Title = styled.h4`
  color: #141F45;
  font-family: Roboto;
  font-weight: 700;
  font-size: 48px;
  line-height: 56px;
  letter-spacing: 2px;
  margin: 0;
  margin-bottom: 10px;
`;

export const Subheading = styled.h6`
  color: #676767;
  font-family: Roboto;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  letter-spacing: 2px;
  margin: 0;
  margin-bottom: 20px;
`;

export const Image = styled.img`
  width: 268px;
  height: auto;

  @media screen and (min-width: 950px) {
    margin-right: 50px;
  }
`;
