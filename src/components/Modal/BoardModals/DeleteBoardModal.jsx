import React from 'react';
import {useUser} from "../../../store/store";
import {redirect, useNavigate, useParams} from "react-router-dom";
import {useMutation} from "@tanstack/react-query";
import {createBoard, deleteBoardById} from "../../../API/Service";
import ButtonLoader from "../../UI/ButtonLoader";

const DeleteBoardModal = ({title, onClick}) => {
    const userId = useUser(state => state.userId)
    const {boardId} = useParams()
    const navigate = useNavigate()

    const mutation = useMutation(["delete-board", userId, boardId], () => deleteBoardById(userId, boardId), {
        onSuccess: () => {
            onClick()
            navigate('/space')
        }
    })

    const handleClick = () => {
        mutation.mutate()
    };


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
                    <div className='flex justify-around items-center space-x-2.5'>
                        <button onClick={handleClick} className="w-full text-white bg-green-300 hover:bg-green-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                            {!mutation.isLoading ? 'Yes' : <ButtonLoader/>}
                        </button>
                        <button onClick={onClick} className=" w-full text-white bg-red-300 hover:bg-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                            No
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteBoardModal;