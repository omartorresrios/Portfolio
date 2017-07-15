import styled from 'styled-components';

export const ProjectsContainer = styled.div`
  display: flex;
  color: white;
  justify-content: space-between;
  margin-bottom: 50px;

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
`;

export const DescriptionImgBlock = styled.div`
  display: flex;
  align-items: center;
  max-width: 800px;
`;

export const Description = styled.p`
  margin-right: 20px;
  max-height: 600px;
  font-size: 15px;
`;


export const ImageApp = styled.img`
  max-height: 600px;
`;

export const EmojiImgHome = styled.img`
  position: relative; 
  left: 50%;
  display: none;
`;

