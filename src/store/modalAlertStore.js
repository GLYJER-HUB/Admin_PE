import { create } from 'zustand';

const useModalAlertStore = create((set) => ({
    modalAlert: {
        message: null,
        type: null,
    },

    setModalAlert: (message, type) => set({ modalAlert: { message, type } }),
    clearModalAlert: () => set({ modalAlert: { message: null, type: null } }),
}));

export default useModalAlertStore;