import React, { useState } from 'react'
import './Header.css'
import logo from './img/logo.jpg'; // Import the image file
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import LanguageIcon from "@material-ui/icons/Language";
import { Avatar } from "@material-ui/core";
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import Search from './Search';

function Header() {
  const[villeDepart, setVilleDepart]=useState("");
  const[villeArrive, setVilleArrive]=useState("");

  // city stored in searchInput
  return (
    <div className="header">
      <img className="header__icon" src={logo} alt="logo"/>
        <div className='header__center'>
          <LocationCityIcon/>
          <input 
            value={villeDepart}
            onChange={(e) => setVilleDepart(e.target.value)}
            type="text" 
            placeholder="ville de départ"
          />
          <AirplanemodeActiveIcon/>
          <input 
            value={villeArrive}
            onChange={(e) => setVilleArrive(e.target.value)}
            type="text" 
            placeholder="ville d'arrivée"
          />
          </div>
          <div className='header__right'>
            <p>Register</p>
            <LanguageIcon />
            <ExpandMoreIcon />
            <Avatar />
          </div>
            {(
              villeArrive || villeDepart) && (
              <Search />
            )}
      </div>
    
  )
}

export default Header;