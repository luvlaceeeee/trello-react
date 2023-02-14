import React from 'react';

const Badge = ({title, color}) => {
    return (
        <div>
            <span className={`text-white text-xs font-medium py-3 px-4 rounded-full ${color}`}>{title}</span>
            <span className="text-blue-700 text-xs font-medium ml-2 py-3 px-4 rounded-full border-2 border-blue-700">3</span>
        </div>
    );
};

export default Badge;