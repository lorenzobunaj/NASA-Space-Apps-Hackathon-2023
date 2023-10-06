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
                    planetQuery.surface.map((chem, i) => {
                        return (
                            <input
                                key={i}
                                id={chem.name}
                                placeholder={chem.name}
                                value={input.surface[i].percentage}
                                onChange={(e) => {
                                    const newSurface = input.surface;
                                    newSurface[i].percentage = e.target.value;
                                    setInput({
                                        ...input,
                                        surface: newSurface
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