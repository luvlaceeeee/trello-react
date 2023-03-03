import React, {useState} from 'react';
import Badge from "../UI/Badge/Badge";
import IconButton from "../UI/IconButton/IconButton";
import {FiMoreVertical, FiPlus} from "react-icons/fi";
import Tag from "../UI/Tag/Tag";
import {colors} from "../../enum/colors";
import ColumnHeader from "./ColumnHeader";
import Task from "./Task";
import Modal from "../Modal/Modal";
import DeleteBoardModal from "../Modal/BoardModals/DeleteBoardModal";
import RenameBoardModal from "../Modal/BoardModals/RenameBoardModal";
import AddColumnModal from "../Modal/BoardModals/AddColumnModal";
import AddUserModal from "../Modal/BoardModals/AddUserModal";
import {useBoardModal, useColumnModal} from "../../store/uiStore";
import RenameColumnModal from "../Modal/BoardModals/RenameColumnModal";
import DeleteColumnModal from "../Modal/BoardModals/DeleteColumnModal";
import CreateTaskModal from "../Modal/BoardModals/CreateTaskModal";
import {useQuery} from "@tanstack/react-query";
import {getBoardById, getTasksByColumnId} from "../../API/Service";
import LoadingScreen from "../UI/LoadingScreen";
import {useUser} from "../../store/store";
import {useParams} from "react-router-dom";

const Column = ({title, tasks, id, refetch}) => {
    // const isOpen = useColumnModal(state => state.isOpen)
    // const content = useColumnModal(state => state.content)
    // const setOpen = useColumnModal(state => state.setOpen)
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
        // refetch
    } = useQuery(["all-tasks", userId, boardId, id], () => getTasksByColumnId(userId, boardId, id), {
        refetchOnWindowFocus: false,
        onSuccess: data => {
        }
    });

    if (isLoading) return (
        'asdasd'
        // <LoadingScreen isLoading={true}/>
    )


    const modalContent = content === 'rename-column' ?
        <RenameColumnModal refetch={refetch} onClick={setOpen} columnId={id}
                           title={title}/> : content === 'delete-column' ?
            <DeleteColumnModal refetch={refetch} onClick={setOpen} columnId={id}
                               title={title}/> : content === 'create-task' ?
                <CreateTaskModal refetch={refetch} onClick={setOpen} columnId={id}/> : null
    return (
        <div>
            <Modal isOpen={isOpen} setOpen={setModal}>
                {modalContent}
            </Modal>

            <div
                className='bg-zinc-200 flex flex-col justify-between items-center w-72 rounded-lg p-4 pb-4 shadow-lg space-y-4'>
                <ColumnHeader badgeTitle={title} color={colors.black.badge} taskNumber={data.length} id={id}
                              setOpen={setModal}/>
                {data.map(task => <Task key={task.id} tags={task.tags} title={task.text} desc={task.description} makers={task.makers} id={task.id} columnId={id} refetch={refetch}/>)}
            </div>
        </div>
    );
};

export default Column;