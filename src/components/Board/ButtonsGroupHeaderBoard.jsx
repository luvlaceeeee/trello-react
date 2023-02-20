import React from 'react';
import {useBoardModal} from "../../store/store";

const ButtonsGroupHeaderBoard = () => {
    const setOpen = useBoardModal(state => state.setOpen)

    const openDeleteBoard = () => {
        setOpen('delete')
    }

    const openAddColumn = () => {
        setOpen('addColumn')
    }

    const openRename = () => {
        setOpen('rename')
    }

    const openAddUser = () => {
        setOpen('addUser')
    }

    return (
        <div className='inline-flex rounded-xl shadow' role="group">
            <button type="button"
                    onClick={openRename}
                    className="px-4 py-2 text-lg font-medium text-white bg-zinc-900 transition-colors ease-in-out duration-300 border-2 border-zinc-900 rounded-l-2xl hover:bg-white hover:text-zinc-900">
                Rename board
            </button>
            {/*<button type="button"*/}
            {/*        onClick={openAddUser}*/}
            {/*        className="px-4 py-2 text-lg font-medium text-white bg-zinc-900 transition-colors ease-in-out duration-300 border-2 border-zinc-900 hover:bg-white hover:text-zinc-900">*/}
            {/*    Add user*/}
            {/*</button>*/}
            <button type="button"
                    onClick={openAddColumn}
                    className="px-4 py-2 text-lg font-medium text-white bg-zinc-900 transition-colors ease-in-out duration-300 border-2 border-zinc-900 hover:bg-white hover:text-zinc-900">
                Add column
            </button>
            <button type="button"
                    onClick={openDeleteBoard}
                    className="px-4 py-2 text-lg font-medium text-white bg-zinc-900 transition-colors ease-in-out duration-300 border-2 border-zinc-900 rounded-r-2xl hover:bg-white hover:text-zinc-900">
                Delete board
            </button>

            {/*<button type="button"*/}
            {/*        className="px-4 py-2 text-lg font-medium text-white bg-zinc-900 transition-colors ease-in-out duration-300 border-t-2 border-b-2 border-gray-900 hover:bg-white hover:text-zinc-900">*/}
            {/*    Delete board*/}
            {/*</button>*/}
            {/*<button type="button"*/}
            {/*        className="px-4 py-2 text-lg font-medium text-white bg-zinc-900 transition-colors ease-in-out duration-300 border-2 rounded-r-2xl border-gray-900 hover:bg-white hover:text-zinc-900">*/}
            {/*    Rename board*/}
            {/*</button>*/}
        </div>
    );
};

export default ButtonsGroupHeaderBoard;