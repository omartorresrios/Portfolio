import React, { Component } from 'react';
import { NavigationContainer } from '../../components/NavigationBar/NavigationBar.style';
import { NavigationItems } from '../../components/NavigationBar/NavigationBarItems.style';

class App extends Component {
  render() {
    return (
      <div>
      	<NavigationContainer>
	      <NavigationItems to="/">Home</NavigationItems>
          <NavigationItems to="/projects">Tech Projects</NavigationItems>
          <NavigationItems href="https://www.youtube.com/channel/UCxmwIVPiGYD6eJ85a8Zk3gA?view_as=subscriber" target="_blank">Videos</NavigationItems>
          <NavigationItems to="/contact">Contact me</NavigationItems>
	    </NavigationContainer>
        {this.props.children}
      </div>
    );
  }
}

export default App;
