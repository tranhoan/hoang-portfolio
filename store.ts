import { atom } from 'jotai';
import { focusAtom } from 'jotai/optics';

type SectionLoadAtomType = {
  isSectionLoaded: boolean;
  isInitialLoad: boolean;
};

export const activeSectionAtom = atom(0);
