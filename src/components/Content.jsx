import React from 'react';

const Content = ({children}) => {
    return (
        <div className={'content h-screen flex flex-col ransition-all ease-out duration-300' + ' pl-60'}>
            {children}
        </div>
    );
};

export default Content;