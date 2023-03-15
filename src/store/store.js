import create from 'zustand';
import React from "react";
import {persist} from "zustand/middleware";

export const useUser = create(
    persist((set, get) => ({
            id: '',
            email: '',
            name: '',
            surname: '',
            avatar: '',
            yandexId: '',
            addUser: (user) => {
                set({...user})
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
    // getTask: (id) => {
    //     return get().columns
    // }
}))