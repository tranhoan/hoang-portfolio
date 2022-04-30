import React from 'react';
import styled, { css } from 'styled-components';
import SignatureLogo from '../public/signatureLogo.svg';
import NamePartLogo from '../public/name.svg';
import { FiInstagram, FiLinkedin, FiFacebook } from 'react-icons/fi';
const Header: React.FC = () => {
  return (
    <S.Header>
      <S.LogoContainer>
        <SignatureLogo />
        <NamePartLogo />
      </S.LogoContainer>
      <S.SocialMediaWrapper>
        <HorizontalLine />
        <S.IconLink href='https://www.instagram.com/alwayshoangry/'>
          <FiInstagram size={20} />
        </S.IconLink>
        <S.IconLink href='https://www.facebook.com/hoang.t.quoc'>
          <FiFacebook size={20} />
        </S.IconLink>
        <S.IconLink href='https://www.linkedin.com/in/hoangtq'>
          <FiLinkedin size={20} />
        </S.IconLink>
      </S.SocialMediaWrapper>
    </S.Header>
  );
};
const S = {
  Header: styled.header`
    box-sizing: border-box;
    position: fixed;
    right: 2.4rem;
    top: 2.4rem;
    left: 2.4rem;
    z-index: 5000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 6.4rem 8rem 0 8rem;
  `,
  SocialMediaWrapper: styled.div`
    display: flex;
    align-items: center;
  `,
  IconLink: styled.a`
    color: var(--secondaryGrey);
    margin-left: 4rem;
    transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    &:hover {
      transform: translateY(-0.3rem);
    }
  `,
  LogoContainer: styled.div`
    display: flex;
  `,
};

const HorizontalLine = styled.div`
  width: 5.2rem;
  height: 0.1rem;
  background-color: var(--secondaryGrey);
`;
export default Header;
