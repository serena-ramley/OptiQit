import React from 'react';

const ExperimentIcon = ( {id, name, imgSrc}) => {
    return (
        // Use tachyons to create circle br-pill
        <div className='tc dib br3 pa3 ma2 grow bw2'>
            <h2>{name}</h2>
            <img className='br-pill' alt={name} src={`${imgSrc}`} width='200' height='200' />
        </div>
    )
}

export default ExperimentIcon;