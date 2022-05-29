import React, { useState } from 'react'
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Avatar from '@mui/material/Avatar';
import { Link } from "react-router-dom"

function Header() {
  const [inputSearch, setInputSearch] = useState('');

  return (
    <div className="header">
        <div className="header_left">
            <MenuIcon />
            <Link to="/">
            <img className="header_logo" 
            alt="header_logo"
             src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/YouTube_Logo_%282013-2017%29.svg/1280px-YouTube_Logo_%282013-2017%29.svg.png"></img>
            </Link>        
        </div>
        <div className='header_input'>
            <input onChange={e => setInputSearch(e.target.value)} value={inputSearch} placeholder="Search" type="text"/>
            <Link to={`/search/${inputSearch}`}>
                <SearchIcon className='header_inputButton'/>
            </Link>
        </div>
        <div className='header_icons'>
            <VideoCallOutlinedIcon className="header_icon"/>
            <AppsIcon className='header_icon' />
            <NotificationsNoneIcon className="header_icon" />
            <Avatar alt="Natalia" src="https://www.nataliadadasova.com/images/profile-image.jpeg" />
        </div>
    </div>
  )
}

export default Header