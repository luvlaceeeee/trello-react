import React, {useEffect, useRef, useState} from 'react';
import Badge from "../UI/Badge/Badge";
import {colors} from "../../enum/colors";
import {FiPlus, FiEdit3, FiTrash2, FiMoreHorizontal} from "react-icons/fi";
import ColumnDropdown from "../ColumnDropdown";
import {useBoardModal, useColumnModal} from "../../store/uiStore";

const ColumnHeader = ({badgeTitle, taskNumber, color, setOpen}) => {
    const [badgeColor, taskColor] = color

    const [isOpen, setIsOpen] = useState(false);
    const button = useRef(null);
    useEffect(() => window.addEventListener('click', ev => {
        if (button.current && button.current.contains(ev.target)) {
            setIsOpen(!isOpen)
        } else {
            setIsOpen(false)
        }
    }), []);


    return (
        <div className='flex flex-row justify-between items-center w-full p-3 bg-white rounded-full shadow space-x-1'>
            <Badge title={badgeTitle} bgColor={badgeColor} borderColor={taskColor} number={taskNumber}/>
            <div className='relative'>
                <button ref={button} type="button" className="text-gray-600 hover:bg-zinc-400 hover:text-white hover:bg-opacity-70 font-medium rounded-full p-1.5 mx-1 transition-colors ease-in-out duration-300">
                    <FiMoreHorizontal size={15}/>
                </button>
                <ColumnDropdown state={isOpen} setOpen={setOpen}/>
                {/*<button onClick={handleClick} type="button" className="text-gray-600 hover:bg-red-400 hover:text-white hover:bg-opacity-70 font-medium rounded-full p-2 transition-colors ease-in-out duration-300">*/}
                {/*    <FiTrash2 size={15}/>*/}
                {/*</button>*/}
                {/*<button type="button" className="text-gray-600 hover:bg-gray-400 hover:text-white hover:bg-opacity-70 font-medium rounded-full p-2 transition-colors ease-in-out duration-300">*/}
                {/*    <FiPlus size={15}/>*/}
                {/*</button>*/}
            </div>
        </div>
    );
};

export default ColumnHeader;