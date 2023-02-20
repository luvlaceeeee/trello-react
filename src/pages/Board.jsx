import React, {useEffect, useState} from 'react';
import Sidebar from "../components/Sidebar";
import ContentLayout from "../components/Layout/ContentLayout";
import IconButton from "../components/UI/IconButton/IconButton";
import {FiChevronDown} from "react-icons/fi";
import App from "../App";
import Column from "../components/Column/Column";
import HeaderLayout from "../components/Layout/HeaderLayout";
import ColumnLayout from "../components/Layout/ColumnLayout";
import BoardHeader from "../components/Column/BoardHeader";
import {colors} from "../enum/colors";
import {useBoard, useBoardModal} from "../store/store";
import LoadingScreen from "../components/UI/LoadingScreen";
import {useParams} from "react-router-dom";
import AddBoardModal from "../components/Modal/AddBoardModal";
import Modal from "../components/Modal/Modal";
import DeleteBoardModal from "../components/Modal/DeleteBoardModal";
import RenameBoardModal from "../components/Modal/RenameBoardModal";
import AddBoardColumn from "../components/Space/AddBoardColumn";
import AddColumnModal from "../components/Modal/AddColumnModal";
import AddUserModal from "../components/Modal/AddUserModal";

const Board = () => {
    const boards = useBoard(state => state.column)
    const title = useBoard(state => state.title)
    const members = useBoard(state => state.members)
    const fetchBoard = useBoard(state => state.fetchBoard)
    const {id} = useParams()

    useEffect(() => {
        fetchBoard(1, id)
    })

    const isOpen = useBoardModal(state => state.isOpen)
    const content = useBoardModal(state => state.content)
    const setOpen = useBoardModal(state => state.setOpen)

    const modalContent = content === 'delete' ? <DeleteBoardModal/> :
        content === 'rename' ? <RenameBoardModal/> :
            content === 'addColumn' ? <AddColumnModal/> :
                content === 'addUser' ? <AddUserModal/> : null

    return (
        <div>
            <ContentLayout>
                <Modal isOpen={isOpen} setOpen={setOpen}>
                    {modalContent}
                </Modal>
                <HeaderLayout>
                    <BoardHeader title={title} columns={boards} members={members}/>
                </HeaderLayout>

                <ColumnLayout>
                    {boards.map(column => {
                        return <Column title={column.title} tasks={column.tasks}/>
                    })}
                </ColumnLayout>
            </ContentLayout>
        </div>
    );
};

export default Board;