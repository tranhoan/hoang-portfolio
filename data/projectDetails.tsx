export type ProjectDetailType = {
  yearMade: string;
  name: string;
  myRole: string;
  stack: string;
  repository: string;
  summary: string;
};

export enum ProjectNames {
  VISUALCLASS = 'visualclass',
  HUB = 'hub',
  FELSIGHT = 'felsight',
  VISUFLIGHT = 'visuflights',
  MINTODO = 'mintodo',
  HOANG = 'hoang',
}

type ProjectObjectType = {
  [key in ProjectNames]: ProjectDetailType;
};

export const projects: ProjectObjectType = {
  visualclass: {
    yearMade: '2021',
    name: 'Visual Class',
    myRole: 'designer, developer',
    stack: 'react, typescript, zustand',
    repository: 'https://github.com/tranhoan/visual-class',
    summary: `This project is the outcome of my master thesis researching communication issues between students and educators caused by distance education. 
    VisualClass is a prototype of a videoconferencing app that creates a virtual space simulating real physical school space - allowing for more organic interactions.`,
  },
  hub: {
    yearMade: '2019 to now',
    name: 'Hub',
    myRole: 'lead designer, developer',
    stack: 'react, typescript',
    repository: '',
    summary: `Hub was a first big scale project that I had been a part of since its birth. The challenge of this project was to solve the chaos caused by the overwhelming number of faculty systems with diverse UI
    CTU FEE employees had to use in their day to day work life. In the long run, Hub is a system supposed to unify dozens of applications under one consistent user interface as well as integrate future requirements as modules inztead of creating new systems.`,
  },
  felsight: {
    yearMade: '2017 to now',
    name: 'Felsight',
    myRole: 'designer, developer',
    stack: 'jquery, jsf',
    repository: '',
    summary:
      'Felsight is a portal used by many students at CTU FEE to make their daily school life more manageable. User friendly timetables, personal events, interactive school map and a lot more - all at one place.',
  },
  visuflights: {
    yearMade: '2020',
    name: 'Visuflights',
    myRole: 'developer',
    stack: 'react, java',
    repository: 'https://github.com/tranhoan/visuflights-viz',
    summary: `A school project for visualising flights based on a dataset containing airport coordinates.`,
  },
  mintodo: {
    yearMade: '2017',
    name: 'Min todo',
    myRole: 'developer',
    stack: 'react',
    repository: 'https://github.com/tranhoan/min-todo',
    summary: `My first ever javascript project. An easy, minimalist todo list`,
  },
  hoang: {
    yearMade: '2022',
    name: 'Hoang',
    myRole: 'designer, developer',
    stack: 'typescript, react, jotai',
    repository: 'https://github.com/tranhoan/hoang-portfolio',
    summary: `My personal website I designed and developed. Made with great care.`,
  },
};
