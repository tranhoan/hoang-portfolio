import { useAtom } from 'jotai';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { IntroSection } from '../..';
import { PROJECT_DETAIL_ID } from '../../../data/sectionData';
import { activeSectionAtom } from '../../../store';

const Project: React.FC = () => {
  const [nextActiveSection, setNextActiveSection] = useAtom(activeSectionAtom);
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    setNextActiveSection(PROJECT_DETAIL_ID);
  }, [setNextActiveSection]);

  return <S.ProjectDetailContainer>{id}</S.ProjectDetailContainer>;
};

const S = {
  ProjectDetailContainer: styled.div`
    height: 100%;
    background-color: var(--primaryBlue);
    background-clip: content-box;
    box-sizing: border-box;
    color: var(--secondaryGrey);
  `,
};
export default Project;
