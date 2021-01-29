import React, { useEffect, useState } from 'react';
import SeachChevron from '../assets/icons/seach_chevron'
import ChevronDowm from '../assets/icons/chevron_dowm'
import InputCitySearch from './InputCitySearch';
const TopBar = (props) =>{
    const [visibleSelect, setVisibleSelect] = useState(false)  
    
    function selectCity(){
        if(!visibleSelect) setVisibleSelect(true)
        else setVisibleSelect(false)
    }

    return(
        <form autoComplete="off">
            <div className="city-input-container">
                <div className="city-input-text alg-itens-c">
                    <p>City</p>

                    {/* <span className="topbar-seach-chevron"> */}
                        <div className="seach-chevron-icon ml-1 pointer">
                            
                            <span onClick={selectCity}>
                                {visibleSelect && <ChevronDowm/>}
                            </span>

                                {!visibleSelect && 
                                    <div>
                                        <span onClick={selectCity}>
                                            <SeachChevron />
                                        </span>
                                        <InputCitySearch />
                                    </div>
                                }
                        </div>
                        
                    {/* </span> */}
                </div>
            </div>
        </form>
    )
}
export default TopBar;
