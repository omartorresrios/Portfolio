import styled from 'styled-components';

export const Image = styled.img`
  width: 100%;
`;

export const MeImage = styled.div`
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
  	margin-bottom: 0;
  	margin-top: 20px;
  	font-family: 'AvenirNext-Medium', sans-serif;
    font-weight: 100;
  }

  h3 {
  	margin-top: 0px;
  	margin-bottom: 0px;
  	font-weight: 100;
  	font-size: 1.27em;
  }

  p {
  	margin: 0;
    font-size: 25px;
  }
`;

export const emojiImg = styled.img`
  text-align: center;
`;