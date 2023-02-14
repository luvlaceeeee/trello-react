import React from 'react';

const Header = ({children}) => {
    return (
        <header className='bg-white text-black p-4 shrink-0 basis-auto border-b-2 border-zinc-400 border-opacity-20'>
            {children}
        </header>
    );
};

export default Header;