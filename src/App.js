import './tailwind.css'
import ButtonMenu from "./components/UI/ButtonMenu/ButtonMenu";
import { FiCodesandbox, FiPlus, FiMoreVertical } from "react-icons/fi";
import Badge from "./components/UI/Badge/Badge";
import Tag from "./components/UI/Tag/Tag";
import IconButton from "./components/UI/IconButton/IconButton";
import Board from "./pages/Board";
import React from "react";
import {boardLoader, Space} from "./pages/Space";
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes} from "react-router-dom";
import Sidebar from "./components/Sidebar";


const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Sidebar/>}>
        <Route path='/space' element={<Space />}/>
        <Route path='/board/:id' element={<Board />}/>
    </Route>
))

function App() {
  return (
        <RouterProvider router={router}/>
  );
}

export default App;
