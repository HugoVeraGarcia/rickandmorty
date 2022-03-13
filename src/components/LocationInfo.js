import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchBox from "./SearchBox";
import ResidentsList from './ResidentsList';
import logo from '../assets/rickandmorty2.gif'

const LocationInfo = () => {
const [locations, setLocations] = useState('');
useEffect(()=>{
    const random = Math.floor(Math.random()* 126) + 1;
    axios.get(`https://rickandmortyapi.com/api/location/${random}`)
        .then(res => {
            setLocations(res.data);            
        })  
},[]);

    return (
        <div className='locatioInfo_container'>
            <img src={logo} className="app-logo" alt="logo" />
            <SearchBox setLocations ={ setLocations } />
            <p className='title'>{locations.name}</p>
            <div className='locations_container'>
                <p>Type: {locations.type}</p>
                <p>{locations.dimension}</p>
                <p>Population: {locations?.residents?.length}</p>
            </div>
            <ResidentsList locations = {locations.residents}/>
        </div>
    );
};

export default LocationInfo;