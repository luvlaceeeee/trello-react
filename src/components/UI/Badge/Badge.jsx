import React from 'react';

const Badge = ({title, bgColor, number, borderColor}) => {

    return (
        <div className='flex items-center'>
            <span className={`text-white text-xs font-medium py-3 px-4 rounded-full ${bgColor}`}>{title}</span>
            <div className={`inline-flex items-center text-sm font-medium ml-2 py-2 px-3 rounded-full border-2 ${borderColor}`}>
                <span>{number}</span>
            </div>
        </div>
    );
};

export default Badge;