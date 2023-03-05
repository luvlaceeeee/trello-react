import React from 'react';

const Badge = ({title, bgColor, number, borderColor}) => {

    return (
        <div className='flex items-center space-x-2'>
            <span className={`text-white text-xs font-medium py-2.5 px-3.5 rounded-full ${bgColor}`}>{title}</span>
            <div className={`inline-flex items-center text-sm font-medium py-1 px-2 rounded-full border-2 border-zinc-700 ${borderColor}`}>
                <span>{number}</span>
            </div>
        </div>
    );
};

export default Badge;