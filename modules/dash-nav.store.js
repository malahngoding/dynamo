import create from 'zustand'

export const useDashNav = create((set) => ({
  shown: false,
  toggleNav: () =>
    set((state) => ({
      shown: !state.shown,
    })),
}))

export const useBadgeDetail = create((set) => ({
  shown: false,
  toggleBadgeDetail: () =>
    set((state) => ({
      shown: !state.shown,
    })),
}))
