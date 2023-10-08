import React from 'react';
import { useAppContext } from '../../../context/context';

const VegetationInputsList = (data) => {
    const { planetQuery } = useAppContext();
    const { input, setInput } = data;

    return (
        <div>
            Vegetation:
            <div>
                {
                    planetQuery.vegetation.chemicals.map((chem, i) => {
                        return (
                            <input
                                key={i}
                                id={chem.name}
                                placeholder={chem.name}
                                value={input.vegetation.chemicals[i].percentage}
                                onChange={(e) => {
                                    const newChemicals = input.vegetation.chemicals;
                                    newChemicals[i].percentage = e.target.value;
                                    setInput({
                                        ...input,
                                        vegetation: {
                                            ...input.vegetation,
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

export { VegetationInputsList };