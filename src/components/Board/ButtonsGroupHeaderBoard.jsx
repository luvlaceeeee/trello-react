import React from 'react';
import {useBoardModal} from "../../store/uiStore";

const ButtonsGroupHeaderBoard = () => {
    const setOpen = useBoardModal(state => state.setOpen)

    return (
        <div className='inline-flex rounded-xl shadow' role="group">
            <button type="button"
                    onClick={() => setOpen('rename')}
                    className="px-4 py-2 text-lg font-medium text-white bg-zinc-900 transition-colors ease-in-out duration-300 border-2 border-zinc-900 rounded-l-2xl hover:bg-white hover:text-zinc-900">
                Rename board
            </button>
            {/*<button type="button"*/}
            {/*        onClick={openAddUser}*/}
            {/*        className="px-4 py-2 text-lg font-medium text-white bg-zinc-900 transition-colors ease-in-out duration-300 border-2 border-zinc-900 hover:bg-white hover:text-zinc-900">*/}
            {/*    Add user*/}
            {/*</button>*/}
            <button type="button"
                    onClick={() => setOpen('addColumn')}
                    className="px-4 py-2 text-lg font-medium text-white bg-zinc-900 transition-colors ease-in-out duration-300 border-2 border-zinc-900 hover:bg-white hover:text-zinc-900">
                Add column
            </button>
            <button type="button"
                    onClick={() => setOpen('boardTags')}
                    className="px-4 py-2 text-lg font-medium text-white bg-zinc-900 transition-colors ease-in-out duration-300 border-2 border-zinc-900 hover:bg-white hover:text-zinc-900">
                Board tags
            </button>
            <button type="button"
                    onClick={() => setOpen('delete')}
                    className="px-4 py-2 text-lg font-medium text-white bg-zinc-900 transition-colors ease-in-out duration-300 border-2 border-zinc-900 rounded-r-2xl hover:bg-white hover:text-zinc-900">
                Delete board
            </button>

        </div>
    );
};

export default ButtonsGroupHeaderBoard;