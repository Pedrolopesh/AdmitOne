import React, { useEffect, useRef, useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/all';


const InputCitySearch = () => {
    const [display, setDisplay] = useState(false);
    const [options, setOptions] = useState([]);
    const [search, setSearch] = useState("");
    // const wrapperRef = useRef(null);

    useEffect(() => {
        const pokemon = [];
        const promises = new Array(20)
            .fill()
            .map((v, i) => fetch(`https://pokeapi.co/api/v2/pokemon-form/${i + 1}`))
            Promise.all(promises).then((pokemonArr) =>{
                return pokemonArr.map(resp => 
                    resp.json().then(({name, sprites: {font_default: sprite}}) =>{
                        return pokemon.push({name, sprite})
                    })
                );
            })
            setOptions(pokemon)
    }, []);

    //FUNCTION CALLED TO HIDE OPTION BUT USING DIV REFERENCES.
    // useEffect(() =>{
    //     document.addEventListener('mousedowm', handleClickOutside)

    //     return(() => {
    //         document.removeEventListener("mousedown", handleClickOutside)
    //     })
    // }, []);

    // const handleClickOutside = event => {
    //     const {current: wrap} = wrapperRef;

    //     if(wrap && !wrap.contains(event.target)){
    //         setDisplay(false)
    //     }
    // }

    const setPokeDex = poke => {
        setSearch(poke);
        setDisplay(false);
    }

    return (
        //ref={wrapperRef} to hide options
        <div className="flex-container flex-column pos-rel">
            <input 
                id="auto" 
                placeholder="City"
                className="input-city"
                onClick={() => setDisplay(!display) } 
                value={search} 
                onChange={event => setSearch(event.target.value)}

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