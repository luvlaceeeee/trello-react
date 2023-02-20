import create from 'zustand';
import {colors} from "../enum/colors";
import {FiCodesandbox, FiGitPullRequest, FiLayout, FiList, FiMessageSquare} from "react-icons/fi";
import React from "react";
import axios from "axios";
import {devtools} from "zustand/middleware";
import {immer} from "zustand/middleware/immer";
import {persist} from "zustand/middleware";

export const useUser = create(
    persist((set, get) => ({
    userId: null,
    addUserId: () => {
        set({userId: 1})
    }
}), {name: 'user-storage', version: 1}
    ))

export const useSpace = create((set, get) => ({
    loading: false,
    boards: [
        {id: 1, title: 'Agile board', role:'creator'},
        // {id: 1, title: 'Create UI', role:'admin'},
        // {id: 1, title: 'User board', role:'user'},
        // {id: 1, title: 'Create UX'},
        // {id: 1, title: 'Functional'}
    ],
    addBoard: async (title, userId) => {
        try {
            const response = await axios.post('http://176.212.185.97:7841/boards',{
                title: title
            } ,{
                params: {
                    userId: userId,
                }
            })
            set({boards: [...get().boards, response.data]})
            console.log(response.data)
        } catch (e) {
            console.log(e);
        } finally {

        }
    },
    fetchBoards: async (userId) => {
        try {
            const response = await axios.get('http://176.212.185.97:7841/boards', {
                params: {
                    userId: userId,
                }
            })
            set({boards: [...response.data]})
            console.log(response.data)
        } catch (e) {
            console.log(e);
        } finally {

        }
    }
}))

export const useBoard = create((set, get) => ({
    id: '',
    title: 'RNI Studio Space',
    members: ['Avilio Bruno','Avilio Bruno','Avilio Bruno','Avilio Bruno','Avilio Bruno'],
    column: [
        {title: 'To do',
            tasks: [
                {tags: [{title: 'UX Design', color: colors.blue.tag},
                        {title: 'UI Design', color: colors.green.tag},
                        {title: 'UX Design', color: colors.orange.tag},],
                    makers: ['Avilio Bruno','Avilio Bruno','Avilio Bruno','Avilio Bruno'],
                    title: 'Create button on sidebar and pull'},

                {tags: [{title: 'UX Design', color: colors.red.tag}],
                    makers: ['Avilio Bruno'],
                    title: 'Create UX'},

                {tags: [{title: 'UI Design', color: colors.green.tag},
                        {title: 'UX Design', color: colors.red.tag},],
                    makers: ['Avilio Bruno','Avilio Bruno'],
                    title: 'Submit design'}
            ]},
        {title: 'Completed',
            tasks: [
                {tags: [{title: 'UX Design', color: colors.blue.tag},
                        {title: 'UI Design', color: colors.green.tag},
                        {title: 'UX Design', color: colors.orange.tag},],
                    makers: ['Avilio Bruno','Avilio Bruno','Avilio Bruno','Avilio Bruno'],
                    title: 'Create button on sidebar and pull'},
            ]},
        {title: 'In progress',
            tasks: [
                {tags: [{title: 'UX Design', color: colors.red.tag}],
                    makers: ['Avilio Bruno'],
                    title: 'Create UX'},

                {tags: [{title: 'UI Design', color: colors.green.tag},
                        {title: 'UX Design', color: colors.red.tag},],
                    makers: ['Avilio Bruno','Avilio Bruno'],
                    title: 'Submit design'}
            ]},
    ],
    fetchBoard: async (userId, boardId) => {
        try {
            const response = await axios.get(`http://176.212.185.97:7841/boards/${boardId}`, {
                params: {
                    userId: userId,
                }
            })
            set({id: response.data.title, title: response.data.title,  column: response.data.columns})
            console.log(response.data)
        } catch (e) {
            console.log(e);
        } finally {

        }
    }
}))

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

export const useAddModal = create((set, get) => ({
    isOpen: false,
    setOpen: () => {
        set({isOpen: !get().isOpen})
    },
}))