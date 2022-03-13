import axios from 'axios';
import React, { useState } from 'react';


const SearchBox = ( {setLocations} ) => {
    const [locationId, setLocationId] = useState('');
    
    const searchLocation = () => {
        // we make a request based on the id that 
        // the user had written
        axios.get(`https://rickandmortyapi.com/api/location/${locationId}`)
            .then(res =>  {
                setLocations(res.data);
            } );            
    };

    function handleKeyDown(e) {
        if (e.key === 'Enter') {searchLocation()}
      }

    return (
        <div>
            <input 
                className='input_text' 
                type='text'
                onChange={ e => setLocationId(e.target.value)}
                value = {locationId}
                onKeyDown={handleKeyDown}
                onClick={searchLocation}
            />
            <button className='button' onClick={searchLocation}>Search</button>
        </div>
    );
};

export default SearchBox;