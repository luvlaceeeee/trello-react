import create from 'zustand';
import {colors} from "../enum/colors";
import {FiCodesandbox, FiGitPullRequest, FiLayout, FiList, FiMessageSquare} from "react-icons/fi";
import React from "react";
import axios from "axios";
import {devtools} from "zustand/middleware";
import {immer} from "zustand/middleware/immer";
import {persist} from "zustand/middleware";
import {tagColor} from "../utils/tagColor";

export const useUser = create(
    persist((set, get) => ({
            userId: null,
            addUserId: () => {
                set({userId: 12})
            }
        }), {name: 'user-storage', version: 1}
    ))

export const useBoard = create((set, get) => ({
    id: '',
    title: '',
    columns: [],
    tags: [],
    users: [],
    setBoard: (board) => {
        set({...board})
    },
}))