import create from 'zustand';
import {colors} from "../enum/colors";
import {FiCodesandbox, FiGitPullRequest, FiLayout, FiList, FiMessageSquare} from "react-icons/fi";
import React from "react";
import axios from "axios";
import {devtools} from "zustand/middleware";
import {immer} from "zustand/middleware/immer";
import {persist} from "zustand/middleware";


export const useSidebar = create((set, get) => ({
    buttons: [
        {title: 'Space', icon: <FiCodesandbox size={20}/>, link:'/space'},
        // {title: 'Dashboard', icon: <FiLayout size={20}/>},
        // {title: 'Schedule', icon: <FiList size={20}/>},
        // {title: 'Inbox', icon: <FiMessageSquare size={20}/>},
        // {title: 'Teams', icon: <FiGitPullRequest size={20}/>},
    ],
    isOpen: false,
    setOpen: () => {
        set({isOpen: !get().isOpen})
    }
}))

export const useBoardModal = create((set, get) => ({
    isOpen: false,
    content: '',
    setOpen: (content) => {
        set({isOpen: !get().isOpen, content: content})
    }
}))

export const useSpaceModal = create((set, get) => ({
    isOpen: false,
    setOpen: () => {
        set({isOpen: !get().isOpen})
    }
}))