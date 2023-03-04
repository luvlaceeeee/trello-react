import React from 'react';
import ContentLayout from "../components/Layout/ContentLayout";
import Column from "../components/Column/Column";
import HeaderLayout from "../components/Layout/HeaderLayout";
import ColumnLayout from "../components/Layout/ColumnLayout";
import BoardHeader from "../components/Board/BoardHeader";
import {useBoardModal} from "../store/uiStore";
import {useBoard, useUser} from "../store/store";
import LoadingScreen from "../components/UI/LoadingScreen";
import {useParams} from "react-router-dom";
import Modal from "../components/Modal/Modal";
import DeleteBoardModal from "../components/Modal/BoardModals/DeleteBoardModal";
import RenameBoardModal from "../components/Modal/BoardModals/RenameBoardModal";
import AddColumnModal from "../components/Modal/BoardModals/AddColumnModal";
import AddUserModal from "../components/Modal/BoardModals/AddUserModal";
import {useQuery} from "@tanstack/react-query";
import {getBoardById} from "../API/Service";
import BoardTagsModal from "../components/Modal/BoardModals/BoardTagsModal";
import BoardHeaderLoader from "../components/Board/BoardHeaderLoader";

const Board = () => {
    const userId = useUser(state => state.userId)
    const {boardId} = useParams()

    const isOpen = useBoardModal(state => state.isOpen)
    const content = useBoardModal(state => state.content)
    const setOpen = useBoardModal(state => state.setOpen)

    const setBoard = useBoard(state => state.setBoard)

    const {
        isLoading,
        data,
        refetch
    } = useQuery(["all-boards", userId, boardId], () => getBoardById(userId, boardId), {
        refetchOnWindowFocus: false,
        onSuccess: data => {
            setBoard(data)
        }
    });

    if (isLoading) return (
        <div>
            <ContentLayout>
                <HeaderLayout>
                    <BoardHeaderLoader/>
                </HeaderLayout>

                <ColumnLayout>
                    <div
                        className='animate-pulse bg-zinc-200 flex flex-col justify-between items-center flex-none w-72 rounded-lg p-4 pb-4 shadow-lg space-y-4'></div>
                    <div
                        className='animate-pulse bg-zinc-200 flex flex-col justify-between items-center flex-none w-72 rounded-lg p-4 pb-4 shadow-lg space-y-4'></div>
                    <div
                        className='animate-pulse bg-zinc-200 flex flex-col justify-between items-center flex-none w-72 rounded-lg p-4 pb-4 shadow-lg space-y-4'></div>
                    <div
                        className='animate-pulse bg-zinc-200 flex flex-col justify-between items-center flex-none w-72 rounded-lg p-4 pb-4 shadow-lg space-y-4'></div>
                    <div
                        className='animate-pulse bg-zinc-200 flex flex-col justify-between items-center flex-none w-72 rounded-lg p-4 pb-4 shadow-lg space-y-4'></div>
                    <div
                        className='animate-pulse bg-zinc-200 flex flex-col justify-between items-center flex-none w-72 rounded-lg p-4 pb-4 shadow-lg space-y-4'></div>
                </ColumnLayout>
            </ContentLayout>
        </div>
    )

    const modalContent = content === 'delete' ? <DeleteBoardModal onClick={setOpen} title={data.title}/> :
        content === 'rename' ? <RenameBoardModal onClick={setOpen} refetch={refetch} title={data.title}/> :
            content === 'addColumn' ? <AddColumnModal onClick={setOpen} refetch={refetch}/> :
                content === 'addUser' ? <AddUserModal/> :
                    content === 'boardTags' ? <BoardTagsModal refetch={refetch}/> : null

    return (
        <div>
            <ContentLayout>
                <Modal isOpen={isOpen} setOpen={setOpen}>
                    {modalContent}
                </Modal>

                <HeaderLayout>
                    <BoardHeader title={data.title} columns={data.columns} members={data.users}/>
                </HeaderLayout>

                <ColumnLayout>
                    {data.columns.map(column => {
                        return <Column key={column.id} title={column.title} tasks={column.tasks} id={column.id}
                                       boardRefetch={refetch}/>
                    })}
                </ColumnLayout>
            </ContentLayout>
        </div>
    );
};

export default Board;