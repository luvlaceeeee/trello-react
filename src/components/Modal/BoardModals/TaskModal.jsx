import React from 'react';
import {useUser} from "../../../store/store";
import {useParams} from "react-router-dom";
import {FiAlignLeft, FiHash, FiMessageSquare, FiPlus, FiX} from "react-icons/fi";
import Tag from "../../UI/Tag/Tag";
import ButtonLoader from "../../UI/ButtonLoader";

const TaskModal = ({title, tags, columnId, taskId, refetch, desc, columnTitle}) => {
    const userId = useUser(state => state.userId)
    const {boardId} = useParams()

    return (
        <div className="relative mx-auto my-20 bg-white rounded-2xl shadow-2xl max-w-2xl">
            <div className="px-8 py-8">
                <div className='mb-10'>
                    <div className='mb-1 flex items-center'>
                        <FiHash size={20} className='mr-2'/>
                        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
                    </div>

                    <div className='px-7'>
                        <div className='mb-4 flex items-center'>
                        <span className='text-sm text-zinc-400'>In column <span
                            className='underline decoration-2'>{columnTitle}</span></span>
                        </div>
                        <div className='mb-1'><span className='uppercase text-sm font-bold'>Tags</span></div>
                        <div className='flex flex-wrap content-start items-center h-auto'>
                            {tags.map((tag, i) => {
                                return <div className='flex'>
                                    <Tag key={i} title={tag.title} color={tag.color} className={'mr-1'}/>
                                </div>
                            })}
                        </div>
                    </div>
                </div>

                <div className='mb-10'>
                    <div className='mb-1 flex items-center'>
                        <FiAlignLeft size={20} className='mr-2'/>
                        <h3 className="text-lg font-bold text-gray-900">Description</h3>
                    </div>
                    <div className='px-7 break-all'>
                        <span>{desc}</span>
                    </div>
                </div>

                <div className='mb-3 flex items-center'>
                    <FiMessageSquare size={20} className='mr-2'/>
                    <h3 className="text-lg font-bold text-gray-900">Comments</h3>
                </div>

                <form className='px-7'>
                    <div className="w-full mb-4 border-2 border-gray-200 rounded-lg bg-gray-50">
                        <div className="px-4 py-2 bg-white rounded-t-lg">
                            <textarea id="comment" rows="4"
                                      className="w-full px-0 text-sm text-gray-900 bg-white border-0"
                                      placeholder="Write a comment..." required></textarea>
                        </div>
                        <div className="flex items-center justify-between px-3 py-2 border-t">
                            <button type="submit" className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-zinc-700 rounded-lg hover:bg-zinc-800">
                                Post comment
                            </button>
                        </div>
                    </div>
                </form>

                {/*<div className="space-y-6">*/}
                {/*    <div>*/}
                {/*        <label className="block mb-2 text-sm font-medium text-gray-900">*/}
                {/*            Task title </label>*/}
                {/*        <input type="text"*/}
                {/*               // value={content.text}*/}
                {/*               // onChange={e => setContent({...content, text: e.target.value})}*/}
                {/*               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"*/}
                {/*               placeholder="Name your task" required/>*/}
                {/*    </div>*/}

                {/*    <div>*/}
                {/*        <label className="block mb-2 text-sm font-medium text-gray-900">*/}
                {/*            Task description </label>*/}
                {/*        <input type="text"*/}
                {/*               // value={content.description}*/}
                {/*               // onChange={e => setContent({...content, description: e.target.value})}*/}
                {/*               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"*/}
                {/*               placeholder="Task description" required/>*/}
                {/*    </div>*/}

                {/*    <button*/}
                {/*            className="w-full text-white bg-zinc-700 hover:bg-zinc-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center">*/}
                {/*        'Update Task'*/}
                {/*        /!*{!mutationText.isLoading ? 'Update Task' : <ButtonLoader/>}*!/*/}
                {/*    </button>*/}

                {/*<div>*/}
                {/*    <label className="block mb-2 text-sm font-medium text-gray-900"> Tags </label>*/}

                {/*    <div className='flex flex-wrap content-start items-center h-auto'>*/}

                {/*        {taskTags.map((tag, i) => {*/}
                {/*            return <div className='flex mx-1 my-1'>*/}
                {/*                <Tag key={i} title={tag.title} color={tag.color} className={''}/>*/}
                {/*                {mutationDeleteTag.isLoading ? <ButtonLoader/> : <button onClick={() => {*/}
                {/*                    setTag({title: tag.title, id: tag.id})*/}
                {/*                    setTimeout(() => mutationDeleteTag.mutate(), 0)*/}
                {/*                }} className='text-zinc-400 ml-1'><FiX size={15}/></button>}*/}
                {/*            </div>*/}
                {/*        })}*/}

                {/*        <button ref={button} type="button"*/}
                {/*                className="text-zinc-400 border border-zinc-400 hover:bg-zinc-400 hover:text-white font-medium rounded-full text-sm p-1.5 text-center inline-flex items-center mr-2">*/}
                {/*            <FiPlus size={12}/>*/}
                {/*        </button>*/}
                {/*    </div>*/}

                {/*    <TagsTaskDropdown state={isOpen} setTag={addTag}/>*/}
                {/*</div>*/}

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
                {/*</div>*/}
            </div>
        </div>
    );
};

export default TaskModal;