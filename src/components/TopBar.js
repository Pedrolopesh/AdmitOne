import React from 'react';
import { Link } from 'react-router-dom';
import MoonIcon from '../assets/icons/moon_icon';
import FormLocation from './FormLocation'
const TopBar = (props) =>{
    return(
        <div className="header-bg">
            <div className="banner-container d-flex ac justify-content-between">
                <div>
                    <Link to="/" className="header-desktop-logo">
                        <img src="https://admitone.com/static/media/admit1-white-logo.ed8f0834.png" alt="Admit One Logo"/>
                    </Link>
                </div>

                <div className="d-flex">
                    <div className="header-desktop-nav">
                        <ul>
                            <li><a className="font-s-15 clr-white font-w-700 mr-1">Events</a></li>
                            <li><a className="font-s-15 clr-white font-w-700 mr-1">Venues</a></li>
                            <li><a className="font-s-15 clr-white font-w-700 mr-1">Artists</a></li>
                            <li><a className="font-s-15 clr-white font-w-700 mr-1">SIGN UP</a></li>
                            <li><a className="font-s-15 clr-white font-w-700 mr-1">WIN</a></li>
                            <li> <MoonIcon/> </li>
                        </ul>
                    </div>
                    <FormLocation/>
                </div>
            </div>
        </div>
    )
}
export default TopBar;
