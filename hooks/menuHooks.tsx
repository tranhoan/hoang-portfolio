import { useAtom } from 'jotai';
import { isMenuOpenAtom } from '../store';

export const useManageMenu = (): [
  closeMenu: () => void,
  openMenu: () => void,
  isMenuOpen: boolean
] => {
  const [isMenuOpen, setIsMenuOpen] = useAtom(isMenuOpenAtom);
  const openMenu = () => {
    setIsMenuOpen(true);
    window?.fullpage_api?.setAllowScrolling(false);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    window?.fullpage_api?.setAllowScrolling(true);
  };

  return [closeMenu, openMenu, isMenuOpen];
};
