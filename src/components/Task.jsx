import React from 'react';
import Tag from "./UI/Tag/Tag";
import {colors} from "../enum/colors";
import {FiMoreVertical} from "react-icons/fi";

const Task = () => {
    return (
        <div className='bg-white flex flex-col justify-between items-start w-full rounded-lg p-4 pb-3 shadow'>
            <div className='flex flex-row items-center w-full pb-2'>

                <div className="flex flex-1 h-auto flex-wrap">
                    <Tag title={'UX design'} color={colors.green.tag}/>
                    <Tag title={'UX design'} color={colors.green.tag}/>
                    <Tag title={'UX design'} color={colors.green.tag}/>
                    <Tag title={'UX design'} color={colors.green.tag}/>
                    <Tag title={'UX design'} color={colors.green.tag}/>
                </div>

                <button type="button" className="text-gray-600 hover:bg-gray-400 hover:text-white hover:bg-opacity-70 font-medium rounded-full p-2.5 transition-colors ease-in-out duration-300">
                    <FiMoreVertical size={15}/>
                </button>
            </div>

            <div className='h-auto'>
                <h1 className='font-bold pb-1'>fugiat veniam minus fugiat veniam minus fugiat veniam minus</h1>
            </div>

            <div className='pb-3 h-auto'>
                <span className='text-gray-400 text-sm h-auto'>fugiat veniam minus fugiat veniam minus fugiat veniam minus fugiat veniam minus fugiat veniam minus</span>
            </div>

            {/*<div className='flex flex-row justify-between items-end w-full'>*/}
            {/*    <div className="flex -space-x-4">*/}
            {/*        <img className="w-7 h-7 rounded-full "*/}
            {/*             src="https://sun9-56.userapi.com/impg/3BZG-0t0fSKpY-Q6_Y6NyWwqe8hAgeowXuXEDQ/P2tURnFvRw0.jpg?size=725x677&quality=95&sign=009bcd00a8b1b87d1e6199e5fc17080e&type=album" alt=""/>*/}
            {/*        <img className="w-7 h-7 rounded-full "*/}
            {/*             src="https://sun9-56.userapi.com/impg/3BZG-0t0fSKpY-Q6_Y6NyWwqe8hAgeowXuXEDQ/P2tURnFvRw0.jpg?size=725x677&quality=95&sign=009bcd00a8b1b87d1e6199e5fc17080e&type=album" alt=""/>*/}
            {/*    </div>*/}
            {/*    <span className='text-gray-400 text-xs'>10 Nov 2021</span>*/}
            {/*</div>*/}

            <div className='flex flex-col justify-between items-start w-full space-y-1'>
                <span className='text-gray-700 text-lg'>Makers:</span>
                <div className='text-s, text-zinc-400'>
                    Avilio Bruno, Avilio Bruno.
                </div>
            </div>
        </div>
    );
};

export default Task;