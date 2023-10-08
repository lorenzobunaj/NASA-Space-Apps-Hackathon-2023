import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import { useAppContext } from '../../../context/context';

const VegetationInputsList = (data) => {
    const { planetQuery } = useAppContext();
    const { input, setInput } = data;

    return (
            <div>
                {
                    planetQuery.vegetation.chemicals.map((chem, i) => {
                        return (
                            <div className='d-flex' key={i} >
                                <p>{chem.name}</p>
                                <Box sx={{ width: 200 }}>
                                    <Stack
                                        spacing={2} 
                                        direction="row" 
                                        alignItems="center" 
                                        className="mx-2">
                                        <Slider
                                            id={chem.name}
                                            size="default"
                                            aria-label="Default"
                                            valueLabelDisplay="auto"
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
                                    </Stack>
                                </Box>
                            </div>
                        )
                    })
                }
            </div>
    )
};

export { VegetationInputsList };