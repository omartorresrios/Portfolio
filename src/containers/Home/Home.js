import React, { Component/*, PropTypes*/ } from 'react';
import { MeImage } from './Home.style';
import { BitmojiImgHome } from '../Projects/Projects.style';

export default class Home extends Component {
  // static PropTypes = {};

  render() {
  	return (
      <MeImage>
        <BitmojiImgHome src={require('assets/bitmoji.png')}/>
        <h1>Omar Torres</h1>
        <h3>Business and software engineer</h3>
      </MeImage>
  	);
  }
}