import { useAtom } from 'jotai';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import styled, { css } from 'styled-components';
import { sections } from '../data/sectionData';
import { useManageMenu } from '../hooks/menuHooks';
import { activeSectionAtom } from '../store';
import { HorizontalLine } from './Header';
import OverflowContainer, { TextContainer } from './OverflowContainer';

const Menu: React.FC = () => {
  const [nextActiveSection] = useAtom(activeSectionAtom);
  const [closeMenu, , isMenuOpen] = useManageMenu();
  const router = useRouter();
  const homeLink =
    router.route === '/' ? (
      <S.MenuLink href='#0'>home</S.MenuLink>
    ) : (
      <Link href='/#0' passHref>
        <S.MenuLink>home</S.MenuLink>
      </Link>
    );
  const aboutLink =
    router.route === '/' ? (
      <S.MenuLink href='#1'>about me</S.MenuLink>
    ) : (
      <Link href='/#1' passHref>
        <S.MenuLink>about me</S.MenuLink>
      </Link>
    );
  const workLink =
    router.route === '/' ? (
      <S.MenuLink href='#2'>selected work</S.MenuLink>
    ) : (
      <Link href='/#2' passHref>
        <S.MenuLink>selected work</S.MenuLink>
      </Link>
    );
  return (
    <S.MenuWrapper
      isBackgroundBeige={sections[nextActiveSection].isColorBeige}
      isVisible={isMenuOpen}
    >
      <S.MenuContainer>
        <S.MenuList>
          <MenuItem
            transitionDelay='1s'
            className='overflow-list-item'
            forwardedAs='li'
            key={'home-item'}
          >
            <S.MenuHorizontalLine />
            <S.MenuItemTitle onClick={() => closeMenu()}>
              {homeLink}
            </S.MenuItemTitle>
          </MenuItem>
          <MenuItem
            key={'about-item'}
            transitionDelay='1.2s'
            className='overflow-list-item'
            forwardedAs='li'
          >
            <S.MenuHorizontalLine />
            <S.MenuItemTitle onClick={() => closeMenu()}>
              {aboutLink}
            </S.MenuItemTitle>
          </MenuItem>
          <MenuItem
            transitionDelay='1.4s'
            className='overflow-list-item'
            forwardedAs='li'
            key={'work-item'}
          >
            <S.MenuHorizontalLine />
            <S.MenuItemTitle onClick={() => closeMenu()}>
              {workLink}
            </S.MenuItemTitle>
          </MenuItem>
          <MenuItem
            transitionDelay='1.6s'
            className='overflow-list-item'
            forwardedAs='li'
            key={'resume-item'}
          >
            <S.MenuHorizontalLine />
            <S.MenuItemTitle>
              <S.MenuLink target='_blank' href='/hoang_resume.pdf'>
                my resume
              </S.MenuLink>
            </S.MenuItemTitle>
          </MenuItem>
        </S.MenuList>
      </S.MenuContainer>
    </S.MenuWrapper>
  );
};

const MenuItem = styled(OverflowContainer)`
  list-style-position: inside;
  display: flex;
  align-items: center;
`;

const S = {
  MenuContainer: styled.div`
    display: flex;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    padding: 22.4rem 10.4rem 3.2rem 10.4rem;
    box-sizing: border-box;
    color: var(--textColor);
  `,
  MenuList: styled.ol`
    display: flex;
    flex-direction: column;
    gap: min(6.4rem, 4vw);
    font-size: clamp(2rem, 1rem + 2.9vw, 6.5rem);
    font-weight: 500;
    padding: 0;
    margin: 0;
    counter-reset: li;
    list-style-type: none;

    @media (max-height: 800px) {
      font-size: 4.5rem;
    }
  `,
  MenuItemTitle: styled.span`
    margin-left: 5.6rem;
  `,
  MenuHorizontalLine: styled(HorizontalLine)`
    width: 8rem;
  `,
  MenuWrapper: styled.div<{ isBackgroundBeige: boolean; isVisible: boolean }>`
    position: fixed;
    border-radius: 2px;
    box-sizing: border-box;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    --textColor: var(--primaryBeige);
    background-color: var(--primaryBlue);

    z-index: 9000;
    transform-style: preserve-3d;
    transform-origin: 50% 0%;
    ${(props) =>
      props.isVisible
        ? css`
            transform: translateY(0);
            transition: transform 0.5s cubic-bezier(0.246, 0.75, 0.187, 1);
          `
        : css`
            transform: translateY(100%);
            transition: transform 0.7s cubic-bezier(0.246, 0.75, 0.187, 1) 1.8s;
          `}
    ${TextContainer} {
      counter-increment: li;
      &::before {
        font-size: clamp(1rem, 1rem + 0.8vw, 2rem);
        content: counter(li, decimal-leading-zero);
        margin-right: 2.4rem;
      }
      transition: transform 0.5s var(--easing) var(--delay);
      transform: ${(props) =>
        props.isVisible ? 'translateY(0%)' : 'translateY(110%)'};
    }
  `,
  MenuLink: styled.a`
    color: var(--primaryBeige);
    font-weight: 400;
    transition: letter-spacing 350ms ease;
    &:hover {
      letter-spacing: 0.2rem;
    }
    &:visited {
      color: inherit;
    }
  `,
};
export default Menu;
