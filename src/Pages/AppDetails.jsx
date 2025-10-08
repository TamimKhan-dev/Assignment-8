import React from 'react';
import { useParams } from 'react-router';
import useApps from '../hooks/useApps';
import downloadImg from '../assets/icon-downloads.png'
import starImg from '../assets/icon-ratings.png'
import reviewImg from '../assets/icon-review.png'
import formatCountNumbers from '../utilities/formatCountDownload';
import HorizontalBarChart from './horizontalBarChart';



const AppDetails = () => {
    const { apps, loading, error } = useApps();
    const { id } = useParams();
    const singleData = apps.find(app => app.id === parseInt(id));

    if (loading) {
        return <div className='w-11/12 mx-auto py-10'>Loading App Details...</div>;
    }

    if (error) {
        return <div className='w-11/12 mx-auto py-10'>Error: {error.message}</div>;
    }

    if (!singleData) {
        return <div className='w-11/12 mx-auto py-10'>App not found!</div>;
    }

    const { image, title, companyName, size, downloads, ratingAvg, reviews, ratings, description } = singleData;
    
    return (
        <div className='w-11/12 mx-auto py-10'>

            <div className='flex gap-10 mb-6 pb-10 border-b-2 border-gray-200'>
                <div>
                    <img src={image} alt="" className='w-40 h-40 md:w-80 md:h-80'/>
                </div>

                <div className='flex-1'>
                    <div className='pb-6 border-b-1 border-gray-200 mb-8'>
                        <h3 className='text-3xl font-semibold mb-2'>{title}</h3>
                        <p className='text-[#627382] font-semibold'>Developed by <span className='text-[#632EE3]'>{companyName}</span></p>
                    </div>

                    <div className='space-y-9'>
                        <div className='flex gap-20'>
                            <div className='space-y-2'>
                                <img src={downloadImg} alt="" />
                                <p className='text-sm'>Downloads</p>
                                <h4 className='text-4xl font-extrabold'>{formatCountNumbers(downloads)}</h4>
                            </div>
                            <div className='space-y-2'>
                                <img src={starImg} alt="" />
                                <p className='text-sm'>Average Ratings</p>
                                <h4 className='text-4xl font-extrabold'>{ratingAvg}</h4>
                            </div>
                            <div className='space-y-2'>
                                <img src={reviewImg} alt="" />
                                <p className='text-sm'>Total Reviews</p>
                                <h4 className='text-4xl font-extrabold'>{formatCountNumbers(reviews)}</h4>
                            </div>

                        </div>
                        <button className='btn bg-[#00D390] text-white'>Install Now ({size} MB)</button>
                    </div>
                </div>
            </div>

            <div className='space-y-7 mb-10'>
                <h4 className='text-2xl font-bold'>Ratings</h4>
                <HorizontalBarChart ratings={ratings}/>
            </div>

            <div className='space-y-4'>
                <h4 className='text-2xl font-semibold'>Description</h4>
                <p className='text-[#627382] text-xl'>{description}</p>
            </div>
        </div>
    );
};

export default AppDetails;