import React, { Component/*, PropTypes*/ } from 'react';
import { HomeMainDiv, MeImage, AboutMe, OverlayColor, IframeVideo } from './Home.style';
import { BitmojiImgHome } from '../Projects/Projects.style';

export default class Home extends Component {
  // static PropTypes = {};

  render() {
  	return (
      <HomeMainDiv>

        <MeImage>
          <OverlayColor>
            <h1>Omar Torres</h1>
            <h3>Software and Business Engineer</h3>
          </OverlayColor>
          
        </MeImage>

        <AboutMe>
          <p>Passionate about a future guided by technology on its positive side. 
            Very interested in creating digital products that respect the values and time of people. Check it out! 👇
          </p>
          <IframeVideo>
            <iframe width="100%" height="250" frameBorder="0" align="center"
              src="https://www.youtube.com/embed/HQS6qqE2QiE?rel=0">
            </iframe>
          </IframeVideo>
          
        </AboutMe>


      </HomeMainDiv>

      
  	);
  }
}