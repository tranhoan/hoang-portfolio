import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import styled from 'styled-components';
import DesktopContent from '../components/DesktopContent';

const Home: NextPage = () => {
  return (
    <MainContent>
      <Head>
        <title>Hoang Tran</title>
        <meta name='description' content='Hoang Tran portfolio' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <DesktopContent />
    </MainContent>
  );
};
const MainContent = styled.div``;
export default Home;
