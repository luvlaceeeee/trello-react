import React, {useState} from 'react';
import ColumnHeader from "../Column/ColumnHeader";
import {colors} from "../../enum/colors";
import Task from "../Column/Task";
import ButtonsGroupHeader from "./ButtonsGroupHeader";
import {Link} from "react-router-dom";
import Modal from "../Modal/Modal";
import {useBoardModal, useSpaceModal} from "../../store/uiStore";
import RenameBoardModal from "../Modal/RenameBoardModal";
import DeleteBoardModal from "../Modal/DeleteBoardModal";

const BoardColumn = ({title, id}) => {
    // const setOpen = useSpaceModal(state => state.setOpen)
    //
    // const openDeleteBoard = () => {
    //     setOpen('delete', title, id)
    // }
    //
    // const openRenameBoard = () => {
    //     setOpen('rename', title, id)
    // }

    return (
        <div className='flex flex-col'>
            <Link to={`/board/${id}`}>
                <button>
                    <div className='bg-zinc-100 flex flex-col border-2 border-b-0 text-zinc-700 text-center justify-center items-center w-72 h-36 rounded-t-lg p-4 pb-4 shadow-lg space-y-4 hover:border-zinc-300 hover:bg-zinc-300 transition-colors ease-in-out duration-300'>
                        <span className='font-medium text-2xl'>{title}</span>
                    </div>
                </button>
            </Link>

            {/*<div className="inline-flex rounded-md shadow-sm" role="group">*/}
            {/*    <button type="button"*/}
            {/*            onClick={openDeleteBoard}*/}
            {/*            className="w-full px-4 py-2 text-sm font-medium text-gray-900 bg-zinc-100 border border-r-0 border-gray-200 rounded-b-2xl rounded-r-none hover:bg-red-100 hover:text-red-700">*/}
            {/*        Delete*/}
            {/*    </button>*/}
            {/*    /!*<button type="button"*!/*/}
            {/*    /!*        className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700">*!/*/}
            {/*    /!*    Settings*!/*/}
            {/*    /!*</button>*!/*/}
            {/*    <button type="button"*/}
            {/*            onClick={openRenameBoard}*/}
            {/*            className="w-full px-4 py-2 text-sm font-medium text-gray-900 bg-zinc-100 border border-gray-200 rounded-r-2xl rounded-t-none hover:bg-blue-100 hover:text-blue-700">*/}
            {/*        Rename*/}
            {/*    </button>*/}
            {/*</div>*/}
        </div>
    );
};

export default BoardColumn;