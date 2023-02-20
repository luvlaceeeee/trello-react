import React from 'react';
import {useAddModal, useSpace} from "../../store/store";

const ButtonsGroupHeader = () => {
    const openAddModal = useAddModal(state => state.setOpen)
    const boards = useSpace(state => state.boards)

    return (
        <div className={`${boards.length > 4 ? '' : 'hidden'} inline-flex rounded-xl shadow`} role="group">
            <button type="button"
                    onClick={openAddModal}
                    className="px-4 py-2 text-lg font-medium text-white bg-zinc-900 transition-colors ease-in-out duration-300 border-2 border-zinc-900 rounded-2xl hover:bg-white hover:text-zinc-900">
                Create board
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

export default ButtonsGroupHeader;