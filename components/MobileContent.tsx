import React from 'react';
import styled from 'styled-components';
import { DescriptionParagraph, SectionMainWrapper } from './DesktopContent';

const MobileContent: React.FC = () => {
  return (
    <S.ContentMobileContainer>
      <S.MobileSectionMainWrapper fadeInDone={true}>
        <S.ApologyDescriptionParagraph>
          Sorry, the mobile version is currently being worked on.
        </S.ApologyDescriptionParagraph>
      </S.MobileSectionMainWrapper>
    </S.ContentMobileContainer>
  );
};

const S = {
  ContentMobileContainer: styled.div`
    height: 100%;
    background-color: var(--primaryBeige);
    display: none;
    @media (max-width: 600px) {
      display: block;
    }
  `,
  ApologyDescriptionParagraph: styled(DescriptionParagraph)`
    color: var(--primaryBlue);
    font-size: 3rem;
    width: 80%;
  `,
  MobileSectionMainWrapper: styled(SectionMainWrapper)`
    padding-top: 12rem;
  `,
};
export default MobileContent;
