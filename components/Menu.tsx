import { useAtom } from 'jotai';
import React from 'react';
import styled, { css } from 'styled-components';
import { sections } from '../data/sectionData';
import { activeSectionAtom, isMenuOpenAtom } from '../store';

const Menu: React.FC = () => {
  const [isMenuOpen] = useAtom(isMenuOpenAtom);
  const [nextActiveSection] = useAtom(activeSectionAtom);
  return (
    <S.MenuContainer
      isBackgroundBeige={sections[nextActiveSection].isColorBeige}
      isVisible={isMenuOpen}
    ></S.MenuContainer>
  );
};

const S = {
  MenuContainer: styled.div<{ isVisible: boolean; isBackgroundBeige: boolean }>`
    width: 100%;
    height: 100%;
    background-color: ${(props) =>
      props.isBackgroundBeige ? 'var(--primaryBlue)' : 'var(--primaryBeige)'};
    transition: transform 0.7s cubic-bezier(0.165, 0.84, 0.44, 1),
      var(--zIndexTransition);
    position: fixed;
    top: 0;
    left: 0;
    ${(props) =>
      props.isVisible
        ? css`
            --zIndexTransition: z-index 0s 0s;
            z-index: 9000;
            transform: translateY(0);
          `
        : css`
            --zIndexTransition: z-index 0s 0.8s;
            transform: translateY(-100%);
            z-index: -1000;
          `}
  `,
};
export default Menu;
