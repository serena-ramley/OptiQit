import React from 'react';
import ExperimentIcon from './ExperimentIcon';

const ExperimentList = ({experiments}) => {
    return (
        <div>
            {
                experiments.map( (card, i) => {
                    return (
                        <ExperimentIcon
                        key={i}
                        id={experiments[i].id}
                        name={experiments[i].name}
                        imgSrc={experiments[i].imgSrc}
                        />
                    )
                })
            }
        </div>
    );
}

export default ExperimentList;