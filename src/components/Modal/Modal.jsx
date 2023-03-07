import React from 'react';
import {FiX} from "react-icons/fi";

const Modal = ({children, isOpen, setOpen}) => {

    // const isOpen = useModal(state => state.isOpen)
    // const closeAddModal = useModal(state => state.setOpen)


    return (
        <div
            className={`${isOpen ? 'opacity-100' : 'opacity-0 hidden'}  fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-hidden md:inset-0 h-modal md:h-full backdrop-blur-sm`}>
            <div className="absolute w-full h-full top-0 right-0 left-0 bottom-0 bg-black bg-opacity-60"
                 onClick={setOpen}>
            </div>
            <button type="button"
                    className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                    onClick={setOpen}>
                <FiX size={35}/>
            </button>
            {children}
        </div>
    );
};

export default Modal;