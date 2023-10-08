import React from 'react';
import { useAppContext } from '../../context/context';
import { useLocation, Link } from 'react-router-dom';

const PlanetImage = (data) => {
    const { planetImageUrl } = data;
    const location = useLocation();
    
    return (
        <>
            <div className='container-fluid mb-5 text-center'>
                <h1 className='mb-4 ms-5' style={{
                    fontWeight: 900,
                    textTransform: 'uppercase',
                    color: 'white'
                }}>How your planets could be</h1>
                <div className='row d-flex justify-content-center w-100 my-3'>
                    <div className='col-12 d-flex justify-content-center'>
                        <Link style={{
                                color: 'white',
                                fontSize: '120%',
                                fontWeight: 'bold',
                                textTransform: 'uppercase'
                            }}
                            to={{
                                pathname: `${location.pathname}/../`
                            }}
                        >
                            Return to Planet Page
                        </Link>
                    </div>
                </div>
                <div className='row justify-content-around w-100'>
                    {
                        planetImageUrl.map((obj,i) => {
                            return (
                                <div className='col-md-4 col-sm-6 col-12 d-flex mt-4 p-4 justify-content-center' key={i}>
                                    <img className='p-4 bg-white'
                                        src={obj.url} 
                                        alt="Generated" 
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
};

export { PlanetImage };