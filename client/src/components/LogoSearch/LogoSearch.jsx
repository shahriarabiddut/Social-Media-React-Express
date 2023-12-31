import { UilSearch } from '@iconscout/react-unicons';
import React from 'react';
import logo from '../../../src/img/logo.png';
import './LogoSearch.css';
const LogoSearch = () => {
  return (
     <div className="LogoSearch">
        <img src={logo} alt="Logo" />
        <div className="Search">
          <input type="text" placeholder='#Explore' />
          <div className="s-icon">
            <UilSearch/>
          </div>
        </div>
      </div>
  )
}

export default LogoSearch