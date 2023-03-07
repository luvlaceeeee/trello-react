import React, {useState} from 'react';
import {colors} from "../../enum/colors";
import ColumnHeader from "./ColumnHeader";
import Task from "./Task";
import Modal from "../Modal/Modal";
import RenameColumnModal from "../Modal/BoardModals/RenameColumnModal";
import DeleteColumnModal from "../Modal/BoardModals/DeleteColumnModal";
import CreateTaskModal from "../Modal/BoardModals/CreateTaskModal";
import {useQuery} from "@tanstack/react-query";
import {getTasksByColumnId} from "../../API/Service";
import {useUser} from "../../store/store";
import {useParams} from "react-router-dom";

const Column = ({title, tasks, id, boardRefetch}) => {
    const userId = useUser(state => state.userId)
    const {boardId} = useParams()

    const [isOpen, setOpen] = useState(false)
    const [content, setContent] = useState('')
    const setModal = (content) => {
        setOpen(!isOpen)
        setContent(content)
    }

    const {
        isLoading,
        data,
        refetch
    } = useQuery(["all-tasks", userId, boardId, id], () => getTasksByColumnId(userId, boardId, id), {
        refetchOnWindowFocus: false,
    });

    if (isLoading) return (
        <div
            className='animate-pulse bg-zinc-200 flex flex-col justify-between items-center flex-none w-72 rounded-lg p-4 pb-4 shadow-lg space-y-4'></div>
    )

    const modalContent = content === 'rename-column' ?
        <RenameColumnModal refetch={boardRefetch} onClick={setOpen} columnId={id}
                           title={title}/> : content === 'delete-column' ?
            <DeleteColumnModal refetch={boardRefetch} onClick={setOpen} columnId={id}
                               title={title}/> : content === 'create-task' ?
                <CreateTaskModal refetch={refetch} onClick={setOpen} columnId={id}/> : null
    return (
        <div className='scrollbar overflow-y-auto flex-none'>
            <Modal isOpen={isOpen} setOpen={setModal}>
                {modalContent}
            </Modal>

            <div
                className='bg-slate-200 flex flex-col justify-between items-center w-72 rounded-lg p-4 pb-4 shadow-lg space-y-4'>
                <ColumnHeader badgeTitle={title} color={colors.black.badge} taskNumber={data.length}
                              setOpen={setModal}/>
                {data.map(task => <Task key={task.id} tags={task.tags} title={task.text} desc={task.description}
                                        makers={task.makers} id={task.id} columnId={id} refetch={refetch} columnTitle={title}/>)}
            </div>
        </div>
    );
};

export default Column;