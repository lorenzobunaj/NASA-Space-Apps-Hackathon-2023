import React from 'react';
import { useAppContext } from '../../context/context';

const PlanetImage = (data) => {
    const { planetImageUrl } = data;
    
    return (
        <>
            {
                planetImageUrl.map((obj,i) => {
                    return (
                        <div key={i}>
                            <img src={obj.url} alt="Generated" />
                        </div>
                    )
                })
            }
        </>
    )
};

export { PlanetImage };