import React, {useEffect, useRef, useState} from 'react';
import Tag from "../UI/Tag/Tag";
import {FiAlignLeft, FiClock, FiMoreVertical} from "react-icons/fi";
import TaskDropDown from "../TaskDropDown";
import Modal from "../Modal/Modal";
import DeleteTaskModal from "../Modal/BoardModals/DeleteTaskModal";
import UpdateTaskModal from "../Modal/BoardModals/UpdateTaskModal";
import TaskModal from "../Modal/BoardModals/TaskModal";

const Task = ({tags, title, makers, desc, id, refetch, columnId, columnTitle}) => {

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
        <DeleteTaskModal refetch={refetch} columnId={columnId} onClick={setModalOpen} taskId={id} title={title}/> :
        content === 'update-task' ?
            <UpdateTaskModal refetch={refetch} columnId={columnId} onClick={setModalOpen} taskId={id}
                             title={title} desc={desc} tags={tags}/> : content === 'open-task' ?
                <TaskModal refetch={refetch} columnId={columnId} onClick={setModalOpen} taskId={id}
                           title={title} desc={desc} tags={tags} columnTitle={columnTitle}/> : null

    const firstLetter = title.split(' ')[0]

    return (
        <>
            <div className='bg-white flex flex-col justify-between items-start w-full rounded-lg p-4 pb-3 shadow'>

                <Modal isOpen={isModalOpen} setOpen={setModal}>
                    {modalContent}
                </Modal>

                {tags.length !== 0 ? <>
                    <div className='flex flex-row items-center w-full pb-2'>
                        <div className="flex flex-1 h-auto flex-wrap">
                            {tags.map(tag => <Tag title={tag.title} color={tag.color} className={'mx-1 my-1'}/>)}
                        </div>
                        <div className='relative'>
                            <button ref={button} type="button"
                                    className="text-gray-600 hover:bg-gray-400 hover:text-white hover:bg-opacity-70 font-medium rounded-full p-2.5 mb-1 transition-colors ease-in-out duration-300">
                                <FiMoreVertical size={15}/>
                            </button>
                            <TaskDropDown state={isOpen} setOpen={setModal}/>
                        </div>
                    </div>
                    <div className='h-auto'>
                        <h1 className={`${firstLetter.length > 16 ? 'break-all' : 'break-words'} font-bold text-base pb-1`}>{title}</h1>
                    </div>
                </> : <div className='flex space-x-1 justify-between w-full'>
                    <div className='h-auto'>
                        <h1 className={`${firstLetter.length > 16 ? 'break-all' : 'break-words'} font-bold text-base pb-1`}>{title}</h1>
                    </div>
                    <div className='relative z-0'>
                        <button ref={button} type="button"
                                className="text-gray-600 hover:bg-gray-400 hover:text-white hover:bg-opacity-70 font-medium rounded-full p-2.5 mb-1 transition-colors ease-in-out duration-300">
                            <FiMoreVertical size={15}/>
                        </button>
                        <TaskDropDown state={isOpen} setOpen={setModal}/>
                    </div>
                </div>}

                <div className='pb-3 h-auto'>
                    <span className='text-gray-400 text-sm h-auto'>{desc}</span>
                </div>

                <div className='flex flex-row justify-between items-end w-full text-gray-400'>
                    <button>
                        <FiAlignLeft onClick={() => setModal('open-task')}/>
                    </button>

                    <div className='flex space-x-1 items-center'>
                        <FiClock/>
                        <span className='text-gray-400 text-xs'>10 Nov 2021</span>
                    </div>

                    <div className="flex -space-x-4">
                        <img className="w-7 h-7 rounded-full "
                             src="https://sun9-56.userapi.com/impg/3BZG-0t0fSKpY-Q6_Y6NyWwqe8hAgeowXuXEDQ/P2tURnFvRw0.jpg?size=725x677&quality=95&sign=009bcd00a8b1b87d1e6199e5fc17080e&type=album"
                             alt=""/>
                        <img className="w-7 h-7 rounded-full "
                             src="https://sun9-56.userapi.com/impg/3BZG-0t0fSKpY-Q6_Y6NyWwqe8hAgeowXuXEDQ/P2tURnFvRw0.jpg?size=725x677&quality=95&sign=009bcd00a8b1b87d1e6199e5fc17080e&type=album"
                             alt=""/>
                    </div>
                </div>

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
        </>
    );
};

export default Task;