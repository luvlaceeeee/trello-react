import React from 'react';
import IconButton from "./UI/IconButton/IconButton";
import { FiCodesandbox, FiPlus, FiMoreVertical } from "react-icons/fi";


const AddColumn = ({title}) => {
    return (
        <div>
            <button>
                <div className=' text-zinc-400 bg-zinc-200 flex flex-col border-2 text-center justify-center items-center w-72 h-72 rounded-lg p-4 pb-4 shadow-lg hover:border-zinc-300 hover:bg-zinc-300 transition-colors ease-in-out duration-300'>
                        <FiPlus size={30}/>
                        <span className='font-medium text-2xl'>{title}</span>
                </div>
            </button>
        </div>
    );
};

export default AddColumn;