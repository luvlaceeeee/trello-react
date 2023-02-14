import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './tailwind.css'
import ColumnLayout from "./components/ColumnLayout";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import IconButton from "./components/UI/IconButton/IconButton";
import { FiChevronDown, FiCodesandbox, FiAlignJustify, FiLayout, FiList, FiMessageSquare, FiGitPullRequest, FiLogOut } from "react-icons/fi";
import ButtonMenu from "./components/UI/Button/ButtonMenu";
import Test from "./components/test";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <Test/>
  </React.StrictMode>
);

