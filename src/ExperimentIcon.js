import React from 'react';

const ExperimentIcon = ( {id, name, imgSrc}) => {
    return (
        // Use tachyons to create green background and grow upon hover
        <div>
            <h2>{name}</h2>
            <img className='br-pill' alt={name} src={`${imgSrc}`} width='200' height='200' />
        </div>
    )
}

export default ExperimentIcon;