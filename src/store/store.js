import create from 'zustand';

export const useSidebar = create((set, get) => ({
    isOpen: false,
    setOpen: () => {
        set({isOpen: !get().isOpen})
    }
}))

