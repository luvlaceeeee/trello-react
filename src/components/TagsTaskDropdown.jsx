import React from 'react';
import {FiEdit3, FiPlus, FiTrash2} from "react-icons/fi";
import {useBoard} from "../store/store";
import Tag from "./UI/Tag/Tag";
import {colors} from "../enum/colors";

const TagsTaskDropdown = ({state, setTag}) => {
    const boardTags = useBoard(state => state.tags)



    return (
        <div id="dropdownDots" className={`${state ? '' : 'hidden'} z-10 absolute bg-white divide-y divide-zinc-800 rounded-lg shadow-2xl w-auto border`}>
            <ul className="py-3 px-3 text-sm text-gray-700">
                <div className='flex flex-col space-y-2'>
                {boardTags.map((tag, i) => {
                    return <button key={i} onClick={() => setTag(tag)}> <li>
                        <Tag title={tag.title} color={tag.color}/>
                    </li> </button>
                })}
                </div>

                {/*<li>*/}
                {/*    <div className='flex items-center block px-4 py-2 hover:bg-gray-100'>*/}
                {/*        <FiEdit3/>*/}
                {/*        <button className="px-2 hover:bg-gray-100">Rename column</button>*/}
                {/*    </div>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <div className='flex items-center block px-4 py-2 hover:bg-gray-100'>*/}
                {/*        <FiPlus/>*/}
                {/*        <button className="px-2 hover:bg-gray-100">Add task</button>*/}
                {/*    </div>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <div className='flex items-center block px-4 py-2 hover:bg-gray-100'>*/}
                {/*        <FiTrash2/>*/}
                {/*        <button className="px-2 hover:bg-gray-100">Delete column</button>*/}
                {/*    </div>*/}
                {/*</li>*/}
            </ul>
            {/*<div className="py-2">*/}
            {/*    <div className='flex items-center block px-4 py-2 hover:bg-gray-100'>*/}
            {/*        <FiPlus/>*/}
            {/*        <button className="px-2 hover:bg-gray-100">Create tag</button>*/}
            {/*    </div>*/}
            {/*    /!*<a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ">Create tag</a>*!/*/}
            {/*</div>*/}
        </div>
    );
};

export default TagsTaskDropdown;