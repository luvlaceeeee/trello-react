import React from 'react';
import {FiPlus, FiEdit3, FiTrash2, FiMoreHorizontal} from "react-icons/fi";
import {useColumnModal} from "../store/uiStore";


const ColumnDropdown = ({state, setOpen}) => {
    return (
        <div className={`${state ? '' : 'hidden'} z-40 absolute bg-white divide-y divide-zinc-800 rounded-lg shadow w-44 border`}>
            <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownMenuIconButton">
                <li>
                    <div onClick={() => setOpen('rename-column')} className='flex items-center block px-4 py-2 hover:bg-gray-100'>
                        <FiEdit3/>
                        <button className="px-2 hover:bg-gray-100">Rename column</button>
                    </div>
                </li>
                <li>
                    <div onClick={() => setOpen('create-task')} className='flex items-center block px-4 py-2 hover:bg-gray-100'>
                        <FiPlus/>
                        <button className="px-2 hover:bg-gray-100">Add task</button>
                    </div>
                </li>
                <li>
                    <div onClick={() => setOpen('delete-column')} className='flex items-center block px-4 py-2 hover:bg-gray-100'>
                        <FiTrash2/>
                        <button className="px-2 hover:bg-gray-100">Delete column</button>
                    </div>
                </li>
            </ul>
            {/*<div className="py-2">*/}
            {/*    <a href="#"*/}
            {/*       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ">Separated*/}
            {/*        link</a>*/}
            {/*</div>*/}
        </div>
    );
};

export default ColumnDropdown;