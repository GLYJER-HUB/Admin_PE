import {create} from "zustand";

const useFileStore = create((set) => ({
  selectedImageFile: null,
  selectedPdfFile: null,
  error: null,
  setError: (error) => set({ error }),
  resetError: () => set({ error: null }),
  setSelectedImageFile: (file) => set({ selectedImageFile: file }),
  setSelectedPdfFile: (file) => set({ selectedPdfFile: file }),
}));

export default useFileStore;
