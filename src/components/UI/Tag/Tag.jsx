import React from 'react';

const Tag = ({title}) => {
    return (
        <div className={"bg-amber-200 text-amber-600 text-xs font-bold px-2.5 py-0.5 rounded h-5 text-center flex items-center"}>
            {title}
        </div>
    );
};

export default Tag;