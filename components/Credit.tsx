import { useAtom } from 'jotai';
import React from 'react';
import styled from 'styled-components';
import { sections } from '../data/sectionData';
import { activeSectionAtom } from '../store';
import { colorTransitionCss, HorizontalLine } from './Header';

const Credit: React.FC = () => {
  const [nextActiveSection] = useAtom(activeSectionAtom);
  return (
    <S.CreditContainer isColorBeige={sections[nextActiveSection].isColorBeige}>
      <S.CreditLine />
      <S.CreditText>2022 design and code by hoang</S.CreditText>
    </S.CreditContainer>
  );
};

const S = {
  CreditContainer: styled.div<{ isColorBeige: boolean }>`
    transform: rotate(-90deg);
    transform-origin: top left;
    position: fixed;
    left: 2.4rem;
    bottom: 2.4rem;
    z-index: 10000;
    display: flex;
    align-items: center;
    margin-left: 8rem;
    margin-bottom: 4.8rem;
    color: var(--textColor);
    ${colorTransitionCss}
    transition: color 1s cubic-bezier(0.645, 0.045, 0.355, 1);
  `,
  CreditText: styled.span`
    font-size: 1.3rem;
    font-weight: 500;
    margin-left: 1.6rem;
    transform-origin: center;
    animation: revealX 1s ease-out 2s backwards;
  `,
  CreditLine: styled(HorizontalLine)`
    animation: scrollLineInX 800ms var(--easing) 1.7s backwards;
  `,
};
export default Credit;
