import React from 'react';
import styled, { css } from 'styled-components';
import SignatureLogo from '../public/signatureLogo.svg';
import NamePartLogo from '../public/namePartLogo.svg';
import { FiInstagram, FiLinkedin, FiFacebook } from 'react-icons/fi';
import { activeSectionAtom } from '../store';
import { useAtom } from 'jotai';
import { sections } from '../data/sectionData';

const Header: React.FC = () => {
  const [nextActiveSection] = useAtom(activeSectionAtom);
  return (
    <S.Header sectionColor={sections[nextActiveSection].sectionColor}>
      <S.Navigation>
        <S.LogoContainer>
          <SignatureLogo />
          <NamePartLogo />
        </S.LogoContainer>
        <VerticalLine />
        <S.MenuButton>menu</S.MenuButton>
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

export const colorTransitionCss = css<{ sectionColor: 'beige' | 'blue' }>`
  --textColor: ${(props) =>
    props.sectionColor === 'beige'
      ? 'var(--primaryBlue)'
      : 'var(--secondaryGrey)'};
`;

const S = {
  Header: styled.header<{ sectionColor: 'beige' | 'blue' }>`
    box-sizing: border-box;
    position: fixed;
    right: 2.4rem;
    top: 2.4rem;
    left: 2.4rem;
    z-index: 9000;
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
      color 2s cubic-bezier(0.645, 0.045, 0.355, 1);

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

  MenuButton: styled.div`
    font-size: 1.8rem;
    margin: 0 4rem;
    color: var(--textColor);
    font-weight: 600;
    transition: color 1s cubic-bezier(0.645, 0.045, 0.355, 1);
  `,
};

export const HorizontalLine = styled.div`
  width: 5.2rem;
  height: 0.1rem;
  background-color: var(--textColor);
  transition: background-color 1s cubic-bezier(0.645, 0.045, 0.355, 1);
`;

export const VerticalLine = styled.div`
  height: 2.4rem;
  width: 0.1rem;
  background-color: var(--textColor);
  transition: background-color 1s cubic-bezier(0.645, 0.045, 0.355, 1);
`;
export default Header;
