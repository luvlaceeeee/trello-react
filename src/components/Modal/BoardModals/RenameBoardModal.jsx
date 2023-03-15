import React, {useState} from 'react';
import {useSpaceModal} from "../../../store/uiStore";
import {useUser} from "../../../store/store";
import {useNavigate, useParams} from "react-router-dom";
import {useMutation} from "@tanstack/react-query";
import {deleteBoardById, updateBoardById} from "../../../API/Service";
import ButtonLoader from "../../UI/ButtonLoader";

const RenameBoardModal = ({refetch, onClick, title}) => {
    const [name, setName] = useState({title: title})
    const userId = useUser(state => state.id)
    const {boardId} = useParams()

    const mutation = useMutation(["rename-board", userId, boardId, name.title], () => updateBoardById(userId, boardId, name.title), {
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
                <h3 className="mb-4 text-xl font-bold text-gray-900">Rename board</h3>
                <div className="space-y-6">
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900">
                            Board name </label>
                        <input type="text"
                               value={name.title}
                               onChange={e => setName({...name, title: e.target.value})}
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                               placeholder="Name your board" required autoFocus={true}/>
                    </div>

                    <button onClick={handleClick} className="w-full text-white bg-zinc-700 hover:bg-zinc-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                        {!mutation.isLoading ? 'Rename board' : <ButtonLoader/>}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RenameBoardModal;