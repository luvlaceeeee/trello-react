import React, {useState} from 'react';
import {useBoard, useUser} from "../../../store/store";
import {useParams} from "react-router-dom";
import {useMutation} from "@tanstack/react-query";
import {createBoardTag, deleteBoardTag, updateBoardById, updateBoardTag} from "../../../API/Service";
import Tag from "../../UI/Tag/Tag";
import ButtonLoader from "../../UI/ButtonLoader";
import {FiEdit, FiX} from "react-icons/fi";

const BoardTagsModal = ({refetch}) => {
    const userId = useUser(state => state.id)
    const {boardId} = useParams()
    const allTags = useBoard(state => state.tags).sort((a, b) => a.title.localeCompare(b.title))

    const [isOpenCreate, setOpenCreate] = useState(false)
    const [isOpenUpdate, setOpenUpdate] = useState(false)

    const [valid, setValid] = useState(false)

    const [tagCreate, setTagCreate] = useState({title: '', color: 0})
    const [tagUpdate, setTagUpdate] = useState({tagId: 0, title: '', color: 0})

    const mutationCreate = useMutation(["create-board-tag", userId, boardId, tagCreate.title, tagCreate.color], () => createBoardTag(userId, boardId, tagCreate.title, tagCreate.color), {
        onSuccess: () => {
            setOpenCreate(false)
            setTagCreate({title: '', color: 0})
            refetch()
        }
    })

    const mutationUpdate = useMutation(["update-board-tag", userId, boardId, tagUpdate.tagId, tagUpdate.title, tagUpdate.color], () => updateBoardTag(userId, boardId, tagUpdate.tagId, tagUpdate.title, tagUpdate.color), {
        onSuccess: () => {
            setOpenUpdate(false)
            setTagUpdate({tagId: 0, title: '', color: 0})
            refetch()
        }
    })

    const mutationDelete = useMutation(["delete-board-tag"], (tagId) => deleteBoardTag(userId, boardId, tagId), {
        onSuccess: () => {
            refetch()
        }
    })

    return (
        <div className="relative mx-auto my-20 bg-white rounded-2xl shadow-2xl w-96">
            <div className="px-6 py-6 lg:px-8">
                <h3 className="mb-4 text-xl font-bold text-gray-900">Board tags</h3>
                <div className="space-y-6">
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900">
                            All tags </label>
                        <div className='scrollbar flex flex-col h-40 overflow-y-auto overflow-x-hidden'>
                            {allTags.length === 0 ?
                                <span className='font-light text-sm text-zinc-400'>No tags</span> : allTags.map(tag => {
                                    return <div>
                                        <div className={'flex items-center justify-between'}>
                                            <Tag color={tag.color} title={tag.title} className={'mx-1 my-2'}
                                                 tagId={tag.id}/>
                                            <div>
                                                <button className='text-zinc-400 mx-1' onClick={() => {
                                                    setOpenCreate(false)
                                                    setOpenUpdate(true)
                                                    setTagUpdate({tagId: tag.id, title: tag.title, color: tag.color})
                                                }}>
                                                    <FiEdit/>
                                                </button>
                                                {mutationDelete.isLoading ? <ButtonLoader/> :
                                                    <button onClick={() => mutationDelete.mutate(tag.id)}
                                                            className='text-zinc-400'><FiX size={15}/></button>}
                                            </div>
                                        </div>
                                        <hr/>
                                    </div>
                                })}
                        </div>
                    </div>

                    <div className={`space-y-6 ${isOpenCreate ? '' : 'hidden'}`}>
                        <div className={`flex ${tagCreate.title ? 'justify-between' : 'justify-end'} w-full`}>
                            <div className={`${tagCreate.title ? '' : 'hidden'}`}>
                                <Tag title={tagCreate.title} color={tagCreate.color}/>
                            </div>
                            <button onClick={() => {
                                setOpenCreate(false)
                            }} className='text-zinc-500 mb-2 bg-zinc-100 rounded-full p-1'><FiX size={18}/></button>
                        </div>

                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900"> Tag name </label>
                            <input type="text"
                                   value={tagCreate.title}
                                   onChange={e => {
                                       setTagCreate({...tagCreate, title: e.target.value})
                                       setValid(false)
                                   }}
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                   placeholder="Name your tag" required/>
                            {valid ? <p id="outlined_error_help"
                                        className="mt-2 text-xs text-red-600 dark:text-red-400"><span
                                className="font-medium">Oh, snapp!</span> This tag already created.</p> : ''}

                        </div>

                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900"> Tag color </label>
                            <select id="countries"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                    value={tagCreate.color} onChange={(e) => {
                                setTagCreate({...tagCreate, color: Number(e.target.value)})
                            }}>
                                <option selected value="0" className='text-blue-600 font-medium'>Blue</option>
                                <option value="1" className='text-orange-600 font-medium'>Orange</option>
                                <option value="2" className='text-red-600 font-medium'>Red</option>
                                <option value="3" className='text-green-600 font-medium'>Green</option>
                                <option value="4" className='text-zinc-600 font-medium'>Black</option>
                            </select>
                        </div>

                        <button onClick={() => {
                            if (allTags.find(item => item.title.toLowerCase() === tagCreate.title.toLowerCase())) {
                                setValid(true)
                            } else {
                                mutationCreate.mutate()
                            }
                        }}
                                className="w-full text-white bg-zinc-700 hover:bg-zinc-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                            {!mutationCreate.isLoading ? 'Create tag' : <ButtonLoader/>}
                        </button>
                    </div>

                    <div className={`${isOpenCreate ? 'hidden' : ''}`}>
                        <button onClick={() => {
                            setOpenCreate(true)
                            setOpenUpdate(false)
                        }}
                                className="w-full text-white bg-zinc-700 hover:bg-zinc-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                            Create new tag?
                        </button>
                    </div>

                    <div className={`space-y-6 ${isOpenUpdate ? '' : 'hidden'}`}>
                        <div className={`flex ${tagUpdate.title ? 'justify-between' : 'justify-end'} w-full`}>
                            <div className={`${tagUpdate.title ? '' : 'hidden'}`}>
                                <Tag title={tagUpdate.title} color={tagUpdate.color}/>
                            </div>
                            <button onClick={() => {
                                setOpenUpdate(false)
                            }} className='text-zinc-500 mb-2 bg-zinc-100 rounded-full p-1'><FiX size={18}/></button>
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900"> Tag name </label>
                            <input type="text"
                                   value={tagUpdate.title}
                                   onChange={e => setTagUpdate({...tagUpdate, title: e.target.value})}
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                   placeholder="Name your tag" required/>
                        </div>

                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900"> Tag color </label>
                            <select id="countries"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                    value={tagUpdate.color.toString()} onChange={(e) => {
                                setTagUpdate({...tagUpdate, color: Number(e.target.value)})
                            }}>
                                <option selected value="0" className='text-blue-600 font-medium'>Blue</option>
                                <option value="1" className='text-orange-600 font-medium'>Orange</option>
                                <option value="2" className='text-red-600 font-medium'>Red</option>
                                <option value="3" className='text-green-600 font-medium'>Green</option>
                                <option value="4" className='text-zinc-600 font-medium'>Black</option>
                            </select>
                        </div>

                        <button onClick={() => mutationUpdate.mutate()}
                                className="w-full text-white bg-zinc-700 hover:bg-zinc-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                            {!mutationUpdate.isLoading ? 'Update tag' : <ButtonLoader/>}
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BoardTagsModal;