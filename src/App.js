import './tailwind.css'
import ButtonMenu from "./components/UI/ButtonMenu/ButtonMenu";
import { FiCodesandbox, FiPlus, FiMoreVertical } from "react-icons/fi";
import Badge from "./components/UI/Badge/Badge";
import Tag from "./components/UI/Tag/Tag";
import IconButton from "./components/UI/IconButton/IconButton";
import Board from "./pages/Board";
import React from "react";
import {Space} from "./pages/Space";
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import WelcomePage from "./pages/WelcomePage";
import {
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient();

function App() {
  return (
      <QueryClientProvider client={queryClient}>
        <Routes>
            <Route path='/welcome' element={<WelcomePage/>}/>
            <Route path='/' element={<Sidebar/>}>
                <Route path='/space' element={<Space />}/>
                <Route path='/board/:id' element={<Board />}/>
            </Route>
        </Routes>
      </QueryClientProvider>
  );
}

export default App;
