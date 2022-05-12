import { useAtom } from 'jotai';
import React from 'react';
import styled, { css } from 'styled-components';
import { sections } from '../data/sectionData';
import FirstLine from '../public/line.svg';
import SecondLine from '../public/line2.svg';
import { activeSectionAtom } from '../store';
import { colorTransitionCss } from './Header';

const Background: React.FC = () => {
  const [nextActiveSection] = useAtom(activeSectionAtom);
  return (
    <S.ShapeContainer isColorBeige={sections[nextActiveSection].isColorBeige}>
      <S.FirstCurve />
      <S.SecondCurve />
    </S.ShapeContainer>
  );
};

const shapeCss = css`
  position: absolute;
  pointer-events: none;
  opacity: 0.2;
  transition: opacity 0.2s linear;
  & path {
    stroke: var(--textColor);
    transition: stroke 1s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
`;
const S = {
  ShapeContainer: styled.div<{ isColorBeige: boolean }>`
    pointer-events: none;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
    z-index: 8000;
    animation: reveal 1s ease-in;
    ${colorTransitionCss}
  `,
  FirstCurve: styled(FirstLine)`
    position: absolute;
    bottom: 50%;
    right: 50%;
    margin-bottom: -30rem;
    margin-right: -40rem;
    animation: curve1 20s infinite alternate linear;
    ${shapeCss}
  `,
  SecondCurve: styled(SecondLine)`
    top: 50%;
    left: 50%;
    margin-top: -60rem;
    margin-left: -47.5rem;
    transform: rotate(15deg);
    animation: curve2 20s infinite alternate linear;
    ${shapeCss}
  `,
};
export default Background;
