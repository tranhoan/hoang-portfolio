import type { NextPage } from 'next';
import Head from 'next/head';
import React, { useState, useEffect, useCallback } from 'react';
import styled, { css } from 'styled-components';
import ReactFullpage, { Item } from '@fullpage/react-fullpage';
import { activeSectionAtom, isMenuOpenAtom } from '../store';
import { useAtom } from 'jotai';
import ScrollLine from '../components/ScrollLine';

const Home: NextPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isSecondSectionLoaded, setIsSecondSectionLoaded] = useState(false);
  const [isThirdSectionLoaded, setIsThirdSectionLoaded] = useState(false);
  const [nextActiveSection, setNextActiveSection] = useAtom(activeSectionAtom);
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const onSectionLeave = (
    origin: Item,
    destination: Item,
    direction: string
  ) => {
    console.log('hoang');
    setNextActiveSection(destination.index);
  };

  const onSectionEnter = (
    origin: Item,
    destination: Item,
    direction: string
  ) => {
    if (destination.index === 1) {
      setIsSecondSectionLoaded(true);
    } else if (destination.index === 2) {
      setIsThirdSectionLoaded(true);
    }
  };
  return (
    <React.Fragment>
      <Head>
        <title>Hoang Tran</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <ReactFullpage
        anchors={['1', '2', '3']}
        licenseKey={'YOUR_KEY_HERE'}
        scrollingSpeed={800}
        verticalCentered={false}
        css3={true}
        easingcss3={'cubic-bezier(.82,.28,.34,.62)'}
        onLeave={onSectionLeave}
        afterLoad={onSectionEnter}
        credits={{
          enabled: false,
          label: 'Made with fullPage.js',
          position: 'right',
        }}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <IntroSection className={'section'}>
                <IntroductionWrapper fadeInDone={isLoaded}>
                  <GreetingParagraph>hi there,</GreetingParagraph>
                  <IntroParagraph>
                    my name is Hoang, I am an aspiring frontend developer and UX
                    designer based in Prague.
                  </IntroParagraph>
                </IntroductionWrapper>
              </IntroSection>
              <AboutSection className={'section'}>
                <SectionMainWrapper fadeInDone={isSecondSectionLoaded}>
                  <SecondSectionLabel>About me</SecondSectionLabel>
                  <DescriptionParagraph>
                    I'm a CTU graduate specializing in Human computer
                    interaction and someone who has always been passionate about
                    visually pleasing aesthetics. As a designer, I aim to create
                    interfaces with usability and users' needs in mind. As a
                    developer I create interactive experience using technologies
                    such as React, Typescript.
                  </DescriptionParagraph>
                </SectionMainWrapper>
              </AboutSection>
              <WorkSection className={'section'}>
                <SectionMainWrapper fadeInDone={isThirdSectionLoaded}>
                  <ThirdSectionLabel>Selected work</ThirdSectionLabel>
                  <SelectedWorkWrapper>
                    <ProjectLink href='/project/1'>visualclass</ProjectLink>,
                    hub, felsight, visuflights, min todo, hoang tran
                  </SelectedWorkWrapper>
                </SectionMainWrapper>
              </WorkSection>
            </ReactFullpage.Wrapper>
          );
        }}
      />
      <ScrollLine />
    </React.Fragment>
  );
};
const fadeInCss = css<{ fadeInDone: boolean }>`
  transition: opacity 500ms var(--easing), transform 900ms var(--easing);
  transform: ${(props) =>
    props.fadeInDone ? 'translateY(0px)' : 'translateY(-4rem)'};
  opacity: ${(props) => (props.fadeInDone ? '1' : '0')};
`;

const GreetingParagraph = styled.p`
  font-size: 4.5rem;
  font-weight: 600;
  margin-bottom: 5.6rem;
`;

const IntroParagraph = styled.p`
  font-size: 6.5rem;
  line-height: 9rem;
  max-width: 98rem;
  margin: 0;
`;

export const IntroSection = styled.section`
  height: 100vh;
  background-color: var(--primaryBlue);
  background-clip: content-box;
`;

const WorkSection = styled(IntroSection)`
  color: var(--secondaryGrey);
`;

const AboutSection = styled(IntroSection)`
  background-color: var(--primaryBeige);
`;

const SecondSectionLabel = styled.h3`
  font-size: 2.4rem;
  font-weight: 600;
  color: var(--primaryBlue);
  margin-bottom: 4rem;
`;

const ThirdSectionLabel = styled(SecondSectionLabel)`
  color: var(--secondaryGrey);
`;

const DescriptionParagraph = styled.p`
  font-size: 4.5rem;
  color: var(--primaryBlue);
  line-height: 9rem;
  font-weight: medium;
  padding: 0;
  margin: 0;
`;

const SelectedWorkWrapper = styled(DescriptionParagraph)`
  color: var(--primaryBeige);
  font-size: 6.5rem;
`;

const SectionMainWrapper = styled.div<{ fadeInDone: boolean }>`
  display: flex;
  flex-direction: column;
  margin-left: 20.4rem;
  padding-top: 19.6rem;
  max-width: 1300px;

  ${SecondSectionLabel} {
    ${fadeInCss}
  }
  ${DescriptionParagraph} {
    ${fadeInCss}
    transition-delay: 500ms;
  }
`;

const IntroductionWrapper = styled.div<{ fadeInDone: boolean }>`
  display: flex;
  flex-direction: column;
  color: var(--secondaryGrey);
  margin-left: 24rem;
  padding-top: 16rem;

  ${GreetingParagraph} {
    ${fadeInCss}
  }
  ${IntroParagraph} {
    ${fadeInCss}
    transition-delay: 500ms;
  }
`;

const ProjectLink = styled.a``;

export default Home;
