import React from 'react';
import { returnIcon } from '../assets/icons/icons';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/all';

const MobileMenu = (props) => {

    //FUNCTION TO CHANGE STATE VARIABLE THAT CLOSE MENU
    function closeNavBar() {
        props.triggerCloseNavBar(false)
    }

    return (
        <div>
            <div className=" ml-a mr-2 close-icon"> 
                <span onClick={closeNavBar}>
                    {returnIcon('close')} 
                </span>
            </div>

            <div className="container-links-menu ac">
                <span className="ac d-block">
                    <span>
                        <a className="d-flex alg-itens-c" href="https://admitone.com/newsletter" target="_blank">
                            <span className="icon-size-20 icon-color-white mr-0-5 mt-0-5">{returnIcon('mail-fill')}</span> Newsletter
                        </a>
                    </span>

                    <span>
                        <a className="d-flex alg-itens-c" href="https://loycals.com/" target="_blank">
                            <span className="icon-size-20 icon-color-white mr-0-5 mt-0-5">{returnIcon('star-fill')}</span>  WIN Prizes
                        </a>
                    </span>
                </span>
            </div>

            <div>
                <div className="container container-buttons-menu ac mt-3">
                    <span className="d-flex alg-itens-c justify-content-center ac">
                        <span className="btn-menu">
                            <a>EVENTS</a>
                        </span>
                        
                        <span className="btn-menu ml-1">
                            <a href="https://admitone.com/venues" target="_blank">
                                VENUES
                            </a>
                        </span>

                        <span className="btn-menu ml-1">
                            <a href="https://admitone.com/artists" target="_blank">
                                ARTISTS
                            </a>
                        </span>
                    </span>
                </div>
            </div>

            <div>
                <div className="d-flex justify-content-center mt-4">
                    <span className="icon-size-30 ml-0-5 mr-0-5">
                        <a className="icon-color-white" href="https://www.instagram.com/admitonelive/" target="_blank">
                            <FaInstagram/>
                        </a>
                    </span>
                        <a className="icon-color-white" href="https://twitter.com/admitonelive" target="_blank">
                            <span className="icon-size-30 ml-0-5 mr-0-5"><FaTwitter/></span>
                        </a>
                    <span className="icon-size-30 ml-0-5 mr-0-5">
                        <a className="icon-color-white" href="https://www.facebook.com/AdmitOneLive/" target="_blank">
                            <FaFacebook/>
                        </a>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default MobileMenu