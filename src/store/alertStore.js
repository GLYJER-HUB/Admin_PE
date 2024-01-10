import { create } from 'zustand';

const useAlertStore = create((set) => ({
    alert: {
        message: null,
        type: null,
    },

    setAlert: (message, type) => set({ alert: { message, type } }),
    clearAlert: () => set({ alert: { message: null, type: null } }),
}));

export default useAlertStore;