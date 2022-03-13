import React from 'react';
import ResidentInfo from './ResidentInfo';

const ResidentsList = ( { locations } ) => {

    
    return (
        <div className='residentList_container'>
            {
                locations?.map(location => (

                    <ResidentInfo
                    residentUrl = {location}
                    key={location}
                    />
                ))
            }
        </div>
    );
};

export default ResidentsList;