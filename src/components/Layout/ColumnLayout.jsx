import React from 'react';
import ButtonMenu from "../UI/ButtonMenu/ButtonMenu";
import {FiCodesandbox} from "react-icons/fi";

const ColumnLayout = ({children}) => {
    return (
        <div className="scrollbar p-4 flex space-x-3 overflow-auto scroll-smooth flex-1">
            {children}
        </div>
    );
};

export default ColumnLayout;