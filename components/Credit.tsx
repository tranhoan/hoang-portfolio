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
    transform-origin: top left;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 8500;
    display: flex;
    align-items: center;
    margin-left: min(10.4rem, 10vw);
    margin-bottom: 4.8rem;
    color: var(--textColor);
    ${colorTransitionCss}
    transition: color 1s cubic-bezier(0.645, 0.045, 0.355, 1);

    @media (min-width: 1400px) {
      transform: rotate(-90deg);
    }
  `,
  CreditText: styled.span`
    font-size: 1.3rem;
    margin-left: 1.6rem;
    transform-origin: center;
    animation: revealX 1s ease-out 1.9s backwards;
  `,
  CreditLine: styled(HorizontalLine)`
    animation: scrollLineInX 700ms var(--easing) 1.7s backwards;
  `,
};
export default Credit;
