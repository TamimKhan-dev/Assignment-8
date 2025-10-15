import React from 'react';
import { MoonLoader } from 'react-spinners';

const LoadingSpinner = () => {
    return (
        <div className='absolute top-1/3 left-1/2'>
            <MoonLoader color='black'/> 
        </div>
    );
};

export default LoadingSpinner;