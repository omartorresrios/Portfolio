import React, { Component } from 'react';
import { NavigationContainer } from '../../components/NavigationBar/NavigationBar.style';
import { NavigationItems } from '../../components/NavigationBar/NavigationBarItems.style';

class App extends Component {
  render() {
    return (
      <div>
      	<NavigationContainer>
	      <NavigationItems to="/">Home</NavigationItems>
          <NavigationItems to="/projects">Projects</NavigationItems>
          <NavigationItems href="http://www.newdot.us/users/omar" target="_blank">Blog</NavigationItems>
          <NavigationItems to="/contact">Contact me</NavigationItems>
	    </NavigationContainer>
        {this.props.children}
      </div>
    );
  }
}

export default App;
