import React from 'react';
import SeachChevron from '../assets/icons/seach_chevron'

const TopBar = (props) =>{
    return(
        <form autoComplete="off">
            <div className="city-input-container">
                <div className="city-input-text">
                    <p>City</p>

                    <SeachChevron/>
                </div>
            </div>
        </form>
    )
}
export default TopBar;
