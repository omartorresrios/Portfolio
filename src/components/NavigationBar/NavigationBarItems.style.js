import styled from 'styled-components';
import { Link } from 'react-router';

export const NavigationItems = styled(Link)`
  /* Extra small devices (phones, less than 768px) */
  font-family: 'AvenirNext-UltraLight', sans-serif;
  cursor: pointer;
  color: white;
  font-weight: bold;
  font-size: 16px;
  text-decoration: none;
  margin-left: 20px;
  position: relative;
  z-index: 10;

  /* Small devices (tablets, 768px and up) */
  @media screen and (min-width: 768px) {
	  font-size: 18px;
    font-weight: normal;
  }
  
`;