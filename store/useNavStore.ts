import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface NavStore {
  inView: string;
  setInView: (inView: string) => void;
}

export const useNavStore = create<NavStore>()(
  devtools(
    persist((set) => ({
      inView: 'about',
      setInView: (inView) => set(() => ({ inView })),
    }))
  )
);
