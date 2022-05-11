import React from 'react';
import Background from './Background';
import Credit from './Credit';
import Header from './Header';
import Menu from './Menu';

interface Props {
  children?: React.ReactNode;
}
const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <Menu />
      <Background />
      <Credit />
      {children}
    </>
  );
};
export default Layout;
