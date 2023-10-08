import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import { useAppContext } from '../../../context/context';

const HabitabilityInputsList = (data) => {
    const { planetQuery } = useAppContext();
    const { input, setInput } = data;

    return (
            <>
                {
                    planetQuery.habitability.factors.map((factor, i) => {
                        return (
                            <div className='d-flex' key={i} >
                                <input
                                        id={factor.name}
                                        placeholder={planetQuery.habitability.factors[i].value}
                                        value={input.habitability.factors[i].value}
                                        onChange={(e) => {
                                            const newFactors = input.habitability.factors;
                                            newFactors[i].percentage = e.target.value;
                                            setInput({
                                                ...input,
                                                habitability: {
                                                    ...input.habitability,
                                                    factors: newFactors
                                                }
                                           })
                                        }}
                                    />
                            </div>
                        )
                    })
                }
            </>
    )
};

export { HabitabilityInputsList };