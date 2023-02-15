import React from 'react';
import Badge from "./UI/Badge/Badge";
import {colors} from "../enum/colors";
import {FiPlus} from "react-icons/fi";

const ColumnHeader = ({badgeTitle, taskNumber, color}) => {
    const [badgeColor, taskColor] = color

    return (
        <div className='flex flex-row justify-between items-center w-full p-3 bg-white rounded-full shadow'>
            <Badge title={badgeTitle} bgColor={badgeColor} borderColor={taskColor} number={taskNumber}/>

            <button type="button" className="text-gray-600 hover:bg-gray-400 hover:text-white hover:bg-opacity-70 font-medium rounded-full p-2.5 transition-colors ease-in-out duration-300">
                <FiPlus size={15}/>
            </button>
        </div>
    );
};

export default ColumnHeader;