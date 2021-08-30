import create from 'zustand'
import { persist } from 'zustand/middleware'

export const usePercobaan = create(
  persist(
    (set) => ({
      // initial value
      counter: 0,
      // function pengubah
      setTen: () => set(() => ({ counter: 10 })), // kalau kita tidak memerlukan state sebelumnya
      decrease: () => set((state) => ({ counter: state.counter - 1 })), // memerlukan state sebelumnya
      increaseTenFold: () => set((state) => ({ counter: state.counter + 10 })),
      decreaseTenFold: () => set((state) => ({ counter: state.counter - 10 })),
    }),
    {
      name: 'percobaan', // unique name
      getStorage: () => localStorage, // (optional) by default the 'localStorage' is used
    }
  )
)

export const usePercobaan2 = create((set) => ({
  // initial value
  counter: 0,
  // function pengubah
  setTen: () => set(() => ({ counter: 10 })), // kalau kita tidak memerlukan state sebelumnya
  decrease: () => set((state) => ({ counter: state.counter - 1 })), // memerlukan state sebelumnya
  increaseTenFold: () => set((state) => ({ counter: state.counter + 10 })),
  decreaseTenFold: () => set((state) => ({ counter: state.counter - 10 })),
}))
