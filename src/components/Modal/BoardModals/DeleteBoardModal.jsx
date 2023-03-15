import React from 'react';
import {useUser} from "../../../store/store";
import {useNavigate, useParams} from "react-router-dom";
import {useMutation} from "@tanstack/react-query";
import {deleteBoardById} from "../../../API/Service";
import ButtonLoader from "../../UI/ButtonLoader";

const DeleteBoardModal = ({title, onClick}) => {
    const userId = useUser(state => state.id)
    const {boardId} = useParams()
    const navigate = useNavigate()

    const mutation = useMutation(["delete-board", userId, boardId], () => deleteBoardById(userId, boardId), {
        onSuccess: () => {
            onClick()
            navigate('/space')
        }
    })


    return (
        <div className="relative mx-auto my-20 bg-white rounded-2xl shadow-2xl w-96">
            <div className="px-6 py-6 lg:px-8">
                <h3 className="text-xl font-bold text-gray-900">Delete board</h3>
                <div className="space-y-6">
                    <div>
                        <label className="block mb-2 text-lg text-gray-900">
                            You want to delete {title} board?
                        </label>
                    </div>
                    <div className='flex justify-between'>
                        <span className='block text-sm font-light text-red-400 w-32 break-words'>Note! All data will be cleared without the possibility of recovery</span>
                        <div className='flex justify-end items-center space-x-2.5'>
                            <button onClick={() => mutation.mutate()}
                                    className="text-zinc-900 bg-white border-2 border-zinc-900 hover:border-green-200 hover:bg-green-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-colors duration-300">
                                {!mutation.isLoading ? 'Yes' : <ButtonLoader/>}
                            </button>
                            <button onClick={onClick}
                                    className="text-white border-2 border-zinc-900 hover:border-red-700 bg-zinc-900 hover:bg-red-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-colors duration-300">
                                No
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteBoardModal;