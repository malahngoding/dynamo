import create from 'zustand'

export const useDashNav = create((set) => ({
  shown: false,
  toggleNav: () =>
    set((state) => ({
      shown: !state.shown,
    })),
}))
