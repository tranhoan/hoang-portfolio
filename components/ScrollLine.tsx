import { useAtom } from 'jotai';
import React from 'react';
import styled, { css } from 'styled-components';
import { sections } from '../data/sectionData';
import { activeSectionAtom } from '../store';
import { colorTransitionCss, VerticalLine } from './Header';

const ScrollLine: React.FC = () => {
  const [nextActiveSection] = useAtom(activeSectionAtom);
  return (
    <S.Footer sectionColor={sections[nextActiveSection].sectionColor}>
      <S.ScrollContainer
        isLast={sections[nextActiveSection].sectionNumber === 2}
      >
        <S.TextWrapper>Scroll down</S.TextWrapper>
        <S.ScrollLine />
      </S.ScrollContainer>
      <S.SectionPagination>
        <S.Numerator>
          <S.Page>01</S.Page>
          <S.Page>02</S.Page>
          <S.Page>03</S.Page>
        </S.Numerator>
        / 03
      </S.SectionPagination>
    </S.Footer>
  );
};

const S = {
  TextWrapper: styled.div`
    font-size: 1.6rem;
    font-weight: 400;
    color: var(--textColor);
    margin-bottom: 3.2rem;
    animation: reveal 1s ease-out 1.5s backwards;
    transition: color 1s cubic-bezier(0.645, 0.045, 0.355, 1);
  `,
  ScrollContainer: styled.div<{
    isLast: boolean;
  }>`
    display: ${(props) => (props.isLast ? 'none' : 'flex')};
    flex-direction: column;
    align-items: center;
  `,
  ScrollLine: styled(VerticalLine)`
    height: 22.4rem;
    animation: scrollLineIn 800ms var(--easing) 1.5s backwards;
  `,
  Footer: styled.div<{ sectionColor: 'beige' | 'blue' }>`
    display: flex;
    position: fixed;
    bottom: 2.4rem;
    right: 17.6rem;
    ${colorTransitionCss}
  `,
  SectionPagination: styled.div`
    font-size: 2.4rem;
    font-weight: 600;
    color: var(--textColor);
    align-self: end;
    margin-bottom: 6.4rem;
    padding-left: 3.2rem;
    min-width: 6.4rem;
    transition: color 1s cubic-bezier(0.645, 0.045, 0.355, 1);
  `,

  Numerator: styled.span``,

  Page: styled.span``,
};
export default ScrollLine;
