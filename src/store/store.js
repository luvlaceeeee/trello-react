import create from 'zustand';
import {colors} from "../enum/colors";

export const useSidebar = create((set, get) => ({
    isOpen: false,
    setOpen: () => {
        set({isOpen: !get().isOpen})
    }
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

    ],
    // addTask:
}))

