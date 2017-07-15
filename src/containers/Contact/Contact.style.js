import styled from 'styled-components';

export const ContainerInfo = styled.div`
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
    font-size: 0.5em;
    margin-bottom: 30;
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
    font-family: 'AvenirNext-UltraLight', sans-serif;
    margin: 0;
    font-size: 15px;
  }

  a {
    font-family: 'AvenirNext-UltraLight', sans-serif;
    font-size: 15px;
  }

  /* Small devices (tablets, 768px and up) */
  @media screen and (min-width: 768px) {
    h1 {
      font-size: 1em;
    }

    p {
      font-size: 25px;
    }

    a {
      font-size: 25px;
    }
  }
  
`;

export const ContactInfo = styled.div`
  text-align: center;
  line-height: 30px;
  a {
    text-decoration: none;
    color: white;

    &:hover {
      color: #1DA1F2;
      text-decoration: underline;
    }
  }
`;