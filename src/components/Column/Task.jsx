import React, {useEffect, useRef, useState} from 'react';
import Tag from "../UI/Tag/Tag";
import {colors} from "../../enum/colors";
import {FiMoreVertical} from "react-icons/fi";
import TaskDropDown from "../TaskDropDown";
import RenameColumnModal from "../Modal/BoardModals/RenameColumnModal";
import DeleteColumnModal from "../Modal/BoardModals/DeleteColumnModal";
import CreateTaskModal from "../Modal/BoardModals/CreateTaskModal";
import Modal from "../Modal/Modal";
import DeleteTaskModal from "../Modal/BoardModals/DeleteTaskModal";

const Task = ({tags, title, makers, desc, id, refetch, columnId}) => {

    const [isOpen, setIsOpen] = useState(false);
    const button = useRef(null);
    useEffect(() => window.addEventListener('click', ev => {
        if (button.current && button.current.contains(ev.target)) {
            setIsOpen(!isOpen)
        } else {
            setIsOpen(false)
        }
    }));

    const [isModalOpen, setModalOpen] = useState(false)
    const [content, setContent] = useState('')

    const setModal = (content) => {
        setModalOpen(!isModalOpen)
        setContent(content)
    }

    const modalContent = content === 'delete-task' ?
        <DeleteTaskModal refetch={refetch} columnId={columnId} onClick={setModalOpen} taskId={id}
                           title={title}/> : content === 'update-task' ?
            <DeleteColumnModal refetch={refetch} onClick={setModalOpen} columnId={id}
                               title={title}/> : null

    return (
        <div className='bg-white flex flex-col justify-between items-start w-full rounded-lg p-4 pb-3 shadow'>

            <Modal isOpen={isModalOpen} setOpen={setModal}>
                {modalContent}
            </Modal>

            <div className='flex flex-row items-center w-full pb-2'>
                <div className="flex flex-1 h-auto flex-wrap">
                    {tags.map(tag => <Tag title={tag.title} color={tag.color} className={'mx-1 my-1'}/> )}
                </div>
                <div>
                    <button ref={button} type="button" className="text-gray-600 hover:bg-gray-400 hover:text-white hover:bg-opacity-70 font-medium rounded-full p-2.5 mb-1 transition-colors ease-in-out duration-300">
                        <FiMoreVertical size={15}/>
                    </button>

                    <TaskDropDown state={isOpen} setOpen={setModal}/>
                </div>
            </div>

            <div className='h-auto'>
                <h1 className='font-bold text-xl pb-1'>{title}</h1>
            </div>

            <div className='pb-3 h-auto'>
                <span className='text-gray-400 text-sm h-auto'>{desc}</span>
            </div>

            {/*<div className='flex flex-row justify-between items-end w-full'>*/}
            {/*    <div className="flex -space-x-4">*/}
            {/*        <img className="w-7 h-7 rounded-full "*/}
            {/*             src="https://sun9-56.userapi.com/impg/3BZG-0t0fSKpY-Q6_Y6NyWwqe8hAgeowXuXEDQ/P2tURnFvRw0.jpg?size=725x677&quality=95&sign=009bcd00a8b1b87d1e6199e5fc17080e&type=album" alt=""/>*/}
            {/*        <img className="w-7 h-7 rounded-full "*/}
            {/*             src="https://sun9-56.userapi.com/impg/3BZG-0t0fSKpY-Q6_Y6NyWwqe8hAgeowXuXEDQ/P2tURnFvRw0.jpg?size=725x677&quality=95&sign=009bcd00a8b1b87d1e6199e5fc17080e&type=album" alt=""/>*/}
            {/*    </div>*/}
            {/*    <span className='text-gray-400 text-xs'>10 Nov 2021</span>*/}
            {/*</div>*/}

            {/*<div className='flex flex-col justify-between items-start w-full space-y-0.5'>*/}
            {/*    <span className='text-gray-700 text-lg'>Makers:</span>*/}
            {/*    <div className='text-s, text-zinc-400'>*/}
            {/*        {makers.name.map((maker, i) => {*/}
            {/*            if (i !== makers.length - 1){*/}
            {/*                return  maker + ', '*/}
            {/*            } else {*/}
            {/*                return maker*/}
            {/*            }*/}
            {/*        })}*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
};

export default Task;