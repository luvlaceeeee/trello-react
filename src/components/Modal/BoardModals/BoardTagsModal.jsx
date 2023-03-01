import React, {useState} from 'react';
import {useBoard, useUser} from "../../../store/store";
import {useParams} from "react-router-dom";
import {useMutation} from "@tanstack/react-query";
import {createBoardTag, updateBoardById} from "../../../API/Service";
import Tag from "../../UI/Tag/Tag";
import ButtonLoader from "../../UI/ButtonLoader";
import {FiX} from "react-icons/fi";

const BoardTagsModal = ({refetch}) => {
    const userId = useUser(state => state.userId)
    const {boardId} = useParams()

    const [isOpen, setOpen] = useState(false)
    const [tag, setTag] = useState({title: '', color: 0})

    const allTags = useBoard(state => state.tags)

    const mutation = useMutation(["create-board-tag", userId, boardId, tag.title, tag.color], () => createBoardTag(userId, boardId, tag.title, tag.color), {
        onSuccess: () => {
            setOpen(false)
            setTag({title: '', color: 0})
            refetch()
        }
    })

    const handleClick = () => {
        mutation.mutate()
    };

    return (
        <div className="relative mx-auto my-20 bg-white rounded-2xl shadow-2xl w-96">
            <div className="px-6 py-6 lg:px-8">
                <h3 className="mb-4 text-xl font-bold text-gray-900">Board tags</h3>
                <div className="space-y-6">
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900">
                            All tags </label>
                        <div className='flex flex-wrap'>
                            {allTags.map(tag => {
                                return <Tag color={tag.color} title={tag.title} className={'mx-1 my-1'} tagId={tag.id} deleted={true} refetch={refetch}/>
                            })}
                        </div>
                    </div>


                    <div className={`space-y-6 ${isOpen ? '' : 'hidden'}`}>
                        <div className={`${tag.title ? '' : 'hidden'} flex justify-between`}>
                            <Tag title={tag.title} color={tag.color}/>
                            <button onClick={() => {setOpen(false)}} className='text-zinc-500 mb-2 bg-zinc-100 rounded-full p-1'><FiX size={18}/></button>
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900"> Tag name </label>
                            <input type="text"
                                   value={tag.title}
                                   onChange={e => setTag({...tag, title: e.target.value})}
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                   placeholder="Name your tag" required/>
                        </div>

                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900"> Tag color </label>
                            <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" value={tag.color} onChange={(e) => {setTag({...tag, color: Number(e.target.value)})}}>
                                <option selected value="0" className='text-blue-600 font-medium'>Blue</option>
                                <option value="1" className='text-orange-600 font-medium'>Orange</option>
                                <option value="2" className='text-red-600 font-medium'>Red</option>
                                <option value="3" className='text-green-600 font-medium'>Green</option>
                                <option value="4" className='text-zinc-600 font-medium'>Black</option>
                            </select>
                        </div>

                        <button onClick={handleClick} className="w-full text-white bg-zinc-700 hover:bg-zinc-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                            {!mutation.isLoading ? 'Create tag' : <ButtonLoader/>}
                        </button>
                    </div>

                    <div className={`${isOpen ? 'hidden' : ''}`}>
                        <button onClick={() => setOpen(!isOpen)} className="w-full text-white bg-zinc-700 hover:bg-zinc-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                            Create new tag?
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BoardTagsModal;