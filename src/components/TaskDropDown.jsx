import React, {useEffect, useRef, useState} from 'react';
import {FiEdit3, FiPlus, FiTrash2} from "react-icons/fi";

const TaskDropDown = ({state, setOpen}) => {
    return (
        <div className={`${state ? '' : 'hidden'} z-50 absolute bg-white divide-y divide-zinc-800 rounded-lg shadow w-auto border`}>
            <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownMenuIconButton">
                {/*<li>*/}
                {/*    <div className='flex items-center block px-4 py-2 hover:bg-gray-100'>*/}
                {/*        <FiEdit3/>*/}
                {/*        <button className="px-2 hover:bg-gray-100">Delete task</button>*/}
                {/*    </div>*/}
                {/*</li>*/}
                <li>
                    <div onClick={() => setOpen('update-task')} className='cursor-pointer flex items-center block px-4 py-2 hover:bg-gray-100'>
                        <FiEdit3/>
                        {/*<button className="px-2 hover:bg-gray-100">Update task</button>*/}
                    </div>
                </li>
                <li>
                    <div onClick={() => setOpen('delete-task')} className='cursor-pointer flex items-center block px-4 py-2 hover:bg-gray-100'>
                        <FiTrash2/>
                        {/*<button className="px-2 hover:bg-gray-100">Delete task</button>*/}
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

export default TaskDropDown;