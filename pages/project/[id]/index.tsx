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
            <S.ItemLine />
            <S.ProjectYear>from 2022</S.ProjectYear>
          </S.DateContainer>
          <S.ProjectTitle>VisualClass</S.ProjectTitle>
        </S.ProjectHeader>
        <S.ProjectDescription>
          <S.Summary>
            The main challenge of this project was the lack of real
            communication in distance education. VisualClass is a virtual space
            simulating real life interactions, creating the feeling of a unified
            school space.
          </S.Summary>
          <S.SideInfoList>
            <S.InfoItem>
              <S.ItemHeader>
                <S.ItemLine />
                <S.ItemTitle>My Role</S.ItemTitle>
              </S.ItemHeader>
              <S.ItemValue>designer, developer</S.ItemValue>
            </S.InfoItem>
            <S.InfoItem>
              <S.ItemHeader>
                <S.ItemLine />
                <S.ItemTitle>Stack</S.ItemTitle>
              </S.ItemHeader>
              <S.ItemValue>typescript, react, jotai</S.ItemValue>
            </S.InfoItem>
            <S.InfoItem>
              <S.ItemHeader>
                <S.ItemLine />
                <S.ItemTitle>Repository</S.ItemTitle>
              </S.ItemHeader>
              <S.ItemValue>typescript, react, jotai</S.ItemValue>
            </S.InfoItem>
          </S.SideInfoList>
        </S.ProjectDescription>
      </S.ProjectDetailContainer>
    </S.DetailSection>
  );
};

const S = {
  DetailSection: styled.div`
    height: calc(100% - 4.8rem);
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
    margin-bottom: 4rem;
  `,
  ProjectYear: styled.span`
    font-size: 2rem;
    font-weight: 400;
    margin-left: 2.4rem;
  `,
  ProjectTitle: styled.h1`
    font-size: 5rem;
    font-weight: 600;
    margin: 0;
  `,
  ItemLine: styled(HorizontalLine)`
    width: 4rem;
  `,
  ProjectDescription: styled.div`
    display: grid;
    grid-template-columns: 80rem 24rem;
    column-gap: 13.6rem;
    margin-top: 6.4rem;
  `,
  Summary: styled.p`
    font-size: 3.2rem;
    font-weight: 500;
    line-height: 60px;
    margin: 0;
  `,
  SideInfoList: styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
    font-size: 2rem;
    margin: 0;
    padding: 0;
  `,
  InfoItem: styled.li`
    display: flex;
    flex-direction: column;
    margin-bottom: 4rem;
  `,
  ItemHeader: styled.span`
    display: flex;
    align-items: center;
    margin-bottom: 2.4rem;
  `,
  ItemValue: styled.span`
    font-weight: 400;
  `,
  ItemTitle: styled.h4`
    font-weight: 600;
    margin: 0 0 0 2.4rem;
  `,
};
export default Project;
