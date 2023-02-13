import React from 'react';

const Sidebar = ({children}) => {
    return (
        <div className='sidebar p-4 bg-white text-black absolute top-0 left-0 bottom-0 w-60 border-r-2 border-zinc-400 border-opacity-20 transition-all ease-out duration-300 '>
            {children}
        </div>
    );
};

export default Sidebar;