import React, {useState} from 'react';
import IconButton from "../UI/IconButton/IconButton";
import { FiCodesandbox, FiPlus, FiMoreVertical } from "react-icons/fi";
import Modal from "../Modal/Modal";
import {useModal} from "../../store/store";
import AddModal from "./AddModal";


const AddColumn = ({title}) => {
    // const openAddModal = useModal(state => state.setOpen)

    const [isOpen, setOpen] = useState(false)

    const closeAddModal = () => {
        setOpen(!isOpen)
    }

    return (
        <div>
            <Modal isOpen={isOpen} setOpen={closeAddModal}>
                <AddModal/>
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

export default AddColumn;