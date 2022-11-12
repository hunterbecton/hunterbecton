import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export interface ProjectStore {
  activeProjectId: string | null;
  setActiveProjectId: (activeProjectId: string) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const useProjectStore = create<ProjectStore>()(
  devtools(
    persist((set) => ({
      activeProjectId: null,
      setActiveProjectId: (activeProjectId) => set(() => ({ activeProjectId })),
      isOpen: false,
      setIsOpen: (isOpen) => set(() => ({ isOpen })),
    }))
  )
);
