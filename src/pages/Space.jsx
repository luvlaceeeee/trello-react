import React, {useEffect, useState} from 'react';
import Sidebar from "../components/Sidebar";
import ContentLayout from "../components/Layout/ContentLayout";
import HeaderLayout from "../components/Layout/HeaderLayout";
import BoardHeader from "../components/Column/BoardHeader";
import ColumnLayout from "../components/Layout/ColumnLayout";
import Column from "../components/Column/Column";
import SpaceHeader from "../components/SpaceHeader";
import BoardColumn from "../components/Board/BoardColumn";
import AddColumn from "../components/Board/AddColumn";
import {Link} from "react-router-dom";
import Modal from "../components/Modal/Modal";
import {useSpace} from "../store/store";
import axios from "axios";
import LoadingScreen from "../components/UI/LoadingScreen";

const Space = () => {
    const boards = useSpace(state => state.boards)
    return (
        <div>
            <LoadingScreen isLoading={false}/>

            <ContentLayout>
                <HeaderLayout>
                    <SpaceHeader/>
                </HeaderLayout>

                <ColumnLayout>
                        {boards.map(board => {
                            return <Link to='/board'>
                                <BoardColumn title={board.title}/>
                            </Link>
                        })}
                    <AddColumn title={'Add new board'}/>
                </ColumnLayout>
            </ContentLayout>
        </div>
    );
};

export default Space;