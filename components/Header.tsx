import React from 'react';
import styled, { css } from 'styled-components';
import SignatureLogo from '../public/signatureLogo.svg';
import NamePartLogo from '../public/namePartLogo.svg';
import { FiInstagram, FiLinkedin, FiFacebook } from 'react-icons/fi';
import { activeSectionAtom } from '../store';
import { useAtom } from 'jotai';
import { sections } from '../data/sectionData';
import Link from 'next/link';
import { useManageMenu } from '../hooks/menuHooks';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

declare global {
  interface Window {
    fullpage_api?: any;
  }
}

const Header: React.FC = () => {
  const [nextActiveSection] = useAtom(activeSectionAtom);
  const [closeMenu, openMenu, isMenuOpen] = useManageMenu();
  const router = useRouter();
  const logoLink =
    router.route === '/' ? (
      <S.LogoContainer href='#0'>
        <SignatureLogo />
        <NamePartLogo />
      </S.LogoContainer>
    ) : (
      <Link href='/#0' passHref>
        <S.LogoContainer>
          <SignatureLogo />
          <NamePartLogo />
        </S.LogoContainer>
      </Link>
    );
  return (
    <StyledHeader
      isColorBeige={
        isMenuOpen ? false : sections[nextActiveSection].isColorBeige
      }
    >
      <S.Navigation>
        <Link href={router.route === '/' ? '#0' : '/#0'} passHref>
          <S.LogoContainer>
            <SignatureLogo />
            <StyledNameLogo />
          </S.LogoContainer>
        </Link>
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
        <IconLink
          href='https://www.instagram.com/alwayshoangry/'
          target='_blank'
        >
          <FiInstagram size={20} />
        </IconLink>
        <IconLink href='https://www.facebook.com/hoang.t.quoc' target='_blank'>
          <FiFacebook size={20} />
        </IconLink>
        <IconLink href='https://www.linkedin.com/in/hoangtq' target='_blank'>
          <FiLinkedin size={20} />
        </IconLink>
      </S.SocialMediaWrapper>
    </StyledHeader>
  );
};

export const VerticalLine = styled.div`
  width: 0.1rem;
  background-color: var(--textColor);
  transition: background-color 1s cubic-bezier(0.645, 0.045, 0.355, 1);
  height: 2.4rem;
`;

export const colorTransitionCss = css<{ isColorBeige: boolean }>`
  --textColor: ${(props) =>
    props.isColorBeige ? 'var(--primaryBlue)' : 'var(--primaryBeige)'};
`;

const S = {
  SocialMediaWrapper: styled.div`
    display: flex;
    align-items: center;
  `,
  LogoContainer: styled(motion.a)`
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
    transition: letter-spacing 350ms ease;
    &:hover {
      letter-spacing: 0.1rem;
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

export const IconLink = styled.a`
  color: var(--textColor);
  margin-left: 4rem;
  display: flex;
  align-items: center;
  transition: transform 0.2s cubic-bezier(0.645, 0.045, 0.355, 1),
    color 1s cubic-bezier(0.645, 0.045, 0.355, 1);

  &:hover {
    transform: translateY(-0.3rem);
  }
`;

const StyledNameLogo = styled(NamePartLogo)`
  @media (max-width: 600) {
    display: none;
  }
`;

const StyledHeader = styled.header<{ isColorBeige: boolean }>`
  box-sizing: border-box;
  position: fixed;
  right: 0;
  top: 0;
  left: 0;
  z-index: 10000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-inline: min(10.4rem, 10vw);
  margin-top: min(8.8rem, 10vw);
  ${colorTransitionCss}

  ${StyledNameLogo}, ${S.MenuActionWrapper}, ${S.SocialMediaWrapper}, ${VerticalLine} {
    @media (max-width: 600px) {
      display: none;
    }
  }
  ${S.LogoContainer}, ${S.MenuActionWrapper} {
    @media (max-width: 1200px) {
      transform: scale(0.8);
    }
  }
`;
export default Header;
