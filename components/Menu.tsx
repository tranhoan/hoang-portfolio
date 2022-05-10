import { useAtom } from 'jotai';
import React from 'react';
import styled, { css } from 'styled-components';
import { sections } from '../data/sectionData';
import { activeSectionAtom, isMenuOpenAtom } from '../store';
import { colorTransitionCss, HorizontalLine } from './Header';

const Menu: React.FC = () => {
  const [isMenuOpen] = useAtom(isMenuOpenAtom);
  const [nextActiveSection] = useAtom(activeSectionAtom);
  return (
    <S.MenuWrapper
      isBackgroundBeige={sections[nextActiveSection].isColorBeige}
      isVisible={isMenuOpen}
    >
      <S.MenuContainer>
        <S.MenuList>
          <S.MenuItem>
            <S.MenuHorizontalLine />
            <S.MenuItemTitle>home</S.MenuItemTitle>
          </S.MenuItem>
          <S.MenuItem>
            <S.MenuHorizontalLine />
            <S.MenuItemTitle>about me</S.MenuItemTitle>
          </S.MenuItem>
          <S.MenuItem>
            <S.MenuHorizontalLine />
            <S.MenuItemTitle>selected work </S.MenuItemTitle>
          </S.MenuItem>
          <S.MenuItem>
            <S.MenuHorizontalLine />
            <S.MenuItemTitle>my resume </S.MenuItemTitle>
          </S.MenuItem>
        </S.MenuList>
      </S.MenuContainer>
    </S.MenuWrapper>
  );
};

const S = {
  MenuContainer: styled.div`
    display: flex;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    padding: 19.4rem 8rem;
    box-sizing: border-box;
    color: var(--textColor);
  `,
  MenuList: styled.ol`
    display: flex;
    flex-direction: column;
    font-size: 6.5rem;
    font-weight: 500;
    padding: 0;
    margin: 0;
    counter-reset: li;
    list-style-type: none;
  `,
  MenuItem: styled.li`
    list-style-position: inside;
    counter-increment: li;
    margin-bottom: 6.4rem;
    display: flex;
    align-items: center;
    &::before {
      font-size: 2rem;
      content: counter(li, decimal-leading-zero);
      margin-right: 2.4rem;
    }
  `,
  MenuItemTitle: styled.span`
    margin-left: 5.6rem;
  `,
  MenuHorizontalLine: styled(HorizontalLine)`
    width: 8rem;
  `,
  MenuWrapper: styled.div<{ isBackgroundBeige: boolean; isVisible: boolean }>`
    width: 100%;
    height: 100%;
    position: fixed;
    padding: 2.4rem;
    box-sizing: border-box;
    top: 0;
    left: 0;
    --textColor: ${(props) =>
      props.isBackgroundBeige ? 'var(--secondaryGrey)' : 'var(--primaryBlue)'};
    background-color: ${(props) =>
      props.isBackgroundBeige ? 'var(--primaryBlue)' : 'var(--primaryBeige)'};

    transition: transform 0.7s var(--easing), var(--zIndexTransition);
    ${(props) =>
      props.isVisible
        ? css`
            --zIndexTransition: z-index 0s 0s;
            z-index: 9000;
            transform: translateY(0);
          `
        : css`
            --zIndexTransition: z-index 0s 0.8s;
            transform: translateY(100%);
            z-index: -1000;
          `}
  `,
};
export default Menu;
