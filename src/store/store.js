import create from 'zustand';
import React from "react";
import {persist} from "zustand/middleware";

export const useUser = create(
    persist((set, get) => ({
            userId: null,
            addUserId: () => {
                set({userId: 1})
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