import styled from 'styled-components';

export const Image = styled.img`
  width: 100%;
`;

export const IframeVideo = styled.div`
  /* Extra small devices (phones, less than 768px) */
  padding-left: 40px;
    padding-right: 40px;

  /* Small devices (tablets, 768px and up) */
  @media screen and (min-width: 768px) {
    padding-left: 130px;
    padding-right: 130px;

  }

`;

export const HomeMainDiv = styled.div`
  /* Extra small devices (phones, less than 768px) */
  height: 100vh;
  display: flex;
  flex-direction: column;

  /* Small devices (tablets, 768px and up) */
  @media screen and (min-width: 768px) {
    flex-direction: row;

  }
`;

export const AboutMe = styled.div`
  /* Extra small devices (phones, less than 768px) */
  overflow-x: hidden;
  min-height: 100%;
  height: 100vh;
  width: 100%;
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
    font-weight: 100;
  }

  p {
    margin: 0;
    font-size: 15px;
    padding-left: 40px;
    padding-right: 40px;
    text-align: left;
    margin-bottom: 20px;
    font-family: 'AvenirNext-UltraLight', sans-serif;
  }


  /* Small devices (tablets, 768px and up) */
  @media screen and (min-width: 768px) {

    width: 50vw;

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
      padding-left: 130px;
      padding-right: 130px;
    
      margin-bottom: 20px;
      font-size: 20px;
    }
  }
`;

export const MeImage = styled.div`
  /* Extra small devices (phones, less than 768px) */
  overflow-x: hidden;
  min-height: 100%;
  height: 100vh;
  width: 100%;  

  background-image: url('${require('../../assets/me.png')}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;

  /* Small devices (tablets, 768px and up) */
  @media screen and (min-width: 768px) {
    width: 50vw;    
  }
  
`;

export const OverlayColor = styled.div`
  /* Extra small devices (phones, less than 768px) */
  display: flex;
  flex-direction: column;
  justify-content: center;
    
  position: relative;

  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

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
    text-align: left;
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



