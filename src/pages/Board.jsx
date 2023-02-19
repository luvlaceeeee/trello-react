import React, {useState} from 'react';
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
import {useBoard} from "../store/store";
import LoadingScreen from "../components/UI/LoadingScreen";

const Board = () => {
    const boards = useBoard(state => state.column)
    const title = useBoard(state => state.title)
    const members = useBoard(state => state.members)

    return (
        <div>
            <ContentLayout>
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