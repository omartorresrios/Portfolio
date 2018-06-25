import styled from 'styled-components';

export const ProjectsContainer = styled.div`
  /* Extra small devices (phones, less than 768px) */ 
  display: flex;
  color: white;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  margin-bottom: 50px;

  a {
    text-decoration: none;
    color: white;
    font-size: 30px;
    align-self: center;

    &:hover {
      color: #1DA1F2;
      cursor: pointer;
    }
  }

  /* Small devices (tablets, 768px and up) */
  @media screen and (min-width: 768px) {
    flex-direction: row;
    a {
      text-decoration: none;
      color: white;
      font-size: 50px;
      align-self: center;

      &:hover {
        color: #1DA1F2;
        cursor: pointer;
      }
    }
  }
  
`;

export const DescriptionImgBlock = styled.div`
  /* Extra small devices (phones, less than 768px) */ 
  display: flex;
  align-items: center;
  max-width: 800px;
  flex-direction: column;
  margin-top: 10px;

  p {
    margin-right: 0px;
    order: 2;
  }

  /* Small devices (tablets, 768px and up) */
  @media screen and (min-width: 768px) {
    margin-top: 0px;
    flex-direction: row;

    p {
      order: 1;
      margin-right: 15px;
      text-align: left;
    }

    img {
      order: 2;
    }
  }
`;

export const Description = styled.p`
  margin-right: 20px;
  max-height: 600px;
  font-size: 15px;
`;


export const ImageApp = styled.img`
  max-height: 600px;
`;

export const BitmojiImgHome = styled.img`
  position: relative;
  margin-left: -100px;
  left: 50%;
  height: 200px;
  width: 200px;
`;

export const MeImgHome = styled.div`
  /* Extra small devices (phones, less than 768px) */
  height: 100vh;
    
  background-image: url('${require('../../assets/me.jpg')}');
  background-color: rgba(248, 247, 216, 0.7);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;

  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  text-align: center;
  font-size: 1em;
  h1 {
    margin-bottom: 0;
  }  

  /* Small devices (tablets, 768px and up) */
  @media screen and (min-width: 768px) {
    
  }
  
`;







