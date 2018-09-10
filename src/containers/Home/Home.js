import React, { Component/*, PropTypes*/ } from 'react';
import { HomeMainDiv, LeftContainer, PhotoDescriptionContainer, MeImageContainer, MeImage, RightContainer, OverlayColor } from './Home.style';
import InstagramEmbed from 'react-instagram-embed'

export default class Home extends Component {
  // static PropTypes = {};

  render() {
  	return (
      <HomeMainDiv>

        <LeftContainer>

          <PhotoDescriptionContainer>
            <MeImageContainer>
              <MeImage>
              
              </MeImage>
            </MeImageContainer>

            <OverlayColor>
              <h1>Omar Torres</h1>
              <h3>Business and Software Engineer</h3>
            </OverlayColor>

          </PhotoDescriptionContainer>
          
        </LeftContainer>
        

        <RightContainer>

          <InstagramEmbed url="https://www.instagram.com/p/Bm4JokIhyEs/?taken-by=omartorresrios" style={{ width: "350px" }} />
          
        </RightContainer>


      </HomeMainDiv>

      
  	);
  }
}