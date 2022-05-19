import { atom } from 'jotai';
import { projects } from './data/projectDetails';

type SectionLoadAtomType = {
  isSectionLoaded: boolean;
  isInitialLoad: boolean;
};
export const activeSectionAtom = atom(0);
export const isMenuOpenAtom = atom(false);
