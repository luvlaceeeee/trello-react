import React from 'react';

const IconButton = ({icon}) => {
    return (
        <button type="button" className="text-gray-600 hover:bg-gray-600 hover:text-white hover:bg-opacity-70 font-medium rounded-full p-2.5 transition-colors ease-in-out duration-300">
            {icon}
            <span className="sr-only">Icon description</span>
        </button>
    );
};

export default IconButton;