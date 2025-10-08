import React from 'react';
import { RxDownload } from 'react-icons/rx';
import starIcon from '../assets/icon-ratings.png';
import { Link } from 'react-router';
import formatCountNumbers from '../utilities/formatCountDownload';

//  const countDownload = (downloads) => {
//         const num = downloads.toString();
//         let result = '';
//         switch(num.length) {
//             case 7 :
//                result = num.slice(0, 1) + "m"
//               break;
//             case 8 :
//                 result = num.slice(0, 2) + "m"
//               break;
//             case 9 :
//                 result = num.slice(0, 3) + "m"
//               break;
//             case 10 :
//                 result = num.slice(0, 1) + "b"
//               break;  
//             default :
//                result = 'less then 1million';
//               break;
//         }
//         return result
//     }

const AppCards = ({ apps }) => {
    const { image, downloads, title, id, ratingAvg } = apps;
    
    
    return (
        <Link to={`/apps/${id}`}>
            <div className='bg-white p-3 transform transition-transform hover:scale-105 cursor-pointer shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.1)] rounded-md space-y-4 hover:-translate-y-3'>
            <img src={image} alt="" className='w-full h-96 rounded-sm mb-2'/>
            <p className='text-xl'>{title}</p>
            <div className='flex justify-between'>
                <p className='bg-[#F1F5E8] text-[#00D390] px-3 py-2 rounded-md flex gap-2 items-center font-semibold'><RxDownload />{formatCountNumbers(downloads)}</p>
                <p className='flex gap-2 items-center bg-[#FFF0E1] px-3 py-2 rounded-md'>
                    <img src={starIcon} alt="" className='w-4 h-auto'/>
                    <span className='text-[#FF8811]'>{ratingAvg}</span>
                </p>
            </div>
            </div>
        </Link>
    );
};

export default AppCards;
