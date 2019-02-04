import React, { Component/*, PropTypes*/ } from 'react';
import { HomeMainDiv, LeftContainer, PhotoDescriptionContainer, MeImageContainer, MeImage, RightContainer, OverlayColor } from './Home.style';
import InstagramEmbed from 'react-instagram-embed'
import { NavigationContainer, BottomContactElements, IconContainer } from '../../components/NavigationBar/NavigationBar.style';
import { SocialIcon } from 'react-social-icons';

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
              <h3>Software Engineer</h3>
            </OverlayColor>

          </PhotoDescriptionContainer>

        </LeftContainer>

        <BottomContactElements>

          <SocialIcon url="https://twitter.com/OmarITR" color="#ffffff" style={{ height: 35, width: 35 }}/>

          <IconContainer>
            <SocialIcon url="https://www.linkedin.com/in/omar-torres-309000166" color="#ffffff" style={{ height: 35, width: 35 }}/>
          </IconContainer>

          <IconContainer>
            <SocialIcon url="https://github.com/omartorresrios" color="#ffffff" style={{ height: 35, width: 35 }}/>
          </IconContainer>

        </BottomContactElements>

      </HomeMainDiv>


  	);
  }
}
