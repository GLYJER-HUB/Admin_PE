import { create } from 'zustand';

const useChangePasswordStore = create((set) => ({
    isOpen: false,
    openModal: () => set({ isOpen: true }),
    closeModal: () => set({ isOpen: false }),
}));

export default useChangePasswordStore;
