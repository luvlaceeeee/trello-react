import React from 'react';
import Badge from "./UI/Badge/Badge";
import IconButton from "./UI/IconButton/IconButton";
import {FiMoreVertical, FiPlus} from "react-icons/fi";
import Tag from "./UI/Tag/Tag";
import {colors} from "../enum/colors";
import {tagColor} from "../enum/tagColor";
import ColumnHeader from "./ColumnHeader";
import Task from "./Task";

const Column = () => {
    return (
        <div>
            <div className='bg-zinc-200 flex flex-col justify-between items-center w-72 rounded-lg p-4 pb-4 shadow-lg space-y-4'>
                <ColumnHeader badgeTitle={'To do'} color={colors.blue.badge} taskNumber={3}/>

                <Task/>
            </div>
        </div>
    );
};

export default Column;