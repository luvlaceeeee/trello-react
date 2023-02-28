import React from 'react';
import {tagColor} from "../../../utils/tagColor";
import IconButton from "../IconButton/IconButton";
import {FiX} from "react-icons/fi";

const Tag = ({title, color, className, tagId, hidden}) => {


    return (
        <div className={`flex flex-row items-center ${className}`}>
            <div
                className={`${tagColor(color)}  grow-0 shrink-0 text-xs font-bold px-2.5 py-1 h-5.5 rounded text-center flex items-center`}>
                {title}
            </div>

            <button className='text-zinc-400 ml-1'><FiX size={15}/></button>
        </div>
    );
};

export default Tag;