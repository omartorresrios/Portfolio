import React, { Component } from 'react';
import { ContainerInfo, ContactInfo } from './Contact.style'

class Contact extends Component {
  render() {
  	return (
        <ContainerInfo>

          <h1>CONTACT</h1>

          <ContactInfo>
  	        <p>torresomar44@gmail.com</p>
  	        <a href="https://github.com/omartorresrios" target="_blank">Github</a><br />
  	        <a href="https://twitter.com/OmarITR" target="_blank">Twitter</a>
  	      </ContactInfo>

		</ContainerInfo>
  	  
  	);
  }
}

export default Contact;