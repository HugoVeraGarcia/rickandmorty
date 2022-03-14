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

    return (
        <div className='search'>
            <input 
                className='input_text' 
                type='text'
                onChange={ e => setLocationId(e.target.value)}
                value = {locationId}
                
            />
            <button className='button' onClick={searchLocation}>Search</button>
        </div>
    );
};

export default SearchBox;