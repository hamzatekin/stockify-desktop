import create from 'zustand';
import { devtools } from 'zustand/middleware';

export const globalStoreSelectors = {
  burger: ({ isBurguerMenuOpen, toggleBurgerMenu }: GlobalStoreType) => ({
    isBurguerMenuOpen,
    toggleBurgerMenu,
  }),
};

const useGlobalStore = create<GlobalStoreType>()(
  devtools(
    (set) => ({
      isBurguerMenuOpen: false,
      toggleBurgerMenu: () =>
        set((state) => ({ isBurguerMenuOpen: !state.isBurguerMenuOpen })),
    }),
    { name: 'GlobalStore' }
  )
);

export default useGlobalStore;
