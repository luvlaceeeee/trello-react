import React from 'react';

const Tag = ({title, color}) => {
    return (
        <div className={`${color} mr-1 mb-1 grow-0 shrink-0 text-xs font-bold px-2.5 py-1 h-5.5 rounded text-center flex items-center`}>
            {title}
        </div>
    );
};

export default Tag;