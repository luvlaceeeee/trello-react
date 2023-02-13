import React from 'react';

const Content = ({children}) => {
    return (
        <div className='content pl-24 h-screen flex flex-col ransition-all ease-out duration-300'>
            {children}
        </div>
    );
};

export default Content;