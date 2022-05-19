import { motion } from 'framer-motion';
import { useAtom } from 'jotai';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { imageVariants } from '../../animations/animations';
import { ProjectLink } from '../../components/CustomLink';
import {
  colorTransitionCss,
  HorizontalLine,
  IconLink,
} from '../../components/Header';
import {
  ProjectDetailType,
  ProjectNames,
  projects,
} from '../../data/projectDetails';
import { PROJECT_DETAIL_ID, sections } from '../../data/sectionData';
import { activeSectionAtom } from '../../store';

const Project: React.FC = () => {
  const [nextActiveSection, setNextActiveSection] = useAtom(activeSectionAtom);
  const [currentProject, setCurrentProject] = useState(
    'felsight' as ProjectNames
  );
  const router = useRouter();
  const prevProjectRef = useRef<ProjectNames>();
  useEffect(() => {
    setNextActiveSection(PROJECT_DETAIL_ID);
  }, [setNextActiveSection]);

  useEffect(() => {
    prevProjectRef.current = currentProject as ProjectNames;
    if (router.isReady) {
      const id =
        router.query.id instanceof Array
          ? router.query.id[0]
          : router.query.id ?? prevProjectRef.current;
      setCurrentProject(id as ProjectNames);
    }
  }, [router.isReady, router.query, currentProject]);

  const projectLink = projects[currentProject].repository ? (
    <S.RepositoryLink
      href={projects[currentProject].repository}
      target='_blank'
    >
      github
    </S.RepositoryLink>
  ) : (
    <>under nda</>
  );
  return (
    <S.DetailSection isColorBeige={sections[nextActiveSection].isColorBeige}>
      <S.ProjectDetailContainer
        variants={imageVariants}
        initial={false}
        animate={false}
        exit='exit'
      >
        <S.ProjectHeader>
          <S.DateContainer>
            <S.ItemLine />
            <S.ProjectYear>
              from {projects[currentProject].yearMade}
            </S.ProjectYear>
          </S.DateContainer>
          <S.ProjectTitle>{projects[currentProject].name}</S.ProjectTitle>
        </S.ProjectHeader>
        <S.ProjectDescription>
          <S.Summary>{projects[currentProject].summary}</S.Summary>
          <S.SideInfoList>
            <S.InfoItem>
              <S.ItemHeader>
                <S.ItemLine />
                <S.ItemTitle>my role</S.ItemTitle>
              </S.ItemHeader>
              <S.ItemValue>{projects[currentProject].myRole}</S.ItemValue>
            </S.InfoItem>
            <S.InfoItem>
              <S.ItemHeader>
                <S.ItemLine />
                <S.ItemTitle>stack</S.ItemTitle>
              </S.ItemHeader>
              <S.ItemValue>{projects[currentProject].stack}</S.ItemValue>
            </S.InfoItem>
            <S.InfoItem>
              <S.ItemHeader>
                <S.ItemLine />
                <S.ItemTitle>links</S.ItemTitle>
              </S.ItemHeader>
              <S.ItemValue>{projectLink}</S.ItemValue>
            </S.InfoItem>
          </S.SideInfoList>
        </S.ProjectDescription>
      </S.ProjectDetailContainer>
    </S.DetailSection>
  );
};

const S = {
  DetailSection: styled(motion.div)<{ isColorBeige: boolean }>`
    height: 100%;
    background-color: var(--primaryBeige);
    background-clip: content-box;
    box-sizing: border-box;
    color: var(--textColor);
    ${colorTransitionCss};
  `,
  ProjectDetailContainer: styled(motion.div)`
    display: flex;
    flex-direction: column;
    margin-left: 36rem;
    padding-top: 19.2rem;
  `,
  ProjectHeader: styled.div`
    animation: reveal 1s ease-out 700ms backwards;
  `,
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
    font-weight: 500;
    margin: 0;
  `,
  ItemLine: styled(HorizontalLine)`
    width: 4rem;
  `,
  ProjectDescription: styled.div`
    display: grid;
    grid-template-columns: 80rem 24rem;
    column-gap: 13.6rem;
    margin-top: 5.6rem;
    animation: reveal 1s ease-out 1s backwards;
  `,
  Summary: styled.p`
    font-size: 3rem;
    font-weight: 400;
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
    margin-bottom: 2rem;
  `,
  ItemValue: styled.span`
    width: fit-content;
  `,
  ItemTitle: styled.h4`
    font-weight: 500;
    margin: 0 0 0 2.4rem;
  `,
  RepositoryIconLink: styled(IconLink)`
    margin-left: 2.4rem;
  `,
  RepositoryLink: styled(ProjectLink)`
    margin-inline-end: 1rem;
  `,
};
export default Project;
