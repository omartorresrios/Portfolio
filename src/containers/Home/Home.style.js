import styled from 'styled-components';

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

export const RightContainer = styled.div`
  /* Extra small devices (phones, less than 768px) */
  overflow-x: hidden;
  min-height: 100%;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;

  /* Small devices (tablets, 768px and up) */
  @media screen and (min-width: 768px) {
    width: 50vw;
    justify-content: center;
    align-items: center;
    flex-direction: row;
  }
`;

export const LeftContainer = styled.div`
  /* Extra small devices (phones, less than 768px) */
  display: flex;
  flex-direction: column;
  justify-content: center;

  overflow-x: hidden;
  min-height: 100%;
  height: 100vh;
  width: 100%;  
  
  /* Small devices (tablets, 768px and up) */
  @media screen and (min-width: 768px) {
    width: 50vw;
    
    justify-content: center;
  }
  
`;

export const PhotoDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  /* Small devices (tablets, 768px and up) */
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const MeImageContainer = styled.div`
  height: 150px;
  text-align: center;

  /* Small devices (tablets, 768px and up) */
  @media screen and (min-width: 768px) {
    height: 250px;
  }
`;

export const MeImage = styled.div`
  width: 150px;
  height: 150px;
  display: inline-block;
  border-radius: 50%;
  background-image: url('${require('../../assets/me.png')}');
  background-size: cover;
  background-position: center;

  /* Small devices (tablets, 768px and up) */
  @media screen and (min-width: 768px) {
    width: 250px;
    height: 250px;
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

  /* Small devices (tablets, 768px and up) */
  @media screen and (min-width: 768px) {

    margin-left: 20px;
    text-align: left;

    h1 {
      font-size: 50px;
      margin-bottom: 0;
      margin-top: 0px;
      font-family: 'AvenirNext-Medium', sans-serif;
      font-weight: 100;
    }

    h3 {
      font-size: 25px;
    }

  }

`;




