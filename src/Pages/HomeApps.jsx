import React from 'react';
import { Link } from 'react-router';
import useApps from '../hooks/useApps';
import AppCards from './AppCards';

const HomeApps = () => {
    const { apps } = useApps();
    const featuredApps = apps.slice(0, 8);
    
    return (
        <div className='w-11/12 flex flex-col items-center gap-10'>
            <div>
                <h2 className='text-5xl font-bold text-center mb-5'>Trending Apps</h2>
                <p className='text-gray-500'>Explore All Trending Apps on the Market developed by us</p>
            </div>

            <div className='grid grid-cols-4 gap-8'>
                {
                    featuredApps.map(apps => <AppCards key={apps.id} apps={apps}/>)
                }
            </div>

            <Link to='/apps' className='btn bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white px-10 font-semibold text-md'>Show All</Link>
        </div>
    );
};

export default HomeApps;