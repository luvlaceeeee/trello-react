import React from 'react';
import IconButton from "./UI/IconButton/IconButton";
import {FiChevronDown} from "react-icons/fi";
import {useBoard} from "../store/store";

const BoardHeader = ({title, members, columns}) => {

    return (
        <div className='p-2 inline-flex items-center space-x-2'>
            <div>
                <div className='inline-flex space-x-2'>
                    <h1 className='font-bold text-2xl'>{title}</h1>
                    <IconButton icon={<FiChevronDown/>}/>
                </div>

                <div className='text-zinc-400'>
                    <span>{columns.length} Running Projects</span>
                </div>
            </div>
            {/*<div className="flex -space-x-4">*/}
            {/*    <img className="w-10 h-10 rounded-full border-2 border-amber-50"*/}
            {/*         src="https://sun9-56.userapi.com/impg/3BZG-0t0fSKpY-Q6_Y6NyWwqe8hAgeowXuXEDQ/P2tURnFvRw0.jpg?size=725x677&quality=95&sign=009bcd00a8b1b87d1e6199e5fc17080e&type=album" alt=""/>*/}
            {/*    <img className="w-10 h-10 rounded-full border-2 border-amber-50"*/}
            {/*         src="https://sun9-56.userapi.com/impg/3BZG-0t0fSKpY-Q6_Y6NyWwqe8hAgeowXuXEDQ/P2tURnFvRw0.jpg?size=725x677&quality=95&sign=009bcd00a8b1b87d1e6199e5fc17080e&type=album" alt=""/>*/}
            {/*    <div className='w-10 h-10 rounded-full bg-zinc-900 bg-opacity-80 border-2 border-amber-50 text-white text-center text-xs flex items-center justify-center'>*/}
            {/*        <span>+50</span>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div className='flex flex-col justify-between items-start space-y-1'>
                <span className='text-gray-700 text-lg'>Members:</span>
                <div className='text-s, text-zinc-400'>
                    {members.map((member, i) => {
                        if (i !== members.length - 1){
                            return  member + ', '
                        } else {
                            return member + '.'
                        }
                    })}
                </div>
            </div>
        </div>
    );
};

export default BoardHeader;