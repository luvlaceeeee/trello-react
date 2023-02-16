import create from 'zustand';
import {colors} from "../enum/colors";
import {FiCodesandbox, FiGitPullRequest, FiLayout, FiList, FiMessageSquare} from "react-icons/fi";
import React from "react";
import axios from "axios";

export const useSidebar = create((set, get) => ({
    buttons: [
        {title: 'Space', icon: <FiCodesandbox size={20}/>, link:'/'},
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

export const useSpace = create((set, get) => ({
    loading: false,
    boards: [
        {id: 1, title: 'Agile board'},
        {id: 1, title: 'Create UI'},
        // {id: 1, title: 'Create UX'},
        // {id: 1, title: 'Functional'}
    ],
    addBoard: async (title, userId) => {
        userId = 3
        set({loading: true})
        const post = axios.post(`http://176.212.185.97:7841/${userId}/boards`, {
            title: title
        })
            .then(function (response) {
                const {data} = response
                set({boards: [...get().boards, data]})
                console.log(data)
                set({loading: false})
            })
            .catch(function (error) {
                console.log(error);
            });
    },
    fetchBoards: async (userId) => {
        // fetch board by id
    }
}))

export const useModal = create((set, get) => ({
    isOpen: false,
    setOpen: () => {
        set({isOpen: !get().isOpen})
    },
}))

export const useBoard = create((set, get) => ({
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
}))

