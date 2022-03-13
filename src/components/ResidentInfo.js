import axios from 'axios';
import React, { useEffect, useState } from 'react';
import alive from "../assets/alive.png";
import unknown from "../assets/unknown.png";
import dead from "../assets/dead.png"
//import logo from '../assets/rickandmorty.gif'

const ResidentInfo = ( { residentUrl }) => {
    const [resident, setResident] = useState({})
    useEffect(()=>{
        axios.get(residentUrl)
          .then(res => {
            console.log('desde info', res.data)
            setResident(res.data)
          })
    },[ residentUrl ])

    function statusCharacter(){
        if (resident.status === 'Alive'){
            return alive;
        } else if (resident.status === 'Dead'){
            return dead;
        } else if (resident.status === 'unknown'){
            return unknown;
        }
    }

    return (
        <div className='residentInfo_container'>
            <div>
                <img className='image' src={resident.image} alt="Resident" /> 
            </div>
            <div className='residentInfo_detail'>
                <p>{ resident.name }</p>
                <p className='gray_text'>status</p>
                <div className='status_container'>
                    <img className='status_icon' src={statusCharacter()} alt="Status" />
                    <p>{ resident.status}</p>
                </div>
                <p className='gray_text'>origin</p>
                <p>{resident.origin?.name}</p>
                <p className='gray_text'>episodes where appear</p>
                <p>{resident.episode?.length}</p>
            </div>
        </div>
    );
};

export default ResidentInfo;
/*
<img src={logo} className="app-logo" alt="logo" />

*/