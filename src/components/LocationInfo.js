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
        <header className='locationInfo_container'>
            <img src={logo} className="app-logo" alt="logo" />
            <SearchBox setLocations ={ setLocations } />
            <p className='title'>{locations.name}</p>
            <div className='locations_container'>
                <p className='text_header'>Type: {locations.type}</p>
                <p className='text_header'>{locations.dimension}</p>
                <p className='text_header'>Population: {locations?.residents?.length}</p>
            </div>
            <ResidentsList locations = {locations.residents}/>
        </header>
    );
};

export default LocationInfo;