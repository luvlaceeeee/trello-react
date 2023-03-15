import React, {useState} from 'react';
import {FiX} from "react-icons/fi";
import {useBoard, useSpace, useUser} from "../../../store/store";
import {useMutation, useQuery} from "@tanstack/react-query";
import {createBoard, getAllBoards} from "../../../API/Service";
import LoadingScreen from "../../UI/LoadingScreen";
import {useSpaceModal} from "../../../store/uiStore";
import ButtonLoader from "../../UI/ButtonLoader";

const AddBoardModal = ({refetch}) => {
    const [boardTitle, setBoardTitle] = useState({title:''})
    const userId = useUser(state => state.id)
    const setOpen = useSpaceModal(state => state.setOpen)

    const mutation = useMutation(["create-board", userId, boardTitle], () => createBoard(userId, boardTitle.title), {
        onSuccess: () => {
            setOpen()
            setBoardTitle({title:''})
            refetch()
        }
    })

    // const { isLoading, isFetching, error, data, refetch } = useQuery(["create-board", userId, boardTitle], () => createBoard(userId, boardTitle.title),
    //     {
    //             refetchOnWindowFocus: false,
    //             enabled: false,
    //             onSuccess: () => {
    //                 setOpen()
    //             }
    //         }
    // );

    const handleClick = () => {
        mutation.mutate()
    };

    // if (!isLoading) return (<LoadingScreen isLoading={true}/>)

    // const closeAddModal = useAddModal(state => state.setOpen)
    // const addBoard = useSpace(state => state.addBoard)
    // const isLoading = useSpace(state => state.loading)
    //
    // const addBoard2 = () => {
    //     addBoard(board.title, 1)
    //     setBoard({title: ''})
    // }

    return (
        <div className="relative mx-auto my-20 bg-white rounded-2xl shadow-2xl w-96">
            <div className="px-6 py-6 lg:px-8">
                <h3 className="mb-4 text-xl font-bold text-gray-900">Create new board</h3>
                <div className="space-y-6">
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900">
                            Board name </label>
                        <input type="text"
                               value={boardTitle.title}
                               onChange={e => setBoardTitle({...boardTitle, title: e.target.value})}
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                               placeholder="Name your board" required/>
                    </div>

                    <button onClick={handleClick} type="submit" className="w-full text-white bg-zinc-700 hover:bg-zinc-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                        {!mutation.isLoading ? 'Create board' : <ButtonLoader/>}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddBoardModal;