import { useAtom } from 'jotai';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { IntroSection } from '../..';
import { HorizontalLine } from '../../../components/Header';
import { PROJECT_DETAIL_ID } from '../../../data/sectionData';
import { activeSectionAtom } from '../../../store';

const Project: React.FC = () => {
  const [nextActiveSection, setNextActiveSection] = useAtom(activeSectionAtom);
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    setNextActiveSection(PROJECT_DETAIL_ID);
  }, [setNextActiveSection]);

  return (
    <S.DetailSection>
      <S.ProjectDetailContainer>
        <S.ProjectHeader>
          <S.DateContainer>
            <S.DateLine />
            <S.ProjectYear>from 2022</S.ProjectYear>
          </S.DateContainer>
          <S.ProjectTitle>VisualClass</S.ProjectTitle>
        </S.ProjectHeader>
      </S.ProjectDetailContainer>
    </S.DetailSection>
  );
};

const S = {
  DetailSection: styled.div`
    height: 100%;
    background-color: var(--primaryBlue);
    background-clip: content-box;
    box-sizing: border-box;
    color: var(--secondaryGrey);
  `,
  ProjectDetailContainer: styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 36rem;
    padding-top: 19.2rem;
  `,
  ProjectHeader: styled.div``,
  DateContainer: styled.div`
    display: flex;
    align-items: center;
  `,
  ProjectYear: styled.span`
    font-size: 2rem;
    font-weight: 400;
    margin-left: 2.4rem;
  `,
  ProjectTitle: styled.h1`
    font-size: 5rem;
    font-weight: 600;
  `,
  DateLine: styled(HorizontalLine)`
    width: 4rem;
  `,
};
export default Project;
