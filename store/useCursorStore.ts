import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export interface CursorStore {
  cursorPosition: {
    x: number;
    y: number;
  };
  setCursorPosition: (x: number, y: number) => void;
  cursorVariant: string;
  setCursorVariant: (variant: string) => void;
  cursorText: string;
  setCursorText: (cursorText: string) => void;
}

export const useCursorStore = create<CursorStore>()(
  devtools(
    persist((set) => ({
      cursorPosition: {
        x: 0,
        y: 0,
      },
      setCursorPosition: (x, y) => set(() => ({ cursorPosition: { x, y } })),
      cursorVariant: 'hidden',
      setCursorVariant: (cursorVariant) => set(() => ({ cursorVariant })),
      cursorText: 'View',
      setCursorText: (cursorText) =>
        set(() => ({
          cursorText,
        })),
    }))
  )
);
