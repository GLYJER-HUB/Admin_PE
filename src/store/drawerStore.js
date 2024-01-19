import { create } from 'zustand';

const useDrawerStore = create((set) => ({
    isDrawerOpen: false,
    setDrawerOpen: () => set({ isDrawerOpen: true }),
    setDrawerClose: () => set({ isDrawerOpen: false })
}));

export default useDrawerStore;