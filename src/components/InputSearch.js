import React from 'react';
import SeacrhIcon from '../assets/icons/SeacrhIcon';
const InputSearch = (props) => {
    return(
        <>
            <form className="search-form" _lpchecked="1">
                <div className="full-width">
                    <div className="event-input">
                        <div role="combobox" aria-haspopup="listbox" aria-owns="react-autowhatever-1" aria-expanded="false" >
                        
                        <input 
                            className="search-form-input"
                            type="text" 
                            autoComplete="off"
                            aria-autocomplete="list" 
                            placeholder="Search Events, Artists, Genres..." 
                            name="title" 
                            id="title" 
                        /> 
                        
                        </div>
                        <div className="search-btn">
                            <SeacrhIcon/>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default InputSearch;