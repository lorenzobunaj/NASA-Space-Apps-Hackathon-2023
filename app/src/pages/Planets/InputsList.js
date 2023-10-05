import React from 'react';
import { useAppContext } from '../../context/context';

const InputsList = (data) => {
    const { planetQuery } = useAppContext();
    const { input, setInput } = data;

    return (
        <div>
            <input 
                id="planetName" 
                placeholder={planetQuery.name}
                value={input.name}
                onChange={(e) => {
                    setInput({
                        ...setInput,
                        name: e.target.value
                    })
                }}
            />
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

export { InputsList };