import React from 'react';
import {useAddModal} from "../store/store";
import { FiX } from "react-icons/fi";

const Modal = () => {
    const isOpen = useAddModal(state => state.isOpen)
    const closeAddModal = useAddModal(state => state.setOpen)
    return (
        <div tabIndex="-1" aria-hidden="true"
             className={`${isOpen ? '' : 'hidden'} fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full`}>
            <div className="relative w-full h-full max-w-md md:h-auto">
                <div className="relative bg-white rounded-2xl shadow-2xl">

                    <button type="button"
                            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                            onClick={closeAddModal}>
                        <FiX size={20}/>
                    </button>

                    <div className="px-6 py-6 lg:px-8">
                        <h3 className="mb-4 text-xl font-bold text-gray-900">Create new board</h3>
                        <form className="space-y-6" action="#">
                            <div>
                                <label htmlFor="email"
                                       className="block mb-2 text-sm font-medium text-gray-900">
                                    Board name </label>
                                <input type="email" name="email" id="email"
                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                       placeholder="Name your board" required/>
                            </div>
                            {/*<div>*/}
                            {/*    <label htmlFor="password"*/}
                            {/*           className="block mb-2 text-sm font-medium text-gray-900">*/}
                            {/*        Your password </label>*/}
                            {/*    <input type="password" name="password" id="password" placeholder="••••••••"*/}
                            {/*           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"*/}
                            {/*           required/>*/}
                            {/*</div>*/}
                            <button type="submit"
                                    className="w-full text-white bg-zinc-700 hover:bg-zinc-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                Create board
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            {/*<div className='bg-zinc-900 bg-opacity-70 h-screen w-screen absolute top-0 left-0 right-0 bottom-0 z-60'></div>*/}
        </div>
    );
};

export default Modal;