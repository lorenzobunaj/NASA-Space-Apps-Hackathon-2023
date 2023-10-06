import React from 'react';
import { useAppContext } from '../../../context/context';

const SurfaceInputsList = (data) => {
    const { planetQuery } = useAppContext();
    const { input, setInput } = data;

    return (
        <div>
            Surface:
            <div>
                {
                    planetQuery.surface.chemicals.map((chem, i) => {
                        return (
                            <input
                                key={i}
                                id={chem.name}
                                placeholder={chem.name}
                                value={input.surface.chemicals[i].percentage}
                                onChange={(e) => {
                                    const newChemicals = input.surface.chemicals;
                                    newChemicals[i].percentage = e.target.value;
                                    setInput({
                                        ...input,
                                        surface: {
                                            ...input.surface,
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

export { SurfaceInputsList };