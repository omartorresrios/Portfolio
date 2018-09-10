import React, { Component } from 'react';
import { NavigationContainer, BottomContactElements, IconContainer } from '../../components/NavigationBar/NavigationBar.style';
import { SocialIcon } from 'react-social-icons';
import { NavigationItems } from '../../components/NavigationBar/NavigationBarItems.style';

class App extends Component {
  render() {
    return (
      <div>
      	<NavigationContainer>
	        <NavigationItems to="/">Home</NavigationItems>
          <NavigationItems to="/projects">Tech Projects</NavigationItems>
          <NavigationItems href="https://www.instagram.com/omartorresrios" target="_blank">Videos</NavigationItems>
	      </NavigationContainer>

        <BottomContactElements>

          <SocialIcon url="https://twitter.com/OmarITR" color="#ffffff" style={{ height: 35, width: 35 }}/>

          <IconContainer>
            <SocialIcon url="https://www.linkedin.com/in/omar-torres-309000166" color="#ffffff" style={{ height: 35, width: 35 }}/>
          </IconContainer>
          
          <IconContainer>
            <SocialIcon url="https://www.instagram.com/omartorresrios/" color="#ffffff" style={{ height: 35, width: 35 }}/>
          </IconContainer>

          <IconContainer>
            <SocialIcon url="https://github.com/omartorresrios" color="#ffffff" style={{ height: 35, width: 35 }}/>
          </IconContainer>
          
        </BottomContactElements>

        {this.props.children}
      </div>
    );
  }
}

export default App;
