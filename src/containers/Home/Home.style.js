import styled from 'styled-components';

export const Image = styled.img`
  width: 100%;
`;

export const MeImage = styled.div`
  /* Extra small devices (phones, less than 768px) */
  overflow-x: hidden;
  min-height: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  
  justify-content: center;

  text-align: center;
  color: white;
  font-size: 2em;

  h1 {
    font-size: 35px;
    margin-bottom: 0;
    margin-top: 20px;
    font-family: 'AvenirNext-Medium', sans-serif;
    font-weight: 100;
  }

  h3 {
    margin-top: 0px;
    margin-bottom: 0px;
    font-weight: 100;
    font-size: 20px;
  }

  p {
    margin: 0;
    font-size: 15px;
  }

  /* Small devices (tablets, 768px and up) */
  @media screen and (min-width: 768px) {
    h1 {
      font-size: 50px;
      margin-bottom: 0;
      margin-top: 20px;
      font-family: 'AvenirNext-Medium', sans-serif;
      font-weight: 100;
    }

    h3 {
      font-size: 25px;
    }

    p {
      font-size: 20px;
    }
  }
  
`;

export const emojiImg = styled.img`
  text-align: center;
`;