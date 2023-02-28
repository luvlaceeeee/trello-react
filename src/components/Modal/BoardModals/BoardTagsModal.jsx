import React from 'react';
import {useBoard, useUser} from "../../../store/store";
import {useParams} from "react-router-dom";
import ButtonLoader from "../../UI/ButtonLoader";
import {useMutation} from "@tanstack/react-query";
import {updateBoardById} from "../../../API/Service";
import Tag from "../../UI/Tag/Tag";

const BoardTagsModal = ({onClick, refetch}) => {
    const userId = useUser(state => state.userId)
    const {boardId} = useParams()

    const allTags = useBoard(state => state.tags)

    const mutation = useMutation(["rename-board", userId, boardId], () => updateBoardById(userId, boardId), {
        onSuccess: () => {
            onClick()
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
                                return <Tag color={tag.color} title={tag.title} className={'mx-1 my-1'}/>
                            })}
                        </div>

                        {/*<input type="text"*/}
                        {/*       value={name.title}*/}
                        {/*       onChange={e => setName({...name, title: e.target.value})}*/}
                        {/*       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"*/}
                        {/*       placeholder="Name your board" required/>*/}
                    </div>

                    <button className="w-full text-white bg-zinc-700 hover:bg-zinc-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                        {/*{!mutation.isLoading ? 'Rename board' : <ButtonLoader/>}*/}
                        Create new tag?
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BoardTagsModal;