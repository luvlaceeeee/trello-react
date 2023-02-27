import React, {useEffect, useState} from 'react';
import Sidebar from "../components/Sidebar";
import ContentLayout from "../components/Layout/ContentLayout";
import HeaderLayout from "../components/Layout/HeaderLayout";
import BoardHeader from "../components/Column/BoardHeader";
import ColumnLayout from "../components/Layout/ColumnLayout";
import Column from "../components/Column/Column";
import SpaceHeader from "../components/Space/SpaceHeader";
import BoardColumn from "../components/Space/BoardColumn";
import AddBoardColumn from "../components/Space/AddBoardColumn";
import {Link} from "react-router-dom";
import Modal from "../components/Modal/Modal";
import {useBoardModal, useSpaceModal} from "../store/uiStore";
import {useSpace, useUser} from "../store/store";
import axios from "axios";
import LoadingScreen from "../components/UI/LoadingScreen";
import {useQuery} from "@tanstack/react-query";
import {getAllBoards, Service, test} from "../API/Service";
import DeleteBoardModal from "../components/Modal/BoardModals/DeleteBoardModal";
import RenameBoardModal from "../components/Modal/BoardModals/RenameBoardModal";
import AddColumnModal from "../components/Modal/BoardModals/AddColumnModal";
import AddUserModal from "../components/Modal/BoardModals/AddUserModal";
import AddBoardModal from "../components/Modal/SpaceModals/AddBoardModal";

const Space = () => {
    const isOpen = useSpaceModal(state => state.isOpen)
    const setOpen = useSpaceModal(state => state.setOpen)

    const userId = useUser(state => state.userId)

    // const data = useSpace(state => state.boards)
    // const fetchBoards = useSpace(state => state.fetchBoards)
    //
    // useEffect(() => {
    //     fetchBoards(1)
    // }, [])

    const { isLoading, error, data, refetch } = useQuery(["all-boards", userId], () => getAllBoards(userId), {
        refetchOnWindowFocus: false
    });

    if (isLoading) return (
        <LoadingScreen isLoading={true}/>
    )
    // if (error) return "An error has occurred: " + error.message;

    return (
        <div>
            <ContentLayout>

                <Modal isOpen={isOpen} setOpen={setOpen}>
                    <AddBoardModal refetch={refetch}/>
                </Modal>

                <HeaderLayout>
                    <SpaceHeader boards={data}/>
                </HeaderLayout>

                {/*<div className='flex flex-col'>*/}
                    <div className='p-5 pb-1'>
                        <span className='block pb-1 font-bold text-lg'>All boards:</span>
                        <hr/>
                    </div>

                    <ColumnLayout>
                            {data.map(board => {
                                return <BoardColumn key={board.id} title={board.title} id={board.id}/>
                            })}
                        <AddBoardColumn title={`Add new board`}/>
                    </ColumnLayout>

                    {/*<div className='p-5 pb-1'>*/}
                    {/*    <span>Your boards:</span>*/}
                    {/*    <hr/>*/}
                    {/*</div>*/}
                    {/*<ColumnLayout>*/}
                    {/*    {boards.map(board => {*/}
                    {/*        if (board.role === 'creator') return <BoardColumn title={board.title}/>*/}
                    {/*    })}*/}
                    {/*    <AddBoardColumn title={'Add new board'}/>*/}
                    {/*</ColumnLayout>*/}

                {/*</div>*/}
            </ContentLayout>
        </div>
    );
};


export {Space};