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
  const [nextActiveSection, setNextActiveSection] = useAtom(activeSectionAtom);
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const onSectionLeave = (
    origin: Item,
    destination: Item,
    direction: string
  ) => {
    console.log({ origin, destination, direction });
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
              <IntroSection className='section'>
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
              <AboutSection className='section' />
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </React.Fragment>
  );
};
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

const AboutSection = styled(IntroSection)`
  background-color: var(--primaryBeige);
`;

const fadeInCss = css<{ fadeInDone: boolean }>`
  transition: opacity 500ms var(--easing), transform 600ms var(--easing);
  transform: ${(props) =>
    props.fadeInDone ? 'translateY(0px)' : 'translateY(-4rem)'};
  opacity: ${(props) => (props.fadeInDone ? '1' : '0')};
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
