import React from 'react';
import SeacrhIcon from '../assets/icons/SeacrhIcon';
import { returnIcon } from '../assets/icons/icons'
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
                            <span className="topbar-icon icon-color-white">
                                {returnIcon('search-fill')}
                            </span>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default InputSearch;