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
                    planetQuery.athmosphere.chemicals.map((chem, i) => {
                        return (
                            <input
                                key={i}
                                id={chem.name}
                                placeholder={chem.name}
                                value={input.athmosphere.chemicals[i].percentage}
                                onChange={(e) => {
                                    const newChemicals = input.athmosphere.chemicals;
                                    newChemicals[i].percentage = e.target.value;
                                    setInput({
                                        ...input,
                                        athmosphere: {
                                            ...input.athmosphere,
                                            chemicals: newChemicals
                                        }
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