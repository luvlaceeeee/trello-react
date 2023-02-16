import React from 'react';
import ColumnHeader from "../Column/ColumnHeader";
import {colors} from "../../enum/colors";
import Task from "../Column/Task";

const BoardColumn = ({title}) => {
    return (
        <div>
            <button>
                <div className='bg-zinc-100 flex flex-col border-2 text-zinc-700 text-center justify-center items-center w-72 h-72 rounded-lg p-4 pb-4 shadow-lg space-y-4 hover:border-zinc-300 hover:bg-zinc-300 transition-colors ease-in-out duration-300'>
                    <span className='font-medium text-2xl'>{title}</span>
                </div>
            </button>
        </div>
    );
};

export default BoardColumn;