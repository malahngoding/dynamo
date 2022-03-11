import create from 'zustand'
import { persist } from 'zustand/middleware'

export const useLanguageSwitching = create(
  persist(
    (set) => ({
      languageID: true,
      languageENG: false,
      toogleSwitchingID: () =>
        set((state) => ({
          languageID: true,
          languageENG: false,
        })),
      toogleSwitchingENG: () =>
        set((state) => ({
          languageID: false,
          languageENG: true,
        })),
    }),
    {
      name: 'food-storage', // unique name
      getStorage: () => sessionStorage, // (optional) by default the 'localStorage' is used
    }
  )
)
