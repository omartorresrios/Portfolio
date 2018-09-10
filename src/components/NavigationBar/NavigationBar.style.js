import styled from 'styled-components';

export const NavigationContainer = styled.div`
  /* Extra small devices (phones, less than 768px) */
  display: flex;
  right: 0vh;
  top: 20px;
  position: absolute;
  padding-left: 0px;
  padding-right: 20px;

  /* Small devices (tablets, 768px and up) */
  @media screen and (min-width: 768px) {
    padding-left: 120px;
    padding-right: 40px;
  }
`;

export const BottomContactElements = styled.div`
  /* Extra small devices (phones, less than 768px) */
  display: flex;
  right: 0vh;
  bottom: 20px;
  position: absolute;
  padding-left: 0px;
  padding-right: 20px;

  /* Small devices (tablets, 768px and up) */
  @media screen and (min-width: 768px) {
    padding-left: 120px;
    padding-right: 40px;
  }
`;

export const IconContainer = styled.div`
  height: 35px;
  width: 35px;
  margin-left: 10px;
`;