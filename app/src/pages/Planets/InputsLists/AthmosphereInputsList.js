import React from 'react';
import { useAppContext } from '../../../context/context';

const AthmosphereInputsList = (data) => {
    const { planetQuery } = useAppContext();
    const { input, setInput } = data;

    return (
        <div>
            Athmosphere:
            <div>
                {
                    planetQuery.athmosphere.map((chem, i) => {
                        return (
                            <input
                                key={i}
                                id={chem.name}
                                placeholder={chem.name}
                                value={input.athmosphere[i].percentage}
                                onChange={(e) => {
                                    const newAthmosphere = input.athmosphere;
                                    newAthmosphere[i].percentage = e.target.value;
                                    setInput({
                                        ...input,
                                        athmosphere: newAthmosphere
                                    })
                                }}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
};

export { AthmosphereInputsList };