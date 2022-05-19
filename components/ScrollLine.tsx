import { useAtom } from 'jotai';
import React from 'react';
import styled, { css } from 'styled-components';
import { sections } from '../data/sectionData';
import { activeSectionAtom } from '../store';
import { colorTransitionCss, VerticalLine } from './Header';

const ScrollLine: React.FC = () => {
  const [nextActiveSection] = useAtom(activeSectionAtom);
  return (
    <S.Footer isColorBeige={sections[nextActiveSection].isColorBeige}>
      <S.ScrollContainer
        isLast={sections[nextActiveSection].sectionNumber === 2}
      >
        <S.TextWrapper>Scroll down</S.TextWrapper>
        <S.ScrollLine />
      </S.ScrollContainer>
      <S.SectionPagination>
        <Numerator page={sections[nextActiveSection].sectionNumber + 1}>
          <S.FirstPage>01</S.FirstPage>
          <S.SecondPage>02</S.SecondPage>
          <S.ThirdPage>03</S.ThirdPage>
        </Numerator>
        <S.Slash>/</S.Slash>
        <S.TotalPages>03</S.TotalPages>
      </S.SectionPagination>
    </S.Footer>
  );
};

const paginationCss = css`
  display: inline-block;
  top: 0;
  left: 0;
  transition: transform 700ms cubic-bezier(0.645, 0.045, 0.355, 1);
`;

const S = {
  TextWrapper: styled.div`
    font-size: 1.6rem;
    color: var(--textColor);
    margin-bottom: 3.2rem;
    animation: reveal 1s ease-out 1.5s backwards;
    transition: color 1s cubic-bezier(0.645, 0.045, 0.355, 1);
  `,
  ScrollContainer: styled.div<{
    isLast: boolean;
  }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: ${(props) => (props.isLast ? 'scaleY(0)' : 'scaleY(1)')};
    transition: transform 500ms var(--easing);
  `,
  ScrollLine: styled(VerticalLine)`
    height: 22.4rem;
    animation: scrollLineIn 800ms var(--easing) 1.2s backwards;
  `,
  Footer: styled.div<{ isColorBeige: boolean }>`
    display: flex;
    position: fixed;
    bottom: 0;
    right: 17.6rem;
    ${colorTransitionCss}
  `,
  SectionPagination: styled.div`
    font-size: 2.4rem;
    color: var(--textColor);
    align-self: end;
    margin-bottom: 6.4rem;
    padding-left: 3.2rem;
    min-width: 6.4rem;
    transition: color 1s cubic-bezier(0.645, 0.045, 0.355, 1);
    animation: reveal 800ms var(--easing) 900ms backwards;
    overflow: hidden;
  `,

  FirstPage: styled.span`
    position: absolute;
    ${paginationCss}
  `,
  SecondPage: styled.span`
    position: relative;
    ${paginationCss}
  `,
  ThirdPage: styled.span`
    position: absolute;
    ${paginationCss}
  `,
  Slash: styled.span`
    padding: 0 1.2rem;
  `,
  TotalPages: styled.span``,
};

const Numerator = styled.span<{ page: number }>`
  position: relative;
  display: inline-block;
  ${(props) =>
    props.page === 1 &&
    css`
      ${S.FirstPage} {
        transform: translate3d(0px, 0%, 0px);
      }
      ${S.SecondPage} {
        transform: translate3d(0px, 100%, 0px);
      }
      ${S.ThirdPage} {
        transform: translate3d(0px, 200%, 0px);
      }
    `}
  ${(props) =>
    props.page === 2 &&
    css`
      ${S.FirstPage} {
        transform: translate3d(0px, -100%, 0px);
      }
      ${S.SecondPage} {
        transform: translate3d(0px, 0%, 0px);
      }
      ${S.ThirdPage} {
        transform: translate3d(0px, 100%, 0px);
      }
    `}
  ${(props) =>
    props.page === 3 &&
    css`
      ${S.FirstPage} {
        transform: translate3d(0px, -200%, 0px);
      }
      ${S.SecondPage} {
        transform: translate3d(0px, -100%, 0px);
      }
      ${S.ThirdPage} {
        transform: translate3d(0px, 0%, 0px);
      }
    `}
`;
export default ScrollLine;
