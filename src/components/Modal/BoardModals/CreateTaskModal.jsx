import React, {useEffect, useRef, useState} from 'react';
import ButtonLoader from "../../UI/ButtonLoader";
import {useUser} from "../../../store/store";
import {useParams} from "react-router-dom";
import {useMutation} from "@tanstack/react-query";
import {createColumn, createTask, renameColumn} from "../../../API/Service";
import {FiPlus, FiX} from "react-icons/fi";
import Tag from "../../UI/Tag/Tag";
import {colors} from "../../../enum/colors";
import TagsTaskDropdown from "../../TagsTaskDropdown";

const CreateTaskModal = ({columnId, onClick, refetch}) => {
    const userId = useUser(state => state.userId)
    const {boardId} = useParams()

    const [isOpen, setIsOpen] = useState(false);
    const button = useRef(null);
    useEffect(() => window.addEventListener('click', ev => {
        if (button.current && button.current.contains(ev.target)) {
            setIsOpen(!isOpen)
        } else {
            setIsOpen(false)
        }
    }));

    const [content, setContent] = useState({text: '', description: ''})
    const [taskTags, setTaskTags] = useState([])
    // const [taskMembers, setTaskMembers] = useState([])

    const addTag = (tag) => {
        setTaskTags([...taskTags, tag])
    }
    const deleteTag = value => {
        setTaskTags(oldValues => {
            return oldValues.filter(tag => tag.title !== value)
        })
    }

    const mutation = useMutation(["create-task", userId, boardId, columnId, content.text, content.description, taskTags],
        () => createTask(userId, boardId, columnId, content.text, content.description, taskTags), {
            onSuccess: () => {
                onClick(false)
                refetch()
                setContent({text: '', description: ''})
                setTaskTags([])
            }
        })

    const handleClick = () => {
        mutation.mutate()
    };

    return (
        <div className="relative mx-auto my-20 bg-white rounded-2xl shadow-2xl w-96">
            <div className="px-6 py-6 lg:px-8">
                <h3 className="mb-4 text-xl font-bold text-gray-900">Create task</h3>
                <div className="space-y-6">
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900">
                            Task title </label>
                        <input type="text"
                               value={content.text}
                               onChange={e => setContent({...content, text: e.target.value})}
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                               placeholder="Name your task" required autoFocus={true}/>
                    </div>

                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900">
                            Task description </label>
                        <input type="text"
                               value={content.description}
                               onChange={e => setContent({...content, description: e.target.value})}
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                               placeholder="Task description" required/>
                    </div>

                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900">
                            Tags </label>
                        <div className='flex flex-wrap content-start items-center h-auto'>
                            {taskTags.map((tag, i) => {
                                return <div className='flex mx-1 my-1'>
                                    <Tag key={i} title={tag.title} color={tag.color} className={''}/>
                                    <button onClick={() => deleteTag(tag.title)} className='text-zinc-400 ml-1'><FiX size={15}/></button>
                                </div>
                            })}
                            <button ref={button} type="button"
                                    className="text-zinc-400 border border-zinc-400 hover:bg-zinc-400 hover:text-white font-medium rounded-full text-sm p-1.5 text-center inline-flex items-center mr-2">
                                <FiPlus size={12}/>
                            </button>
                        </div>
                        <TagsTaskDropdown state={isOpen} setTag={addTag}/>
                    </div>

                    {/*<div>*/}
                    {/*    <label className="block mb-2 text-sm font-medium text-gray-900">*/}
                    {/*        Members </label>*/}
                    {/*    <div className='flex items-center space-x-2'>*/}
                    {/*        /!*<span>Avilio Bruno</span>*!/*/}
                    {/*        <button type="button"*/}
                    {/*                className="text-zinc-400 border border-zinc-400 hover:bg-zinc-400 hover:text-white font-medium rounded-full text-sm p-1.5 text-center inline-flex items-center mr-2">*/}
                    {/*            <FiPlus size={12}/>*/}
                    {/*        </button>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    <button onClick={handleClick}
                            className="w-full text-white bg-zinc-700 hover:bg-zinc-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                        {!mutation.isLoading ? 'Create Task' : <ButtonLoader/>}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CreateTaskModal;