import React from 'react';
import styled, { css } from 'styled-components';
import FirstLine from '../public/line.svg';
import SecondLine from '../public/line2.svg';

const Background: React.FC = () => {
  return (
    <S.ShapeContainer>
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
}
`;
const S = {
  ShapeContainer: styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
    z-index: 8000;
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
