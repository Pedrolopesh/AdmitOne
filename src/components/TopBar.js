import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FormLocation from './FormLocation';
import { returnIcon } from '../assets/icons/icons';


const TopBar = (props) =>{
    const [theme, setTheme] = useState(false)


    // FUNCTION TO CHANGE PAGE THEME
    function changeTheme(){
        if(!theme) setTheme(true)
        else setTheme(false)
    }

    //FUNCTION TO OPEN NAV MENU
    function openNavBar(params) {
        props.triggerCloseNavBar(true)
    }

    return(
        <div className="header-bg">
            <div className="banner-container d-flex ac justify-content-between">
                <div className="alg-itens-c">
                    <Link to="/" className="header-desktop-logo">
                        <img className="ac d-block" src="https://admitone.com/static/media/admit1-white-logo.ed8f0834.png" alt="Admit One Logo"/>
                    </Link>
                </div>

                <div className="d-flex container-header-desktop-nav">
                    <div className="header-desktop-nav">
                        <ul>
                            <li><a className="font-s-15 clr-white font-w-700 mr-1 pointer" href="#" target="_blank">Events</a></li>
                            <li><a className="font-s-15 clr-white font-w-700 mr-1 pointer" href="#" target="_blank">Venues</a></li>
                            <li><a className="font-s-15 clr-white font-w-700 mr-1 pointer" href="#" target="_blank">Artists</a></li>
                            <li><a className="font-s-15 clr-white font-w-700 mr-1 pointer" href="#" target="_blank">SIGN UP</a></li>
                            <li><a className="font-s-15 clr-white font-w-700 mr-1 pointer" href="#" target="_blank">WIN</a></li>
                            <span className="topbar-icon icon-color-white">{returnIcon('moon-icon')}</span>
    
                            {/* === CHANGE THEME FUNCTION === */}
                            {/* <li className="pointer" onClick={changeTheme}> 
                                {!theme && <span className="topbar-icon icon-color-white">{returnIcon('moon-icon')}</span>}
                                {theme && <span className="topbar-icon icon-color-white">{returnIcon('sun-icon')}</span>}
                            </li> */}
                            {/* === CHANGE THEME FUNCTION === */}
                        </ul>
                    </div>

                    <FormLocation/>
                    <div className="mobile-nav-options">
                        <span onClick={openNavBar} className="bars-icon-menu icon-color-white ml-1"> 
                            {returnIcon('bars')} 
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TopBar;
