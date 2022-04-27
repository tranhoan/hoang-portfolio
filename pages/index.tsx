import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import styled from 'styled-components';
import ReactFullpage from '@fullpage/react-fullpage';

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <ReactFullpage
        scrollingSpeed={900}
        css3={true}
        easingcss3={'cubic-bezier(.82,.28,.34,.62)'}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <IntroSection className='section' />
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
export default Home;