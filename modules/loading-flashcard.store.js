import create from 'zustand'

export const useLoading = create((set) => ({
  loading: false,
  toggleLoading: () =>
    set((state) => ({
      loading: !state.loading,
    })),
  toggleLoadingFalse: () =>
    set((state) => ({
      loading: false,
    })),
}))
