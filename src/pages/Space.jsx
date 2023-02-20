import React, {useEffect, useState} from 'react';
import Sidebar from "../components/Sidebar";
import ContentLayout from "../components/Layout/ContentLayout";
import HeaderLayout from "../components/Layout/HeaderLayout";
import BoardHeader from "../components/Column/BoardHeader";
import ColumnLayout from "../components/Layout/ColumnLayout";
import Column from "../components/Column/Column";
import SpaceHeader from "../components/Space/SpaceHeader";
import BoardColumn from "../components/Space/BoardColumn";
import AddColumn from "../components/Space/AddColumn";
import {Link} from "react-router-dom";
import Modal from "../components/Modal/Modal";
import {useSpace} from "../store/store";
import axios from "axios";
import LoadingScreen from "../components/UI/LoadingScreen";

const Space = () => {
    const boards = useSpace(state => state.boards)
    const fetchBoards = useSpace(state => state.fetchBoards)
    console.log(boards)

    useEffect(() => {
        fetchBoards(1)
    }, [])

    return (
        <div>
            <LoadingScreen isLoading={false}/>

            <ContentLayout>
                <HeaderLayout>
                    <SpaceHeader/>
                </HeaderLayout>
                {/*<div className='flex flex-col'>*/}
                    <div className='p-5 pb-1'>
                        <span className='block pb-1 font-bold text-lg'>All boards:</span>
                        <hr/>
                    </div>
                    <ColumnLayout>
                            {boards.map(board => {
                                return <BoardColumn title={board.title} id={board.id}/>
                            })}
                        <AddColumn title={'Add new board'}/>
                    </ColumnLayout>

                    {/*<div className='p-5 pb-1'>*/}
                    {/*    <span>Your boards:</span>*/}
                    {/*    <hr/>*/}
                    {/*</div>*/}
                    {/*<ColumnLayout>*/}
                    {/*    {boards.map(board => {*/}
                    {/*        if (board.role === 'creator') return <BoardColumn title={board.title}/>*/}
                    {/*    })}*/}
                    {/*    <AddColumn title={'Add new board'}/>*/}
                    {/*</ColumnLayout>*/}

                {/*</div>*/}
            </ContentLayout>
        </div>
    );
};


export {Space};