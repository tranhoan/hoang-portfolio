import { useAtom } from 'jotai';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { HorizontalLine, IconLink } from '../../components/Header';
import {
  ProjectDetailType,
  ProjectNames,
  projects,
} from '../../data/projectDetails';
import { PROJECT_DETAIL_ID } from '../../data/sectionData';
import { activeSectionAtom } from '../../store';
import { FiGithub } from 'react-icons/fi';

const Project: React.FC = () => {
  const [nextActiveSection, setNextActiveSection] = useAtom(activeSectionAtom);
  const router = useRouter();
  const id =
    router.query.id instanceof Array
      ? router.query.id[0]
      : router.query.id ?? 'felsight';
  const project = projects[id as ProjectNames];
  useEffect(() => {
    setNextActiveSection(PROJECT_DETAIL_ID);
  }, [setNextActiveSection, project]);

  return (
    <S.DetailSection>
      <S.ProjectDetailContainer>
        <S.ProjectHeader>
          <S.DateContainer>
            <S.ItemLine />
            <S.ProjectYear>from {project.yearMade}</S.ProjectYear>
          </S.DateContainer>
          <S.ProjectTitle>{project.name}</S.ProjectTitle>
        </S.ProjectHeader>
        <S.ProjectDescription>
          <S.Summary>{project.summary}</S.Summary>
          <S.SideInfoList>
            <S.InfoItem>
              <S.ItemHeader>
                <S.ItemLine />
                <S.ItemTitle>my role</S.ItemTitle>
              </S.ItemHeader>
              <S.ItemValue>{project.myRole}</S.ItemValue>
            </S.InfoItem>
            <S.InfoItem>
              <S.ItemHeader>
                <S.ItemLine />
                <S.ItemTitle>stack</S.ItemTitle>
              </S.ItemHeader>
              <S.ItemValue>{project.stack}</S.ItemValue>
            </S.InfoItem>
            <S.InfoItem>
              <S.ItemHeader>
                <S.ItemLine />
                <S.RepositoryIconLink href={project.repository} target='_blank'>
                  <FiGithub />
                </S.RepositoryIconLink>
              </S.ItemHeader>
            </S.InfoItem>
          </S.SideInfoList>
        </S.ProjectDescription>
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
    margin-top: 5.6rem;
    animation: reveal 1s ease-out 1s backwards;
  `,
  Summary: styled.p`
    font-size: 3rem;
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
    margin-bottom: 2rem;
  `,
  ItemValue: styled.span`
    font-weight: 400;
  `,
  ItemTitle: styled.h4`
    font-weight: 600;
    margin: 0 0 0 2.4rem;
  `,
  RepositoryIconLink: styled(IconLink)`
    margin-left: 2.4rem;
  `,
};
export default Project;
