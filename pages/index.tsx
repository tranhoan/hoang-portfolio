import type { NextPage } from 'next';
import Head from 'next/head';
import React, { useState, useEffect, useCallback } from 'react';
import styled, { css } from 'styled-components';
import ReactFullpage, { Item } from '@fullpage/react-fullpage';
import Header from '../components/Header';
import Background from '../components/Background';
import { activeSectionAtom } from '../store';
import { useAtom } from 'jotai';

const Home: NextPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isNextSectionLoaded, setIsNextSectionLoaded] = useState(false);
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
    setIsNextSectionLoaded((prevLoaded) => !prevLoaded);
    setNextActiveSection(destination.index);
  };
  return (
    <React.Fragment>
      <Head>
        <title>Hoang Tran</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <Background />
      <ReactFullpage
        licenseKey={'YOUR_KEY_HERE'}
        scrollingSpeed={900}
        verticalCentered={false}
        css3={true}
        easingcss3={'cubic-bezier(.82,.28,.34,.62)'}
        onLeave={onSectionLeave}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <IntroSection className={'section'}>
                <IntroductionWrapper>
                  <GreetingParagraph fadeInDone={isLoaded}>
                    hi there,
                  </GreetingParagraph>
                  <IntroParagraph fadeInDone={isLoaded}>
                    my name is Hoang, I am an aspiring frontend developer and UX
                    designer based in Prague.
                  </IntroParagraph>
                </IntroductionWrapper>
              </IntroSection>
              <AboutSection className={'section'}>
                <AboutTextWrapper fadeInDone={isNextSectionLoaded}>
                  <SectionLabel>About me</SectionLabel>
                  <DescriptionParagraph>
                    I'm a CTU graduate specializing in Human computer
                    interaction and someone who has always been passionate about
                    visually pleasing aesthetics. As a designer, I aim to create
                    interfaces with usability and users' needs in mind. As a
                    developer I create interactive experience using technologies
                    such as React, Typescript.
                  </DescriptionParagraph>
                </AboutTextWrapper>
              </AboutSection>
              <WorkSection className={'section'}></WorkSection>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </React.Fragment>
  );
};
const fadeInCss = css<{ fadeInDone: boolean }>`
  transition: opacity 500ms var(--easing), transform 600ms var(--easing);
  transform: ${(props) =>
    props.fadeInDone ? 'translateY(0px)' : 'translateY(-4rem)'};
  opacity: ${(props) => (props.fadeInDone ? '1' : '0')};
`;

const Main = styled.div`
  height: 100vh;
  width: 100%;
`;
const IntroSection = styled.section`
  height: 100vh;
  background-color: var(--primaryBlue);
  background-clip: content-box;
  box-sizing: border-box;
`;

const WorkSection = styled(IntroSection)``;

const AboutSection = styled(IntroSection)`
  background-color: var(--primaryBeige);
`;

const AboutTextWrapper = styled.div<{ fadeInDone: boolean }>`
  display: flex;
  flex-direction: column;
  margin-left: 20.4rem;
  padding-top: 19.6rem;
  max-width: 1494px;
  ${fadeInCss}
  transition-delay: 700ms;
`;

const SectionLabel = styled.span`
  font-size: 2.4rem;
  font-weight: 600;
  color: var(--primaryBlue);
  margin-bottom: 4rem;
`;

const DescriptionParagraph = styled.p`
  font-size: 5rem;
  color: var(--primaryBlue);
  line-height: 9rem;
  font-weight: medium;
  padding: 0;
  margin: 0;
`;

const IntroductionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--secondaryGrey);
  margin-left: 24rem;
  padding-top: 16rem;
`;
const GreetingParagraph = styled.p<{ fadeInDone: boolean }>`
  font-size: 4.5rem;
  font-weight: 600;
  margin-bottom: 5.6rem;
  ${fadeInCss}
`;

const IntroParagraph = styled.p<{ fadeInDone: boolean }>`
  font-size: 6.5rem;
  line-height: 9rem;
  max-width: 98rem;
  margin: 0;
  ${fadeInCss}
  transition-delay: 700ms;
`;
export default Home;
