import React, {useState} from 'react';
import IconButton from "../UI/IconButton/IconButton";
import { FiCodesandbox, FiPlus, FiMoreVertical } from "react-icons/fi";
import Modal from "../Modal/Modal";
import {useAddModal} from "../../store/store";
import AddBoardModal from "../Modal/AddBoardModal";


const AddBoardColumn = ({title}) => {
    const closeAddModal = useAddModal(state => state.setOpen)
    const isOpen = useAddModal(state => state.isOpen)

    // const [isOpen, setOpen] = useState(false)
    //
    // const closeAddModal = () => {
    //     setOpen(!isOpen)
    // }

    return (
        <div>
            <Modal isOpen={isOpen} setOpen={closeAddModal}>
                <AddBoardModal/>
            </Modal>
            <button onClick={closeAddModal}>
                <div className=' text-zinc-400 bg-zinc-200 flex flex-col border-2 text-center justify-center items-center w-72 h-36 rounded-lg p-4 pb-4 shadow-lg hover:border-zinc-300 hover:bg-zinc-300 transition-colors ease-in-out duration-300'>
                        <FiPlus size={30}/>
                        <span className='font-medium text-2xl'>{title}</span>
                </div>
            </button>
        </div>
    );
};

export default AddBoardColumn;