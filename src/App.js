import './tailwind.css'
import ButtonMenu from "./components/UI/ButtonMenu/ButtonMenu";
import { FiCodesandbox, FiPlus, FiMoreVertical } from "react-icons/fi";
import Badge from "./components/UI/Badge/Badge";
import Tag from "./components/UI/Tag/Tag";
import IconButton from "./components/UI/IconButton/IconButton";
import Board from "./pages/Board";
import React from "react";
import Space from "./pages/Space";
import {Route, Routes} from "react-router-dom";


function App() {
  return (
      <Routes>
          <Route path='/' element={<Space />}/>
          <Route path='/board' element={<Board />}/>
      </Routes>
  );
}

export default App;
