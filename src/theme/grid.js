import styled from 'styled-components';

export const Container = styled.div`
  /* Extra small devices (phones, less than 768px) */
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 30px;
  font-size: 15px;
  h1 {
    margin-top: 60px;
    text-align: center;
  }

  /* Small devices (tablets, 768px and up) */
  @media screen and (min-width: 768px) {
    padding-left: 120px;
    padding-right: 120px;
    font-size: 48px;
    h1 {
      text-align: left;
      font-size: 48px;
  	  margin-top: 100px;
    }
  }

`;