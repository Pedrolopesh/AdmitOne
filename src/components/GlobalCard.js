import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/all';


const GlobalCard = (props) => {
    return (
        <div>
            <div className="card">

                <div className="card-image">
                    <div className="image-box">
                        <img src={props.image} className="image-card-container"/>
                        <div className="image-details alg-txt-c">
                            <h3 className="mb-2 mt-0 font-w-700"> {props.title} </h3>
                            <p className="mb-2 clr-pink"> <strong> {props.date} </strong> </p>
                            <p className="mb-2"> {props.place} </p>
                        </div>
                    </div>
                </div>

                <ul className="social-icons">
                    <li> <a href="#" target="_blank"> <FaFacebook className="fa fa-facebook"/> </a></li>
                    <li> <a href="#" target="_blank"> <FaInstagram className="fa fa-instagram"/> </a></li>
                    <li> <a href="#" target="_blank"> <FaTwitter className="fa fa-twitter"/> </a></li>
                </ul>

            </div>
        </div>
    )
}

export default GlobalCard;