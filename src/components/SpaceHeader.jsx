import React from 'react';
import IconButton from "./UI/IconButton/IconButton";
import {FiChevronDown} from "react-icons/fi";
import {useSpace} from "../store/store";

const SpaceHeader = () => {
    const boards = useSpace(state => state.boards)
    return (
        <div className='p-2 inline-flex items-center space-x-2'>
            <div>
                <div className='inline-flex space-x-2'>
                    <h1 className='font-bold text-2xl'>Your boards</h1>
                    <IconButton icon={<FiChevronDown/>}/>
                </div>

                <div className='text-zinc-400'>
                    <span>{boards.length} Running Projects</span>
                </div>
            </div>
        </div>
    );
};

export default SpaceHeader;