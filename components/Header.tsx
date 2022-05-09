import React from 'react';
import styled, { css } from 'styled-components';
import SignatureLogo from '../public/signatureLogo.svg';
import NamePartLogo from '../public/namePartLogo.svg';
import { FiInstagram, FiLinkedin, FiFacebook } from 'react-icons/fi';
import { activeSectionAtom, isMenuOpenAtom } from '../store';
import { useAtom } from 'jotai';
import { sections } from '../data/sectionData';

declare global {
  interface Window {
    fullpage_api?: any;
  }
}

const Header: React.FC = () => {
  const [nextActiveSection] = useAtom(activeSectionAtom);
  const [isMenuOpen, setIsMenuOpen] = useAtom(isMenuOpenAtom);

  const openMenu = () => {
    setIsMenuOpen(true);
    window.fullpage_api.setAllowScrolling(false);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    window.fullpage_api.setAllowScrolling(true);
  };
  return (
    <S.Header
      isColorBeige={
        isMenuOpen
          ? !sections[nextActiveSection].isColorBeige
          : sections[nextActiveSection].isColorBeige
      }
    >
      <S.Navigation>
        <S.LogoContainer>
          <SignatureLogo />
          <NamePartLogo />
        </S.LogoContainer>
        <VerticalLine />
        <S.MenuActionWrapper>
          <S.ButtonContainer>
            <S.MenuButton onClick={() => openMenu()} isActive={!isMenuOpen}>
              menu
            </S.MenuButton>
            <S.MenuButton onClick={() => closeMenu()} isActive={isMenuOpen}>
              close
            </S.MenuButton>
          </S.ButtonContainer>
        </S.MenuActionWrapper>
      </S.Navigation>
      <S.SocialMediaWrapper>
        <HorizontalLine />
        <S.IconLink
          href='https://www.instagram.com/alwayshoangry/'
          target='_blank'
        >
          <FiInstagram size={20} />
        </S.IconLink>
        <S.IconLink
          href='https://www.facebook.com/hoang.t.quoc'
          target='_blank'
        >
          <FiFacebook size={20} />
        </S.IconLink>
        <S.IconLink href='https://www.linkedin.com/in/hoangtq' target='_blank'>
          <FiLinkedin size={20} />
        </S.IconLink>
      </S.SocialMediaWrapper>
    </S.Header>
  );
};

export const colorTransitionCss = css<{ isColorBeige: boolean }>`
  --textColor: ${(props) =>
    props.isColorBeige ? 'var(--primaryBlue)' : 'var(--secondaryGrey)'};
`;

const S = {
  Header: styled.header<{ isColorBeige: boolean }>`
    box-sizing: border-box;
    position: fixed;
    right: 2.4rem;
    top: 2.4rem;
    left: 2.4rem;
    z-index: 10000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 6.4rem 8rem 0 8rem;
    ${colorTransitionCss}
  `,
  SocialMediaWrapper: styled.div`
    display: flex;
    align-items: center;
  `,
  IconLink: styled.a`
    color: var(--textColor);
    margin-left: 4rem;
    transition: transform 0.2s cubic-bezier(0.645, 0.045, 0.355, 1),
      color 1s cubic-bezier(0.645, 0.045, 0.355, 1);

    &:hover {
      transform: translateY(-0.3rem);
    }
  `,
  LogoContainer: styled.div`
    display: flex;
    align-items: baseline;
    margin-right: 4rem;
    & path {
      transition: fill 1s cubic-bezier(0.645, 0.045, 0.355, 1);
      fill: var(--textColor);
    }
  `,
  Navigation: styled.div`
    display: flex;
    align-items: center;
  `,

  MenuButton: styled.span<{ isActive: boolean }>`
    font-size: 1.8rem;
    color: var(--textColor);
    font-weight: 600;
    transition: color 1s cubic-bezier(0.645, 0.045, 0.355, 1),
      transform 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.3);
    position: absolute;
    display: inline-block;
    top: 0;
    left: 0;
    transform: ${(props) =>
      props.isActive ? 'translateY(0)' : 'translateY(-150%)'};
    &:first-child {
      position: relative;
    }
  `,
  MenuActionWrapper: styled.button`
    margin: 0 4rem;
    overflow: hidden;
    position: relative;
    min-width: 5.6rem;
    transition: letter-spacing 0.12s var(--easing);
    &:hover {
      letter-spacing: 2px;
    }
  `,
  ButtonContainer: styled.div`
    position: relative;
    display: inline-block;
  `,
};

export const HorizontalLine = styled.div`
  width: 5.2rem;
  height: 0.1rem;
  background-color: var(--textColor);
  transition: background-color 1s cubic-bezier(0.645, 0.045, 0.355, 1);
`;

export const VerticalLine = styled.div`
  width: 0.1rem;
  background-color: var(--textColor);
  transition: background-color 1s cubic-bezier(0.645, 0.045, 0.355, 1);
  height: 2.4rem;
`;
export default Header;
