import React from 'react';
import {useSidebar} from "../store/store";

const Content = ({children}) => {
    const isOpen = useSidebar(state => state.isOpen)

    return (
        <div className={`${isOpen ? ' pl-60' : ' pl-28'} content h-screen flex flex-col transition-all ease-out duration-300`}>
            {children}
        </div>
    );
};

export default Content;