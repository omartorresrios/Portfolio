import React, { Component/*, PropTypes*/ } from 'react';
import { MeImage } from './Home.style';

export default class Home extends Component {
  // static PropTypes = {};

  render() {
  	return (
      <MeImage>
        <h1>Omar Torres</h1>
        <h3>Programmer</h3>
        <p>(iOS, Backend)</p>
      </MeImage>
  	);
  }
}