import React from 'react';
import IconButton from "../UI/IconButton/IconButton";
import {FiChevronDown} from "react-icons/fi";
import {useSpace} from "../../store/store";
import Dropdown from "../Dropdown";
import ButtonsGroupHeader from "./ButtonsGroupHeader";

const SpaceHeader = () => {
    const boards = useSpace(state => state.boards)
    return (
        <div className='p-2 flex flex-row justify-between items-center'>
            <div className='space-y-1'>
                <div className='inline-flex space-x-2'>
                    <h1 className='font-bold text-2xl'>Your boards</h1>
                    {/*<IconButton icon={<FiChevronDown/>}/>*/}
                </div>
                <div className='text-zinc-400'>
                    <span>{boards.length} Running Projects</span>
                </div>
            </div>
            <ButtonsGroupHeader/>
        </div>
    );
};

export default SpaceHeader;