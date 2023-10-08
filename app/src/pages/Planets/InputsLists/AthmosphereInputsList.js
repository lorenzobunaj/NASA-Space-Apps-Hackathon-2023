import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import { useAppContext } from '../../../context/context';

const AthmosphereInputsList = (data) => {
    const { planetQuery } = useAppContext();
    const { input, setInput } = data;

    return (
            <div>
                {
                    planetQuery.athmosphere.chemicals.map((chem, i) => {
                        return (
                            <div className='d-flex' key={i} >
                                <p>{chem.name}</p>
                                <Box sx={{width:150}}>
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
                                    </Stack>
                                </Box>
                            </div>
                        )
                    })
                }
            </div>
    )
};

export { AthmosphereInputsList };