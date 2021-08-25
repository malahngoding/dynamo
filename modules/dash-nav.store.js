import create from 'zustand'

export const useDashNav = create((set, get) => ({
  shown: false,
  toggleNav: () => set({ shown: !get().shown }),
}))
