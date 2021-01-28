import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/all';

const FooterPage = () => {
    return(
        <div className="container ac">
            <div className="mb-4">
                <ul class="navbar-nav justify-content-center footer-nav">
                    <li><a class="font-s-15 clr-white" href="https://admitone.com/contact-us" target="_blank">Contact Us</a></li>
                    <li><a class="font-s-15 clr-white" href="https://admitone.com/privacy-policy" target="_blank">Privacy &amp; Security</a></li>
                    <li><a class="font-s-15 clr-white" href="https://admitone.com/terms-of-service" target="_blank">Terms of Use</a></li>
                    <li><a class="font-s-15 clr-white" href="https://admitone.com/ticket-policy" target="_blank">Ticket Policy</a></li>
                </ul>
            </div>
            
            <div className="mb-4">
                <ul class="navbar-nav justify-content-center">
                    <li className="mr-3">
                        <a href="https://www.instagram.com/admitonelive/" class="clr-white" target="_blank" rel="noopener noreferrer">
                            <i>
                                <FaInstagram />
                            </i>
                        </a>
                    </li>
                    <li className="mr-3">
                        <a href="https://twitter.com/admitonelive" class="clr-white" target="_blank" rel="noopener noreferrer">
                            <i>
                                <FaTwitter />
                            </i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/AdmitOneLive/" class="clr-white" target="_blank" rel="noopener noreferrer">
                            <i>
                                <FaFacebook />
                            </i>
                        </a>
                    </li>
                </ul>
            </div>

            <div>
                <p class="alg-txt-c font-s-15 clr-white font-w-400">Copyright © 2021 | Admit One Live. All rights reserved.</p>
            </div>
        </div>
    )
}

export default FooterPage;