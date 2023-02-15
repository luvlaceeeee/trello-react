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

const Space = () => {
    return (
        <div>
            <Sidebar/>

            <ContentLayout>
                <HeaderLayout>
                    <SpaceHeader/>
                </HeaderLayout>

                <ColumnLayout>
                    <Link to='/board'>
                        <BoardColumn title={'Agile board'}/>
                    </Link>
                    <AddColumn title={'Add new board'}/>
                </ColumnLayout>
            </ContentLayout>
        </div>
    );
};

export default Space;