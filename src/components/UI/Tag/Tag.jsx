import React from 'react';
import {tagColor} from "../../../utils/tagColor";

const Tag = ({title, color, className}) => {
    return (
        <div className={`${tagColor(color)}  grow-0 shrink-0 text-xs font-bold px-2.5 py-1 h-5.5 rounded text-center flex items-center ${className}`}>
            {title}
        </div>
    );
};

export default Tag;