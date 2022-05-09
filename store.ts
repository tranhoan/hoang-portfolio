import { atom } from 'jotai';

type SectionLoadAtomType = {
  isSectionLoaded: boolean;
  isInitialLoad: boolean;
};

export const activeSectionAtom = atom(0);
export const isMenuOpenAtom = atom(false);
