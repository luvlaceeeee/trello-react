import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './tailwind.css'
import ColumnLayout from "./components/Layout/ColumnLayout";
import Sidebar from "./components/Sidebar";
import ContentLayout from "./components/Layout/ContentLayout";
import IconButton from "./components/UI/IconButton/IconButton";
import { FiChevronDown, FiCodesandbox, FiAlignJustify, FiLayout, FiList, FiMessageSquare, FiGitPullRequest, FiLogOut } from "react-icons/fi";
import ButtonMenu from "./components/UI/Button/ButtonMenu";
import Board from "./pages/Board";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <Board/>
  </React.StrictMode>
);

