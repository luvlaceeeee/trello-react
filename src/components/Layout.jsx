import React from 'react';
import ButtonMenu from "./UI/Button/ButtonMenu";
import {FiCodesandbox} from "react-icons/fi";

const Layout = ({children}) => {
    return (
        <div className='h-screen bg-zinc-900'>
            {children}
        </div>
    );
};

export default Layout;