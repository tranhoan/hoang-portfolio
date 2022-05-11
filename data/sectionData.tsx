export type SectionType = {
  sectionNumber: number;
  name: string;
  isColorBeige: boolean;
};
export const PROJECT_DETAIL_ID = 3;

export const sections: SectionType[] = [
  {
    sectionNumber: 0,
    name: 'Welcome section',
    isColorBeige: false,
  },
  {
    sectionNumber: 1,
    name: 'About me section',
    isColorBeige: true,
  },
  {
    sectionNumber: 2,
    name: 'Selected work section',
    isColorBeige: false,
  },
  {
    sectionNumber: PROJECT_DETAIL_ID,
    name: 'Project detail page section',
    isColorBeige: false,
  },
];
