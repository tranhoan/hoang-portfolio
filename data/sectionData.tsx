export type SectionType = {
  sectionNumber: number;
  name: string;
  sectionColor: 'blue' | 'beige';
};

export const sections: SectionType[] = [
  {
    sectionNumber: 0,
    name: 'Welcome section',
    sectionColor: 'blue',
  },
  {
    sectionNumber: 1,
    name: 'About me section',
    sectionColor: 'beige',
  },
  {
    sectionNumber: 2,
    name: 'Selected work section',
    sectionColor: 'blue',
  },
];
