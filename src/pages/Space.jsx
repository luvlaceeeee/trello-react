import React from 'react';
import Sidebar from "../components/Sidebar";
import ContentLayout from "../components/Layout/ContentLayout";
import HeaderLayout from "../components/Layout/HeaderLayout";
import BoardHeader from "../components/BoardHeader";
import ColumnLayout from "../components/Layout/ColumnLayout";
import Column from "../components/Column/Column";
import SpaceHeader from "../components/SpaceHeader";
import BoardColumn from "../components/BoardColumn";
import AddColumn from "../components/AddColumn";
import {Link} from "react-router-dom";
import Modal from "../components/Modal";
import {useSpace} from "../store/store";

const Space = () => {
    const boards = useSpace(state => state.boards)
    return (
        <div>
            <Sidebar/>

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
                        {/*<BoardColumn title={'Agile board'}/>*/}
                    <AddColumn title={'Add new board'}/>
                </ColumnLayout>
            </ContentLayout>
        </div>
    );
};

export default Space;