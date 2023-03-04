import React from 'react';
import ContentLayout from "../components/Layout/ContentLayout";
import HeaderLayout from "../components/Layout/HeaderLayout";
import ColumnLayout from "../components/Layout/ColumnLayout";
import SpaceHeader from "../components/Space/SpaceHeader";
import BoardColumn from "../components/Space/BoardColumn";
import AddBoardColumn from "../components/Space/AddBoardColumn";
import Modal from "../components/Modal/Modal";
import {useSpaceModal} from "../store/uiStore";
import {useUser} from "../store/store";
import LoadingScreen from "../components/UI/LoadingScreen";
import {useQuery} from "@tanstack/react-query";
import {getAllBoards} from "../API/Service";
import AddBoardModal from "../components/Modal/SpaceModals/AddBoardModal";

const Space = () => {
    const isOpen = useSpaceModal(state => state.isOpen)
    const setOpen = useSpaceModal(state => state.setOpen)

    const userId = useUser(state => state.userId)

    const { isLoading, error, data, refetch } = useQuery(["all-boards", userId], () => getAllBoards(userId), {
        refetchOnWindowFocus: false
    });

    if (isLoading) return (
        <LoadingScreen isLoading={true}/>
    )

    return (
        <div>
            <ContentLayout>

                <Modal isOpen={isOpen} setOpen={setOpen}>
                    <AddBoardModal refetch={refetch}/>
                </Modal>

                <HeaderLayout>
                    <SpaceHeader boards={data}/>
                </HeaderLayout>

                <div className='flex flex-col'>
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
                    {/*    {data.map(board => {*/}
                    {/*        if (board.role === 'creator') return <BoardColumn title={board.title}/>*/}
                    {/*    })}*/}
                    {/*    <AddBoardColumn title={'Add new board'}/>*/}
                    {/*</ColumnLayout>*/}

                </div>
            </ContentLayout>
        </div>
    );
};


export {Space};