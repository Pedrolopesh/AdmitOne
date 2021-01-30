import React, { useEffect, useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/all';


const InputCitySearch = (props) => {
    const [display, setDisplay] = useState(false);
    const [options, setOptions] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const pokemon = [];
        const newItens = [
            {cityName:'Toronto', sprite:''},
            {cityName:'Québec', sprite:''},
            {cityName:'Halmiton', sprite:''},
            {cityName:'Detroit', sprite:''}
        ]
        newItens.map((itens, index) =>{
            pokemon.push({name: itens.cityName, sprite:''})
            setOptions(pokemon)
        })

    }, []);


    function setSearchInput(event){
        setSearch(event.target.value)
    }

    const setPokeDex = poke => {
        setSearch(poke);
        setDisplay(false);
        props.triggerParent(poke)
    }

    return (
        <div className="flex-container flex-column pos-rel">
            <input 
                id="auto" 
                placeholder="City"
                className="input-city"
                onClick={() => setDisplay(!display) } 
                value={search} 
                onChange={event => setSearchInput(event)}

            />
            {display && (
                <div className="options-container">
                    {options.filter(({name}) => name.indexOf(search.toLowerCase()) > -1)
                        .map((v,index) =>{
                            return(
                                <div onClick={() => setPokeDex(v.name)} className="city-option d-flex" key={index} tabIndex="0">
                                    <span className="location-icon"><FaMapMarkerAlt/></span>
                                    <span className="clr-white">{v.name}</span>
                                </div>
                            )
                        })
                    }
                </div>
            )}
        </div>
    )
}

export default InputCitySearch;