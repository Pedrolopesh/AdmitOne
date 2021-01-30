import React, { useState } from 'react';
import { returnIcon } from '../assets/icons/icons';
import InputCitySearch from './InputCitySearch';
const TopBar = (props) =>{
    const [visibleSelect, setVisibleSelect] = useState(true)  
    const [selectedCity, setSelecedCity] = useState("")  
    

    //FUNCTION TO TURN INPUT VISIBLE
    function selectCity(){
        if(!visibleSelect) setVisibleSelect(true)
        else setVisibleSelect(false)
    }

    //FUNCTION TO SET VALUE FROM THE INPUT
    function setValueInput(params) {
        setSelecedCity(params)
        setVisibleSelect(true)
    }

    return(
        <form autoComplete="off">
            <div className="city-input-container">
                <div className="city-input-text alg-itens-c">
                    {selectedCity == "" && <p>City</p>}
                    {selectedCity != "" && <p>{selectedCity}</p>}

                        <div className="chevron-icons ml-1 pointer">
                            <span onClick={selectCity}>
                                {visibleSelect && returnIcon('chevron-up')}
                            </span>

                                {!visibleSelect && 
                                    <div>
                                        <span onClick={selectCity}>
                                            { returnIcon('chevron-down') }
                                        </span>
                                    </div>
                                }
                        </div>
                </div>

            </div>
            {!visibleSelect && <InputCitySearch triggerParent={setValueInput}/>}
        </form>
    )
}
export default TopBar;
