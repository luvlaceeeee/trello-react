import './tailwind.css'
import Board from "./pages/Board";
import React from "react";
import {Space} from "./pages/Space";
import {Navigate, Route, Routes} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import WelcomePage from "./pages/WelcomePage";
import {QueryClient, QueryClientProvider,} from '@tanstack/react-query'
import LoginPage from "./pages/LoginPage";
import InvitePage from "./pages/InvitePage";

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Routes>
                <Route path='' element={<Navigate to="/welcome"/>}/>
                <Route path='/welcome' element={<WelcomePage/>}/>
                <Route path='/login' element={<LoginPage/>}/>
                <Route path='/' element={<Sidebar/>}>
                    <Route path='/space' element={<Space/>}/>
                    <Route path='/board/:boardId' element={<Board/>}/>
                </Route>
                <Route path='/invite/:inviteCode' element={<InvitePage/>}/>
            </Routes>
        </QueryClientProvider>
    );
}

export default App;
