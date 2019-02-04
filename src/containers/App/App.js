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
	      </NavigationContainer>



        {this.props.children}
      </div>
    );
  }
}

export default App;
