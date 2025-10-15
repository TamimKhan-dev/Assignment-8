import React from 'react';
import { GoDownload } from 'react-icons/go';
import formatCountNumbers from '../utilities/formatCountDownload';
import { IoIosStar } from 'react-icons/io';

const InstalledAppData = ({ app, handleUninstall }) => {
    const { title, downloads, ratingAvg, size, id } = app;
    return (
        <div className="rounded-sm py-2 px-4 mb-3 bg-white flex justify-between items-center">
            <div className='flex gap-3'>
                <img src={app.image} alt="" className='w-18 h-18 rounded-md'/>
                <div className='p-2 space-y-3'>
                    <h4 className='text-xl font-semibold'>{title}</h4>
                    <div className='flex gap-4'>
                        <span className='flex items-center gap-1 text-[#00D390]'><GoDownload /> {formatCountNumbers(downloads)}</span>
                        <span className='flex items-center gap-1 text-[#FF8811]'><IoIosStar /> {ratingAvg}</span>
                        <span className='text-[#627382]'>{size} MB</span>
                    </div>
                </div>
            </div>
            <button onClick={() => handleUninstall(id, title)} className='btn bg-[#00D390] text-white'>Uninstall</button>
        </div>
    );
};

export default InstalledAppData;