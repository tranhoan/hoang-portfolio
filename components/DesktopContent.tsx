import ReactFullpage, { Item } from '@fullpage/react-fullpage';
import { motion } from 'framer-motion';
import { useAtom } from 'jotai';
import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { imageVariants } from '../animations/animations';
import { activeSectionAtom } from '../store';
import CustomLink from './CustomLink';
import OverflowContainer, { TextContainer } from './OverflowContainer';
import ScrollLine from './ScrollLine';

const DesktopContainer: React.FC = () => {
  const [isFirstSectionLoaded, setIsFirstSectionLoaded] = useState(false);
  const [isSecondSectionLoaded, setIsSecondSectionLoaded] = useState(false);
  const [isThirdSectionLoaded, setIsThirdSectionLoaded] = useState(false);
  const [nextActiveSection, setNextActiveSection] = useAtom(activeSectionAtom);

  const onSectionLeave = (
    origin: Item,
    destination: Item,
    direction: string
  ) => {
    setNextActiveSection(destination.index);
  };

  const onSectionEnter = (
    origin: Item,
    destination: Item,
    direction: string
  ) => {
    if (destination.index === 0) {
      setIsFirstSectionLoaded(true);
    } else if (destination.index === 1) {
      setIsSecondSectionLoaded(true);
    } else if (destination.index === 2) {
      setIsThirdSectionLoaded(true);
    }
  };
  return (
    <ContentDesktopContainer>
      <ReactFullpage
        anchors={['0', '1', '2']}
        licenseKey={'YOUR_KEY_HERE'}
        scrollingSpeed={800}
        verticalCentered={false}
        css3={true}
        easingcss3={'cubic-bezier(.82,.28,.34,.62)'}
        onLeave={onSectionLeave}
        afterLoad={onSectionEnter}
        animateAnchor={true}
        responsiveWidth={600}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <IntroSection className={'section'}>
                <IntroductionWrapper fadeInDone={isFirstSectionLoaded}>
                  <GreetingParagraph
                    transitionDelay='0s'
                    className='overflow-row'
                  >
                    hi there,
                  </GreetingParagraph>
                  <IntroParagraph>
                    <StyledOverflowContainer
                      transitionDelay='500ms'
                      className='overflow-row'
                    >
                      my name is Hoang, I am an aspiring
                    </StyledOverflowContainer>
                    <StyledOverflowContainer
                      transitionDelay='600ms'
                      className='overflow-row'
                    >
                      frontend developer and UX
                    </StyledOverflowContainer>
                    <StyledOverflowContainer
                      transitionDelay='700ms'
                      className='overflow-row'
                    >
                      designer based in Prague.
                    </StyledOverflowContainer>
                  </IntroParagraph>
                </IntroductionWrapper>
              </IntroSection>
              <AboutSection className={'section'}>
                <SectionMainWrapper fadeInDone={isSecondSectionLoaded}>
                  <SecondSectionLabel
                    className='overflow-row'
                    transitionDelay='0s'
                  >
                    About me
                  </SecondSectionLabel>
                  <DescriptionParagraph>
                    <StyledOverflowContainer
                      transitionDelay='500ms'
                      className='overflow-row'
                    >
                      I&apos;m a CTU graduate specializing in Human computer
                      interaction and
                    </StyledOverflowContainer>
                    <StyledOverflowContainer
                      transitionDelay='600ms'
                      className='overflow-row'
                    >
                      someone who has always been passionate about visually
                      pleasing
                    </StyledOverflowContainer>
                    <StyledOverflowContainer
                      transitionDelay='700ms'
                      className='overflow-row'
                    >
                      aesthetics. As a designer, I aim to create interfaces with
                      usability and
                    </StyledOverflowContainer>
                    <StyledOverflowContainer
                      transitionDelay='800ms'
                      className='overflow-row'
                    >
                      users&apos; needs in mind. As a developer I create
                      interactive experience
                    </StyledOverflowContainer>
                    <StyledOverflowContainer
                      transitionDelay='900ms'
                      className='overflow-row'
                    >
                      using technologies such as React, Typescript.
                    </StyledOverflowContainer>
                  </DescriptionParagraph>
                </SectionMainWrapper>
              </AboutSection>
              <WorkSection className={'section'}>
                <SectionMainWrapper
                  fadeInDone={isThirdSectionLoaded}
                  variants={imageVariants}
                  initial={false}
                  animate={false}
                  exit='exit'
                >
                  <ThirdSectionLabel
                    className='overflow-row'
                    transitionDelay='0s'
                  >
                    Selected work
                  </ThirdSectionLabel>
                  <SelectedWorkWrapper>
                    <StyledOverflowContainer
                      transitionDelay='500ms'
                      className='flex-row'
                    >
                      <CustomLink href='/project/visualclass'>
                        visualclass,
                      </CustomLink>
                      <CustomLink href='/project/hub'>hub,</CustomLink>
                      <CustomLink href='/project/felsight'>
                        felsight,
                      </CustomLink>
                      <CustomLink href='/project/visuflights'>
                        visuflights,
                      </CustomLink>
                      <CustomLink href='/project/mintodo'>min todo,</CustomLink>
                    </StyledOverflowContainer>
                    <StyledOverflowContainer
                      transitionDelay='600ms'
                      className='flex-row'
                    >
                      <CustomLink href='/project/hoang'>hoang tran,</CustomLink>
                    </StyledOverflowContainer>
                  </SelectedWorkWrapper>
                </SectionMainWrapper>
              </WorkSection>
            </ReactFullpage.Wrapper>
          );
        }}
      />
      <ScrollLine />
    </ContentDesktopContainer>
  );
};

export const fadeInCss = css<{ fadeInDone: boolean }>`
  transition: opacity 500ms var(--easing),
    transform 1s var(--easing) var(--delay);
  transform: ${(props) =>
    props.fadeInDone ? 'translateY(0px)' : 'translateY(100%)'};
  opacity: ${(props) => (props.fadeInDone ? '1' : '0')};
`;

const GreetingParagraph = styled(OverflowContainer)`
  font-size: clamp(1.2rem, 1rem + 2vw, 4.5rem);
  margin-bottom: min(4.8rem, 7%);
  margin-top: 0;
`;

const IntroParagraph = styled.span`
  font-size: clamp(2rem, 1rem + 3vw, 6.5rem);
  line-height: 9rem;
  max-width: 98rem;
  margin: 0;

  @media (max-width: 1200px) {
    line-height: 7rem;
  }
`;

export const IntroSection = styled(motion.section)`
  height: 100vh;
  background-color: var(--primaryBeige);
  background-clip: content-box;
  perspective: 200;
`;

const WorkSection = styled(IntroSection)`
  color: var(--primaryBlue);
`;

const AboutSection = styled(IntroSection)`
  background-color: var(--primaryBlue);
`;

const SecondSectionLabel = styled(GreetingParagraph)`
  font-size: clamp(1rem, 1rem + 0.7vw, 2.4rem);
  color: var(--primaryBeige);
  margin-top: 0;
  font-weight: 400;
`;

const ThirdSectionLabel = styled(SecondSectionLabel)`
  color: var(--primaryBlue);
`;

export const DescriptionParagraph = styled.span`
  font-size: clamp(1rem, 2.2vw, 4rem);
  color: var(--primaryBeige);
  line-height: 9rem;
  padding: 0;
  margin: 0;
  width: fit-content;

  @media (max-width: 1200px) {
    line-height: 7rem;
  }
`;

export const SelectedWorkWrapper = styled(DescriptionParagraph)`
  color: var(--primaryBlue);
  font-size: clamp(2rem, 1rem + 3vw, 6.5rem);
  display: flex;
  flex-wrap: wrap;
`;

export const StyledOverflowContainer = styled(OverflowContainer)``;

const IntroductionWrapper = styled(motion.div)<{ fadeInDone: boolean }>`
  display: flex;
  flex-direction: column;
  color: var(--primaryBlue);
  margin-left: min(26.4rem, 14vw);
  padding-top: min(26.4rem, 35vw);
  perspective: 2rem;
  width: fit-content;

  ${TextContainer} {
    ${fadeInCss}
  }
`;

export const SectionMainWrapper = styled(IntroductionWrapper)`
  padding-top: 22.4rem;
  max-width: 1300px;
`;

const ContentDesktopContainer = styled.div`
  @media (max-width: 600px) {
    display: none;
  }
`;

export default DesktopContainer;
