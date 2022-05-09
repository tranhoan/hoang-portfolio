export type SectionType = {
  sectionNumber: number;
  name: string;
  isColorBeige: boolean;
};

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
];
